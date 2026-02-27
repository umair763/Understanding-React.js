
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload, isLoading: false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.loanPurpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payloan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/covertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency == "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch) {
//     dispatch({ type: "account/covertingCurrency" });

//     //Api Call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
//     );
//     const data = await res.json();
//     const convertedAmount = data.rates.USD;

//     //return action
//     dispatch({ type: "account/deposit", payload: convertedAmount });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, loanPurpose: "Buy a car" },
//   };
// }

// export function payLoan() {
//   return { type: "account/payloan" };
// }


// Async thunk for currency conversion
export const convertCurrency = createAsyncThunk(
  "account/convertCurrency",
  async ({ amount, currency }, { rejectWithValue }) => {
    if (currency === "USD") {
      // Direct deposit if USD
      return amount;
    }
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      return data.rates.USD;
    } catch {
      return rejectWithValue("Currency conversion failed");
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return state;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.balance += action.payload;
        state.isLoading = false;
      })
      .addCase(convertCurrency.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default accountSlice.reducer;


export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
// Usage: dispatch(convertCurrency({ amount, currency }))

console.log(accountSlice);
console.log(requestLoan(5000, "buy car"));
