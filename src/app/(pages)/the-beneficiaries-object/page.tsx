import { TheBeneficiariesObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheBeneficiariesObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
The Beneficiaries Objectthe-beneficiaries-object`}
      src={TheBeneficiariesObjectImage}
      backRoute="/beneficiaries"
    />
  );
};

export default TheBeneficiariesObjectPage;
