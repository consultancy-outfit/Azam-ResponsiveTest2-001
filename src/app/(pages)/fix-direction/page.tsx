"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
  fixdirection,
} from "@/assets";

const FixDirectionPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Fix Direction"
      backRoute="/overview-crypto-fix-api"
      image={fixdirection}
    //   areas={areas}
    />
  );
};

export default FixDirectionPage;
