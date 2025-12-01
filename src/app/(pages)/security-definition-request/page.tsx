"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    securitydefinitionrequest,
} from "@/assets";

const SecurityDefinitionRequestPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Security Definition Request(35=c)"
      backRoute="/crypto-fix-message"
      image={securitydefinitionrequest}
    />
  );
};

export default SecurityDefinitionRequestPage;
