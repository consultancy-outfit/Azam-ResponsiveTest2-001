"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    standardTrailor,
} from "@/assets";

const StandardTrailerPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Standard Trailer"
      backRoute="/crypto-fix-message"
      image={standardTrailor}
    />
  );
};

export default StandardTrailerPage;
