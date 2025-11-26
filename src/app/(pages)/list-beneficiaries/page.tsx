import { ListBeneficiariesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListBeneficiariesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Beneficiaries
/
List Beneficiaries`}
      src={ListBeneficiariesImage}
      backRoute="/beneficiaries"
    />
  );
};

export default ListBeneficiariesPage;
