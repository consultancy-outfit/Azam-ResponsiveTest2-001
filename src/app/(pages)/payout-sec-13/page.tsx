import { payoutsecImage13 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Payout
/
GBP transfer CHAPS Cross Scheme
/
Response_Body`}
      src={payoutsecImage13}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
