import { FiatEagleNetCoinMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatEagleNetCoinPage = () => {
  return (
    <CommonPage
      pageTitle={`EagleNet Coin`}
      src={FiatEagleNetCoinMainPageImage}
      backRoute="/fiat-about"
    />
  );
};

export default FiatEagleNetCoinPage;