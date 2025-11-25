import { MarketDataPage2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataPage2Page = () => {
  return (
    <CommonPage
      pageTitle={`market-data-page2`}
      src={MarketDataPage2Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default MarketDataPage2Page;
