import { payoutsecImage13, payoutsecImage14 } from "@/assets";
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
Request_Body`}
      src={payoutsecImage14}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
