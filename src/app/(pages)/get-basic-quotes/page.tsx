import { GetBasicQuotesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetBasicQuotesPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Exchange
/
Get Basic Quotes`}
      src={GetBasicQuotesImage}
      backRoute="/exchange"
    />
  );
};

export default GetBasicQuotesPage;
