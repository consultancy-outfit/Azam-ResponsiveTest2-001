import { MarketDataPage3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataPage3Page = () => {
  return (
    <CommonPage
      pageTitle={`market-data-page3`}
      src={MarketDataPage3Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default MarketDataPage3Page;
