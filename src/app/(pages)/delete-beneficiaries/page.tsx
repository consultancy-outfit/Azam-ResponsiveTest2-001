import { DeleteBeneficiariesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeleteBeneficiariesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
Delete Beneficiary`}
      src={DeleteBeneficiariesImage}
      backRoute="/beneficiaries"
    />
  );
};

export default DeleteBeneficiariesPage;
