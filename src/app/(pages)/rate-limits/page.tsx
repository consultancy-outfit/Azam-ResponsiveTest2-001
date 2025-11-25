"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
  RateLimit,
} from "@/assets";

const RateLimitPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Rate Limit"
      backRoute="/overview-crypto-fix-api"
      image={RateLimit}
    //   areas={areas}
    />
  );
};

export default RateLimitPage;
