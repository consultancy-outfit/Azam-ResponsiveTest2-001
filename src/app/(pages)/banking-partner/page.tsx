
import { BankingPartnerMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BankingPartnerPage = () => {
  return (
    <CommonPage
      pageTitle={`Banking Partner`}
      src={BankingPartnerMainPageImage}
      backRoute="/fiat-republic"
    />
  );
};

export default BankingPartnerPage;
