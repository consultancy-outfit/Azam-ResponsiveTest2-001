"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    responseAttributes,
} from "@/assets";

const ResponceAttributesMessagePage = () => {
  return (
    <CommonImgMapPage
        pageTitle="Response Attributes"
      backRoute="/crypto-fix-message"
      image={responseAttributes}
    />
  );
};

export default ResponceAttributesMessagePage;
