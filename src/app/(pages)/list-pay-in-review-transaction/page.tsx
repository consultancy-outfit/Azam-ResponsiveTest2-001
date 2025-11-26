import { ListPayInReviewTransactionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListPayInReviewTransactionPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
List Pay-in Review Transactions`}
      src={ListPayInReviewTransactionImage}
      backRoute="/transactions"
    />
  );
};

export default ListPayInReviewTransactionPage;
