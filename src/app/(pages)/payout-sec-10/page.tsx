import {
  payoutsecImage10,
  payoutsecImage4,
  payoutsecImage5,
  payoutsecImage6,
  payoutsecImage7,
  payoutsecImage8,
  payoutsecImage9,
} from "@/assets";
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
Request_Body`}
      src={payoutsecImage10}
      backRoute="/Payin-main"
      subPageTitle="Request _Body"
    />
  );
};

export default ReponsesReasonCodes;
