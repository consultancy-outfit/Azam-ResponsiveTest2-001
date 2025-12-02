"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    case3,
} from "@/assets";

const Case3Page = () => {
  return (
    <CommonImgMapPage
      pageTitle="7.3Case 3"
      backRoute="/crypto-fix-message"
      image={case3}
    />
  );
};

export default Case3Page;
