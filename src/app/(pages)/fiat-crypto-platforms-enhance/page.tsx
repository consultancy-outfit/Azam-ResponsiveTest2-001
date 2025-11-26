import { FiatCryptoPlatformsEnhanceMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatCryptoPlatformsEnhancePage = () => {
  return (
    <CommonPage
      pageTitle={`Enhance your user fiat deposit and withdrawal journeys`}
      src={FiatCryptoPlatformsEnhanceMainPageImage}
      backRoute="/fiat-republic-crypto-platforms"
    />
  );
};

export default FiatCryptoPlatformsEnhancePage;