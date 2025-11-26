import {payeesMainone1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersPayees1Page = () => {
  return (
    <CommonPage
      pageTitle={`6.1.2.1 Payment Object Table Values`}
      src={payeesMainone1}
      backRoute="/fiat-developers-api-reference-payments-platform-5-8"
    />
  );
};

export default FiatDevelopersPayees1Page;