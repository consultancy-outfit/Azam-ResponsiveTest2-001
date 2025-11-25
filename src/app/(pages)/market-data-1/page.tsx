import { MarketData1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ScryptApiPage2Page = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0 / Market Data / MarketDataSnapshot`}
      src={MarketData1Image}
      backRoute="/scrypt-api5"  
    />
  );
};

export default ScryptApiPage2Page;
