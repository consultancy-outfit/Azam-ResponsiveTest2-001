import { APIGuideQuickstartIntegrationGuidesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIGuideQuickstartIntegrationGuidesPage = () => {
  return (
    <CommonPage
      pageTitle={`Quickstart Integration Guides`}
      src={APIGuideQuickstartIntegrationGuidesImage}
      backRoute="/fiat-developers-api-guide"
    />
  );
};

export default FiatDevelopersAPIGuideQuickstartIntegrationGuidesPage;