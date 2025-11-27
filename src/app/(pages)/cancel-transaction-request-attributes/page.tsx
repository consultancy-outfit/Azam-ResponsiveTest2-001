import { CancelTransactionRequestAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CancelTransactionRequestAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel Transaction_ Request_Attributes`}
      src={CancelTransactionRequestAttributesImage}
      backRoute="/transaction-actions-page"
    />
  );
};

export default CancelTransactionRequestAttributesPage;
