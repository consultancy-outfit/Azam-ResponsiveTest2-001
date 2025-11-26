"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    securitylistrequest,
} from "@/assets";

const SecurityListRequestPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Security List Request(35=x)"
      backRoute="/crypto-fix-message"
      image={securitylistrequest}
    />
  );
};

export default SecurityListRequestPage;
