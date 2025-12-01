import { payinSecImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Create Invoice/Credit/Debit Card`}
      src={payinSecImage1}
      backRoute="/Payin-main"
      
    />
  );
};

export default ReponsesReasonCodes;
