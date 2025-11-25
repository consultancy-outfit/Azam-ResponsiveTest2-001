import { CreateExchangePayoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateExchangePayoutPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Exchange Payout`}
      src={CreateExchangePayoutImage}
      backRoute="/transactions"
    />
  );
};

export default CreateExchangePayoutPage;
