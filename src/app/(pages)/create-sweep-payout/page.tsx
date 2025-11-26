import { CreateSweepPayoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateSweepPayoutPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Sweep Payout`}
      src={CreateSweepPayoutImage}
      backRoute="/transactions"
    />
  );
};

export default CreateSweepPayoutPage;
