import { TransactionreportRequestAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionreportRequestAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`TransactionReport_ Request_Attributes`}
      src={TransactionreportRequestAttributesImage}
      backRoute="/reports-page"
    />
  );
};

export default TransactionreportRequestAttributesPage;
