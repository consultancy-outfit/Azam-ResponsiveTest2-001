import { FiatDevelopersAPIGuidePaymentsGuidesImageMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIGuidePaymentsGuidesPage = () => {
  return (
    <CommonPage
      pageTitle={`Payments Guides`}
      src={FiatDevelopersAPIGuidePaymentsGuidesImageMainPageImage}
      backRoute="/fiat-developers-api-guide"
    />
  );
};

export default FiatDevelopersAPIGuidePaymentsGuidesPage;