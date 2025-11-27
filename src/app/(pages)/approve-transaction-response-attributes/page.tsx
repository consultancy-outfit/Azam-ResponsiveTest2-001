import { ApproveTransactionResponseAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApproveTransactionResponseAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`Approve Transaction_ Response_Attributes`}
      src={ApproveTransactionResponseAttributesImage}
      backRoute="/transaction-actions-page"
    />
  );
};

export default ApproveTransactionResponseAttributesPage;
