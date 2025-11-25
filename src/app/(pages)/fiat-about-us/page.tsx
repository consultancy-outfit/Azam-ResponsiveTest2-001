import { FiatAboutUsMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatAboutUsPage = () => {
  return (
    <CommonPage
      pageTitle={`About Us`}
      src={FiatAboutUsMainPageImage}
      backRoute="/fiat-about"
    />
  );
};

export default FiatAboutUsPage;
