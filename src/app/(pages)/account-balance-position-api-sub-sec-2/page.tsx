import {
  ResponseSectionImageAPI2,
} from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0
/
Fiat Wallet API
/
Account Balance and Position API 

`}
      src={ResponseSectionImageAPI2}
      backRoute="/account-balance-position-api"
      subPageTitle="Account Balance and Position API "
    />
  );
};

export default ReponsesReasonCodes;
