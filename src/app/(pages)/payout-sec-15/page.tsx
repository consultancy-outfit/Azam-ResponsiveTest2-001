import { payoutsecImage13, payoutsecImage14, payoutsecImage15 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Payout
/
To Credit/Debit Cards (non-PCI)
/
Response_Body`}
      src={payoutsecImage15}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
