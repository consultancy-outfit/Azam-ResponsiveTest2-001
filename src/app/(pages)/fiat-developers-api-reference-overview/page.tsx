import { FiatDevelopersAPITokenImageMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIReferenceOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`API Token`}
      src={FiatDevelopersAPITokenImageMainPageImage  }
      backRoute="/fiat-developers-api-reference"
    />
  );
};

export default FiatDevelopersAPIReferenceOverviewPage;