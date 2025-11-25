import { ListTransactionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListTransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
List Transactions`}
      src={ListTransactionsImage}
      backRoute="/transactions"
    />
  );
};

export default ListTransactionsPage;
