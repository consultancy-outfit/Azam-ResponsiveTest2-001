import { GetDetailedQuoteImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetDetailedQuotePage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Exchange
/
Get Detailed Quote`}
      src={GetDetailedQuoteImage}
      backRoute="/exchange"
    />
  );
};

export default GetDetailedQuotePage;
