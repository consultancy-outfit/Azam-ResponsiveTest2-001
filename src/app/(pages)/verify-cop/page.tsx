import { VerifyCopImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const VerifyCopPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Verify CoP (Confirmation of Payee) `}
      src={VerifyCopImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default VerifyCopPage;
