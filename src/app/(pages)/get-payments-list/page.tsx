import { GetPaymentsListImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentsListPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
OPEN BANKING
/
Get Payments List`}
      src={GetPaymentsListImage}
      backRoute="/open-banking"
    />
  );
};

export default GetPaymentsListPage;
