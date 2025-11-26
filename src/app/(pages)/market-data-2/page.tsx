import { MarketData2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ScryptApiPage2Page = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0 / Market Data/ Currency Conversion`}
      src={MarketData2Image}
      backRoute="/scrypt-api5"
    />
  );
};

export default ScryptApiPage2Page;
