"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    fixApiGenerate,
} from "@/assets";

const GeneratingPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Generating the Api Key"
      backRoute="/overview-crypto-fix-api"
      image={fixApiGenerate}
    />
  );
};

export default GeneratingPage;
