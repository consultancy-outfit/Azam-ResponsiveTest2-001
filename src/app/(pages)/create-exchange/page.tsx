import { CreateExchangeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateExchangePage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Exchange
/
Create Exchange`}
      src={CreateExchangeImage}
      backRoute="/exchange"
    />
  );
};

export default CreateExchangePage;
