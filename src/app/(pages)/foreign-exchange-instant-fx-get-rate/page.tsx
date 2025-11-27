import { ForeignExchangeInstantFxGetRateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForeignExchangeInstantFxGetRatePage = () => {
  return (
    <CommonPage
      pageTitle={`Foreign Exchange_Instant FX_Get Rate`}
      src={ForeignExchangeInstantFxGetRateImage}
      backRoute="/foreign-exchange-page"
    />
  );
};

export default ForeignExchangeInstantFxGetRatePage;
