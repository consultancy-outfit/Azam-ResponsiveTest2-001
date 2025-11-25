import { FiatCryptoPlatformsConsortiumMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatCryptoPlatformsConsortiumPage = () => {
  return (
    <CommonPage
      pageTitle={`Consortium`}
      src={FiatCryptoPlatformsConsortiumMainPageImage}
      backRoute="/fiat-republic-crypto-platforms"
    />
  );
};

export default FiatCryptoPlatformsConsortiumPage;