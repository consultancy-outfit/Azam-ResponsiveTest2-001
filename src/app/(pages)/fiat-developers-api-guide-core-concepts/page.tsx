import { FiatDevelopersAPIGuideCoreConceptsImageMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIGuideCoreConceptsPage = () => {
  return (
    <CommonPage
      pageTitle={`Core Concepts`}
      src={FiatDevelopersAPIGuideCoreConceptsImageMainPageImage}
      backRoute="/fiat-developers-api-guide"
    />
  );
};

export default FiatDevelopersAPIGuideCoreConceptsPage;