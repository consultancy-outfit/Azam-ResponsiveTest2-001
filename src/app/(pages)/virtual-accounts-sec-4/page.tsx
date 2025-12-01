import {  virtualAccountsSec4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Allocations/Get IBAN information by IBAN deprecated`}
      src={virtualAccountsSec4Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Get IBAN information by IBAN deprecated_Response"
    />
  );
};

export default ReponsesReasonCodes;
