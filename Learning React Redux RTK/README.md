# React Redux Toolkit Bank (Learning Template)

This project is a simple React app using Redux Toolkit for state management, designed as a learning template for beginners. It demonstrates how to structure a modern React + Redux project, manage state, and perform basic operations like deposits, withdrawals, and loan requests.

## Features

- **Customer Management:** Create a customer with a name and national ID.
- **Account Operations:** Deposit (with currency conversion), withdraw, request a loan, and pay back a loan.
- **Balance Display:** Shows the current account balance.
- **Redux Toolkit:** Uses `createSlice`, `createAsyncThunk`, and `configureStore` for state management.
- **Tailwind CSS:** For simple, responsive styling.

## Folder Structure

```
Learning React Redux RTK/
├── public/
├── src/
│   ├── App.jsx           # Main app component
│   ├── App.css
│   ├── index.css        # Tailwind import
│   ├── main.jsx         # Entry point, sets up Redux Provider
│   ├── store/
│   │   └── store.js     # Redux store configuration
│   ├── features/
│   │   ├── accounts/
│   │   │   ├── account.slice.js      # Account state & reducers
│   │   │   ├── account.operations.jsx# UI for account actions
│   │   │   ├── balance.display.jsx   # Balance display component
│   │   │   └── index.js
│   │   ├── customers/
│   │   │   ├── customer.slice.js     # Customer state & reducers
│   │   │   ├── create.customer.jsx   # UI for creating customer
│   │   │   ├── customer.jsx          # Customer welcome component
│   │   │   └── index.js
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## How Redux Toolkit Is Used

- **Slices:**
  - `account.slice.js` manages account state (balance, loan, currency conversion).
  - `customer.slice.js` manages customer info (name, ID, creation date).
- **Async Thunks:**
  - `convertCurrency` fetches currency conversion rates for deposits.
- **Store:**
  - `store.js` combines slices and configures the Redux store.
- **Components:**
  - Components use `useSelector` and `useDispatch` to interact with Redux state and actions.

## How It Works

1. On first load, the app prompts to create a customer.
2. Once a customer is created, account operations become available:
   - Deposit money (with optional currency conversion)
   - Withdraw money
   - Request a loan (only one loan at a time)
   - Pay back loan
3. The balance is always visible in the header.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Learning Path

- Explore how Redux Toolkit simplifies state management.
- See how async actions (thunks) are handled for API calls.
- Understand component interaction with global state.

