import {  virtualAccountsSec7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Actions/Close IBAN`}
      src={virtualAccountsSec7Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Close IBAN_Response"
    />
  );
};

export default ReponsesReasonCodes;
