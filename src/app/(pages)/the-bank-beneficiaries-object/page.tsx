import { TheBankBeneficiariesObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheBankBeneficiariesObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
The Bank Beneficiary Object`}
      src={TheBankBeneficiariesObjectImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default TheBankBeneficiariesObjectPage;
