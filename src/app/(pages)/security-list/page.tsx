"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    securitylist,
} from "@/assets";

const SecurityListPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Security List(35=y)"
      backRoute="/crypto-fix-message"
      image={securitylist}
    />
  );
};

export default SecurityListPage;
