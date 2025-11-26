import { payinSecImage1, payinSecImage5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Create Invoice/Credit/Debit Card`}
      src={payinSecImage5}
      backRoute="/Payin-main"
      subPageTitle="Credit/Debit Card_Request Body"
    />
  );
};

export default ReponsesReasonCodes;
