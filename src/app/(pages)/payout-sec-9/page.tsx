import { payoutsecImage4, payoutsecImage5, payoutsecImage6, payoutsecImage7, payoutsecImage8, payoutsecImage9 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Payout
/
GBP Transfer Faster Payments
/
Response_Body`}
      src={payoutsecImage9}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
