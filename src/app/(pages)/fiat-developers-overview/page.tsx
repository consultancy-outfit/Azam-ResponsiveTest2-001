import { FiatDevelopersOverviewImage, FiatDevelopersOverviewMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview`}
      src={FiatDevelopersOverviewMainPageImage  }
      backRoute="/fiat-developers"
    />
  );
};

export default FiatDevelopersOverviewPage;