import { InitiateNewPaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitiateNewPaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
OPEN BANKING
/
Initiate a New Payment`}
      src={InitiateNewPaymentImage}
      backRoute="/open-banking"
    />
  );
};

export default InitiateNewPaymentPage;
