import { payoutsecImage4, payoutsecImage5, payoutsecImage6 } from "@/assets";
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
Request_Body`}
      src={payoutsecImage6}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
