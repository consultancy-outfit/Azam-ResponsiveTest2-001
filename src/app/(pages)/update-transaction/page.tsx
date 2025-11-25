import { UpdateTransactionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UpdateTransactionPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Update Transaction `}
      src={UpdateTransactionImage}
      backRoute="/transactions"
    />
  );
};

export default UpdateTransactionPage;
