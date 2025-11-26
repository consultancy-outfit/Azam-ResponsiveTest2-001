import { payinSecImage1, payinSecImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Create Invoice/Credit/Debit Card`}
      src={payinSecImage2}
      backRoute="/Payin-main"
      subPageTitle="Credit/Debit Card_Response Body"
    />
  );
};

export default ReponsesReasonCodes;
