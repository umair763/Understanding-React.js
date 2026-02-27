import React from "react";
import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const BalanceDisplay = ({ balance }) => {
  return (
    <div className="font-semibold bg-gray-200 p-2 rounded-md p-2">
      {formatCurrency(balance)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
