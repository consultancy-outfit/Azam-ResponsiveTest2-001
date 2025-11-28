import {  virtualAccountsSec2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Allocations/Get IBAN Allocation status by order Reference`}
      src={virtualAccountsSec2Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Get IBAN Allocation status by order Reference_Response"
    />
  );
};

export default ReponsesReasonCodes;
