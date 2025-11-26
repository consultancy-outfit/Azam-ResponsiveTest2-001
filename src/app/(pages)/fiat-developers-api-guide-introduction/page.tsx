import { APIGuideIntroductionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIGuideIntroductionPage = () => {
  return (
    <CommonPage
      pageTitle={`Introduction`}
      src={APIGuideIntroductionImage}
      backRoute="/fiat-developers-api-guide"
    />
  );
};

export default FiatDevelopersAPIGuideIntroductionPage;