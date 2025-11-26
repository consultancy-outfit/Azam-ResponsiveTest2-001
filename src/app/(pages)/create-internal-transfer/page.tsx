import { CreateInternalTransferImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateInternalTransferPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Create Internal Transfer`}
      src={CreateInternalTransferImage}
      backRoute="/transactions"
    />
  );
};

export default CreateInternalTransferPage;
