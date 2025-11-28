import {  virtualAccountsSec1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Allocations/Allocate IBAN V3`}
      src={virtualAccountsSec1Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Allocate IBAN V3_Response"
    />
  );
};

export default ReponsesReasonCodes;
