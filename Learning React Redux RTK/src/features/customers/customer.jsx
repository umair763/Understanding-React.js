import React from "react";
import { useSelector } from "react-redux";

export const Customer = () => {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);

  return (
    <>
      <h1>Welcome, {customer}</h1>
    </>
  );
};
