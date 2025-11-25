import { MarketDataPage1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataPage1Page = () => {
  return (
    <CommonPage
      pageTitle={`market-data-page1`}
      src={MarketDataPage1Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default MarketDataPage1Page;
