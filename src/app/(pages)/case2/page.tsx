"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    case2,
} from "@/assets";

const Case2Page = () => {
  return (
    <CommonImgMapPage
      pageTitle="7.2Case 2"
      backRoute="/crypto-fix-message"
      image={case2}
    />
  );
};

export default Case2Page;
