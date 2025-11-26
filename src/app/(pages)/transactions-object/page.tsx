import { TransactionsObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
The Transactions Object`}
      src={TransactionsObjectImage}
      backRoute="/transactions"
    />
  );
};

export default TransactionsObjectPage;
