import { RefundExecutionRefundRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefundExecutionRefundRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Refund Execution_Refund Request`}
      src={RefundExecutionRefundRequestImage}
      backRoute="/refund-page"
    />
  );
};

export default RefundExecutionRefundRequestPage;
