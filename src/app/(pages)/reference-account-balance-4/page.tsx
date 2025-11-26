import { ReponsesReasonCodesImage, ResponseSectionImage, ResponseSectionImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0
/
Fiat Wallet API
/
Reference and Market Data API
`}
      src={ResponseSectionImage4}
      backRoute="/reference-market-data-api"
      subPageTitle="public/get-tickers"
    />
  );
};

export default ReponsesReasonCodes;
