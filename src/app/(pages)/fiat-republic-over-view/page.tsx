
import { FiatRepublicOverviewMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatRepublicOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview`}
      src={FiatRepublicOverviewMainPageImage}
      backRoute="/fiat-republic"
    />
  );
};

export default FiatRepublicOverviewPage;
