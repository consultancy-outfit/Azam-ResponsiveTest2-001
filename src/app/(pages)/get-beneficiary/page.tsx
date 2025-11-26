import { GetBeneficiaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetBeneficiaryPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Get Beneficiary`}
      src={GetBeneficiaryImage}
      backRoute="/beneficiaries"
    />
  );
};

export default GetBeneficiaryPage;
