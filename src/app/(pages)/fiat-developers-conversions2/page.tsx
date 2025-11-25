import {threeImage9To122 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersConversions2Page = () => {
  return (
    <CommonPage
      pageTitle={`9.2.1 Conversion Object Table Values`}
        src={threeImage9To122}
      backRoute="/fiat-developers-api-reference-payments-platform-9-12"
    />
  );
};

export default FiatDevelopersConversions2Page;