import { DirectDebitReversalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectDebitReversalPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Direct Debit
/
Direct Debit Reversal`}
      src={DirectDebitReversalImage}
      backRoute="/direct-debit"
    />
  );
};

export default DirectDebitReversalPage;
