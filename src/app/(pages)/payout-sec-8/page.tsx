import { payoutsecImage4, payoutsecImage5, payoutsecImage6, payoutsecImage7, payoutsecImage8 } from "@/assets";
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
Request_Body`}
      src={payoutsecImage8}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
