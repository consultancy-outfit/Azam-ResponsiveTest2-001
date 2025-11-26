"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    fixConnectivity,
} from "@/assets";

const FixConnectivityPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Fix Connectivity"
      backRoute="/overview-crypto-fix-api"
      image={fixConnectivity}
    />
  );
};

export default FixConnectivityPage;
