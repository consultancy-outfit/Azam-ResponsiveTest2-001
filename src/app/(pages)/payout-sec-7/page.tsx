import { payoutsecImage4, payoutsecImage5, payoutsecImage6, payoutsecImage7 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Payout
/
EUR Transfer Sepa Instan
/
Response_Body`}
      src={payoutsecImage7}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
