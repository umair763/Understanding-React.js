import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, requestLoan, payLoan, convertCurrency } from "./account.slice";

export const AccountOperations = () => {
  // State for form inputs
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);
  console.log(balance);

  const account = useSelector((store) => store.account);
  console.log(account);


  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(convertCurrency({ amount: Number(depositAmount), currency }));
    setDepositAmount("");
    setCurrency("USD");
  };

  const handleWithdraw = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Your Account Operations
      </h2>

      <div className="space-y-6 ">
        {/* Deposit Section */}
        <div className="p-4 border rounded-md space-y-3 bg-gray-100 ">
          <label className="block font-medium text-gray-700">Deposit</label>
          <div className="flex gap-3">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full px-2 py-1 border rounded-md bg-gray-100"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="px-2 py-1 border rounded-md bg-gray-100"
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
            </select>
          </div>
          <button
            onClick={handleDeposit}
            className="cursor-pointer w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        {/* Withdraw Section */}
        <div className="p-4 border rounded-md space-y-3 bg-gray-100">
          <label className="block font-medium text-gray-700">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
            className="w-full px-2 py-1 border rounded-md bg-gray-100"
          />
          <button
            onClick={handleWithdraw}
            className="cursor-pointer w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Withdraw
          </button>
        </div>

        {/* Loan Request Section */}
        <div className="p-4 border rounded-md space-y-3 bg-gray-100">
          <label className="block font-medium text-gray-700">
            Request Loan
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-2 py-1 border rounded-md bg-gray-100"
          />
          <input
            type="text"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            className="w-full px-2 py-1 border rounded-md bg-gray-100"
          />
          <button
            onClick={handleRequestLoan}
            className="cursor-pointer w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Request Loan
          </button>
        </div>

        {/* Pay Loan Section */}
        {currentLoan > 0 && (
          <div className="p-4 border rounded-md flex items-center justify-between">
            <span className="font-medium text-gray-700">
              Pay back ${currentLoan} (${currentLoanPurpose})
            </span>
            <button
              onClick={handlePayLoan}
              className="cursor-pointer px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Pay Loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
