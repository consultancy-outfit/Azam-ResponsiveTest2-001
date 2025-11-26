import { payinSecImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Create Invoice/Credit/Debit Card`}
      src={payinSecImage1}
      backRoute="/Payin-main"
      subPageTitle="Credit/Debit Card_Request Body"
    />
  );
};

export default ReponsesReasonCodes;
