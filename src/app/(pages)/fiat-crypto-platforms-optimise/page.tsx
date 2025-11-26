import { FiatCryptoPlatformsOptimiseMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatCryptoPlatformsOptimisePage = () => {
  return (
    <CommonPage
      pageTitle={`Optimise your fiat treasury operations`}
      src={FiatCryptoPlatformsOptimiseMainPageImage}
      backRoute="/fiat-republic-crypto-platforms"
    />
  );
};

export default FiatCryptoPlatformsOptimisePage;