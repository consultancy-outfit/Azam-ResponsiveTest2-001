import { FiatServicesFiatRepublicFrameworkMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatServicesFiatRepublicFrameworkPage = () => {
  return (
    <CommonPage
      pageTitle={`PSD2 API`}
      src={FiatServicesFiatRepublicFrameworkMainPageImage}
      backRoute="/fiat-services"
    />
  );
};

export default FiatServicesFiatRepublicFrameworkPage;
