import { payeesMainone2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersPayees2Page = () => {
  return (
    <CommonPage
      pageTitle={`6.1.3.1 Payment Object Table Values`}
        src={payeesMainone2}
      backRoute="/fiat-developers-api-reference-payments-platform-5-8"
    />
  );
};

export default FiatDevelopersPayees2Page;