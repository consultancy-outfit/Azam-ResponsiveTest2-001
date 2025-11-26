import { DeleteBankBeneficiariesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeleteBankBeneficiariesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Delete Bank Beneficiary (Delete a bank beneficiary.)`}
      src={DeleteBankBeneficiariesImage}
      backRoute="/bank-beneficiaries"
    />
  );
};

export default DeleteBankBeneficiariesPage;
