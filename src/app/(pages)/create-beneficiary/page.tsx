import { CreateBeneficiaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateBeneficiaryPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Create Beneficiary`}
      src={CreateBeneficiaryImage}
      backRoute="/beneficiaries"
    />
  );
};

export default CreateBeneficiaryPage;
