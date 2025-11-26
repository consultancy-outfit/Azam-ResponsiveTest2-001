import { BeneficiaryRequiredDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BeneficiaryRequiredDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Reference Data
/
Beneficiary Required Details`}
      src={BeneficiaryRequiredDetailsImage}
      backRoute="/reference-data"
    />
  );
};

export default BeneficiaryRequiredDetailsPage;
