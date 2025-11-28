import { ConfirmationOfPayeeFlowImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConfirmationOfPayeeFlowPage = () => {
  return (
    <CommonPage
      pageTitle={`Confirmation of Payee Flow`}
      src={ConfirmationOfPayeeFlowImage}
      backRoute="/check-requisite-page"
    />
  );
};

export default ConfirmationOfPayeeFlowPage;
