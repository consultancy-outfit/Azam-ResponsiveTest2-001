import {  virtualAccountsSec8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Actions/Get IBAN Info and Status`}
      src={virtualAccountsSec8Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Get IBAN Info and Status_Response"
    />
  );
};

export default ReponsesReasonCodes;
