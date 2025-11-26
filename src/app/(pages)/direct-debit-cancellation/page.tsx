import { DirectDebitCancellationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectDebitCancellationPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Direct Debit
/
Direct Debit Cancellation`}
      src={DirectDebitCancellationImage}
      backRoute="/direct-debit"
    />
  );
};

export default DirectDebitCancellationPage;
