import { GetTheWallet41Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetTheWallet41Page = () => {
  return (
    <CommonPage
      pageTitle={`Get the Wallet 4.1`}
      src={GetTheWallet41Image}
      backRoute="/client-money-account-e-wallet-page"
    />
  );
};

export default GetTheWallet41Page;
