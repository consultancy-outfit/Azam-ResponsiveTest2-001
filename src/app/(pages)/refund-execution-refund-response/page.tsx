import { RefundExecutionRefundResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefundExecutionRefundResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Refund Execution_Refund Response`}
      src={RefundExecutionRefundResponseImage}
      backRoute="/refund-page"
    />
  );
};

export default RefundExecutionRefundResponsePage;
