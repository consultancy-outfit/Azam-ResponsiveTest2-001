import { CreateBankBeneficiaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateBankBeneficiaryPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Create Bank Beneficiary`}
      src={CreateBankBeneficiaryImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default CreateBankBeneficiaryPage;
