"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    fixApi,
} from "@/assets";

const FixApiPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="What is Fix Api"
      backRoute="/overview-crypto-fix-api"
      image={fixApi}
    />
  );
};

export default FixApiPage;
