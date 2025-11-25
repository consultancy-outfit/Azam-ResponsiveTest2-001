"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    endpoint,
} from "@/assets";

const EndpintsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Fix Endpoints"
      backRoute="/overview-crypto-fix-api"
      image={endpoint}
    />
  );
};

export default EndpintsPage;
