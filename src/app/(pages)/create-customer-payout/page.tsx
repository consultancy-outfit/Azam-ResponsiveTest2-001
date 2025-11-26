import { CreateCustomerPayoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateCustomerPayoutPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Customer Payout`}
      src={CreateCustomerPayoutImage}
      backRoute="/transactions"
    />
  );
};

export default CreateCustomerPayoutPage;
