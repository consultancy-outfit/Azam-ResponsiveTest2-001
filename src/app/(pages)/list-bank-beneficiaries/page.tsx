import { ListBankBeneficiariesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListBankBeneficiariesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
List Bank Beneficiaries (Get a list of bank beneficiaries filtered by various params)`}
      src={ListBankBeneficiariesImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default ListBankBeneficiariesPage;
