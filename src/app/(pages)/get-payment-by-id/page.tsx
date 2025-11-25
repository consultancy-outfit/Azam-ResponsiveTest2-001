import { GetPaymentByIdImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentByIdPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
OPEN BANKING
/
Get Payment By Id`}
      src={GetPaymentByIdImage}
      backRoute="/open-banking"
    />
  );
};

export default GetPaymentByIdPage;
