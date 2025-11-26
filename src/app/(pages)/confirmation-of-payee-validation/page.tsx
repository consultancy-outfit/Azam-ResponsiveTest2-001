import { ConfirmationOfPayeeValidationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConfirmationOfPayeeValidationPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Confirmation of Payee (CoP) Validation`}
      src={ConfirmationOfPayeeValidationImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default ConfirmationOfPayeeValidationPage;
