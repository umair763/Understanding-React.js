import { useEffect, useReducer } from "react";
import { Header } from "./components";
import { Body } from "./components";
import { Loader } from "./components";
import { Error } from "./components";
import { StartScreen } from "./components";
import { Questions } from "./components";
import { Progress } from "./components";
import { Finished } from "./components";
import { Footer } from "./components";
import { Timer } from "./components";

const SECS_PER_QUESTION = 20;

const initialState = {
  questions: [],

  //'loadng', 'success', 'error', 'active', 'show-result' 'finished'
  status: "loading",
  index: 0,
  answers: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        secondsRemaining: action.payload.length * SECS_PER_QUESTION,
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "DataFailed":
      return {
        ...state,
        status: "error",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answers: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answers: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0,
        status: state.secondsRemaining <= 1 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [
    { questions, status, index, answers, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DataReceived", payload: data }))
      .catch((err) => dispatch({ type: "DataFailed" }));
  }, []);

  return (
    <>
      <div className="min-h-screen w-full mx-auto items-center bg-gray-800 text-white">
        <Header />
        <Body>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPoints={maxPoints}
                answers={answers}
              />
              <Questions
                questions={questions[index]}
                answers={answers}
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
              />
            </>
          )}
          {status === "finished" && (
            <Finished
              points={points}
              maxPoints={maxPoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </Body>
        <Footer>
          {status === "active" && (
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          )}
        </Footer>
      </div>
    </>
  );
}

export default App;
