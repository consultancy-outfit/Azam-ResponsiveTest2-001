import { GetBankBeneficiaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetBankBeneficiaryPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Get Bank Beneficiary (Get a bank beneficiary by its id)`}
      src={GetBankBeneficiaryImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default GetBankBeneficiaryPage;
