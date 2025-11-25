"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    case1,
} from "@/assets";

const Case1Page = () => {
  return (
    <CommonImgMapPage
      pageTitle="7.1Case 1"
      backRoute="/crypto-fix-message"
      image={case1}
    />
  );
};

export default Case1Page;
