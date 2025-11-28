import { payoutsecImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Payout`}
      src={payoutsecImage1}
      backRoute="/Payin-main"
      subPageTitle="Payout"
    />
  );
};

export default ReponsesReasonCodes;
