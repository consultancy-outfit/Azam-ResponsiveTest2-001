"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    parameters,
} from "@/assets";

const ParametersOrdtypePage = () => {
  return (
    <CommonImgMapPage
        pageTitle="Parameters OrdType"
      backRoute="/crypto-fix-message"
      image={parameters}
    />
  );
};

export default ParametersOrdtypePage;
