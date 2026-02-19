# React Quiz App – Learning useReducer Hook

This project is a hands-on learning tool for mastering the `useReducer` hook in React. It features a quiz application built from scratch, focusing on state management, modular component design, and practical usage of reducers.

## 🚀 Features

- **Quiz Game**: Answer multiple-choice questions with instant feedback.
- **State Management**: All quiz logic (progress, answers, scoring, timer) is managed using a single `useReducer` hook.
- **Component-Based**: Clean separation of UI and logic into reusable components.
- **Timer**: Each question is timed, demonstrating side effects with `useEffect`.
- **High Score Tracking**: See your best score across sessions.
- **Error & Loading States**: Robust handling of async data fetching.

## 🧑‍💻 Learning Focus

- How to structure state and actions for complex UIs using `useReducer`.
- Dispatching actions from deeply nested components.
- Managing side effects (timers, async fetch) alongside reducer state.
- Clean, readable, and scalable React code.

## 🗂️ Project Structure

- `src/App.jsx`: Main app logic and reducer.
- `src/components/`: All UI components (Questions, Options, Progress, Timer, etc.).
- `src/data/questions.json`: Quiz questions data.

## 🏗️ How It Works

- On load, questions are fetched and stored in state.
- The quiz starts when the user clicks "Let's Start".
- Each answer dispatches an action to update state and score.
- Timer counts down for each question; quiz ends when time runs out or all questions are answered.
- Final score and high score are displayed, with an option to restart.

## 📦 Getting Started

1. **Install dependencies**:
   ```
   npm install
   ```
2. **Start the development server**:
   ```
   npm run dev
   ```
3. **Quiz API**: Make sure your questions API (or local JSON server) is running at `http://localhost:8000/questions`.

## 📝 Customization

- Add or edit questions in `src/data/questions.json`.
- Tweak timer, points, or UI styles as you wish.

