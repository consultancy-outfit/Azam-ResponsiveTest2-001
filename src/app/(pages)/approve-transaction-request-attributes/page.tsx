import { ApproveTransactionRequestAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApproveTransactionRequestAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`Approve Transaction_ Request_Attributes`}
      src={ApproveTransactionRequestAttributesImage}
      backRoute="/transaction-actions-page"
    />
  );
};

export default ApproveTransactionRequestAttributesPage;
