import {  virtualAccountsSec3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Allocations/Get IBAN Allocation status by ClientOrder`}
      src={virtualAccountsSec3Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Get IBAN Allocation status by ClientOrder_Response"
    />
  );
};

export default ReponsesReasonCodes;
