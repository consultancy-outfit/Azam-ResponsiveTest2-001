import { ValidateBeneficiaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ValidateBeneficiaryPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Reference Data
/
Validate Beneficiary`}
      src={ValidateBeneficiaryImage}
      backRoute="/reference-data"
    />
  );
};

export default ValidateBeneficiaryPage;
