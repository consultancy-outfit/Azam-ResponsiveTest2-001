import { CreatePayoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePayoutPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Payout `}
      src={CreatePayoutImage}
      backRoute="/transactions"
    />
  );
};

export default CreatePayoutPage;
