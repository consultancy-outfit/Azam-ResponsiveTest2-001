import {  virtualAccountsSec6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Allocations/IBAN allocation notification`}
      src={virtualAccountsSec6Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="IBAN allocation notification_Response"
    />
  );
};

export default ReponsesReasonCodes;
