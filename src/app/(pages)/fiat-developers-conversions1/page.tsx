import {threeImage9To121 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersConversions1Page = () => {
  return (
    <CommonPage
      pageTitle={`9.1.2 Quotes Object Table Values`}
        src={threeImage9To121}
      backRoute="/fiat-developers-api-reference-payments-platform-9-12"
    />
  );
};

export default FiatDevelopersConversions1Page;