import { payoutsecImage11 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Payout
/
GBP Transfer CHAPS
/
Response_Body`}
      src={payoutsecImage11}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
