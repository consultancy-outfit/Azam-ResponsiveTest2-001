import { GetPayinDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayinDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Get Payin Details`}
      src={GetPayinDetailsImage}
      backRoute="/transactions"
    />
  );
};

export default GetPayinDetailsPage;
