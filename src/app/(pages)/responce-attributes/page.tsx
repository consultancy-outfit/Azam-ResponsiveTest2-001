"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    responceattributes,
} from "@/assets";

const ResponceAttributesPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Response Attributes"
      backRoute="/crypto-fix-message"
      image={responceattributes}
    />
  );
};

export default ResponceAttributesPage;
