import { GetTransactionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetTransactionPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Get Transaction`}
      src={GetTransactionImage}
      backRoute="/transactions"
    />
  );
};

export default GetTransactionPage;
