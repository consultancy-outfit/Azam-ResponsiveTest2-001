import {threeImage9To123 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersConversions3Page = () => {
  return (
    <CommonPage
      pageTitle={`9.2.2 Conversion Statuses Table Values`}
        src={threeImage9To123}
      backRoute="/fiat-developers-api-reference-payments-platform-9-12"
    />
  );
};

export default FiatDevelopersConversions3Page;