import { PayoutReasonCodesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PayoutReasonCodesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Reference Data
/
Payout Reason Codes`}
      src={PayoutReasonCodesImage}
      backRoute="/reference-data"
    />
  );
};

export default PayoutReasonCodesPage;
