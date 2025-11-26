import { CreateBeneficiaryPayoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateBeneficiaryPayoutPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Beneficiary Payout`}
      src={CreateBeneficiaryPayoutImage}
      backRoute="/transactions"
    />
  );
};

export default CreateBeneficiaryPayoutPage;
