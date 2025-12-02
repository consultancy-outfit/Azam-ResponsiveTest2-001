import { privateGetCurrencyNetwork } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <>
      <CommonPage
        pageTitle={`Scrypt API 1.0.0 / Wallet API  / Wallet API`}
        src={privateGetCurrencyNetwork}
        backRoute="/wallet-api"
        subPageTitle="Wallet API"
      ></CommonPage>
    </>
  );
};

export default ReponsesReasonCodes;
