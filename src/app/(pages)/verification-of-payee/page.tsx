import { VerificationOfPayeeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const VerificationOfPayeePage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Verification of Payee (VoP)`}
      src={VerificationOfPayeeImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default VerificationOfPayeePage;
