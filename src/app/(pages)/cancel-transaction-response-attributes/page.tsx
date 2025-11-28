import { CancelTransactionResponseAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CancelTransactionResponseAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel Transaction_ Response_Attributes`}
      src={CancelTransactionResponseAttributesImage}
      backRoute="/transaction-actions-page"
    />
  );
};

export default CancelTransactionResponseAttributesPage;
