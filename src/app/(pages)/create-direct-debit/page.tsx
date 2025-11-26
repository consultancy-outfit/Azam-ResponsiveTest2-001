import { CreateDirectDebitImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateDirectDebitPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Direct Debit
/
Create Direct Debit`}
      src={CreateDirectDebitImage}
      backRoute="/direct-debit"
    />
  );
};

export default CreateDirectDebitPage;
