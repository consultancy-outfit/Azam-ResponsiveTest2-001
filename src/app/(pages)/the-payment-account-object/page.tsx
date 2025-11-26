import { ThePaymentAccountObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ThePaymentAccountObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Payment Accounts
/
The Payment Account Object`}
      src={ThePaymentAccountObjectImage}
      backRoute="/payment-accounts"
    />
  );
};

export default ThePaymentAccountObjectPage;
