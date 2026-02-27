import { React } from "react";
import { useSelector } from "react-redux";
import { Customer } from "./features/customers";
import { CreateCustomer } from "./features/customers";
import { AccountOperations } from "./features/accounts";
import BalanceDisplay from "./features/accounts/balance.display";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <>
      <div className="flex justify-between items-center px-3 mt-3">
        <h1 className="text-2xl font-bold text-gray-800">
          🏦 The React-Redux Bank ⚛️
        </h1>
        <BalanceDisplay />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col space-y-6">
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
          </>
        )}
      </div>
    </>
  );
}

export default App;
