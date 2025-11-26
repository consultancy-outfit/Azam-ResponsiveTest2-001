import { ReviewPayInTransactionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReviewPayInTransactionPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Review Pay-in Transaction`}
      src={ReviewPayInTransactionImage}
      backRoute="/transactions"
    />
  );
};

export default ReviewPayInTransactionPage;
