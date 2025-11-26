"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    requestattributemessage,
} from "@/assets";

const RequestAttributeMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Request Attribute Message"
      backRoute="/crypto-fix-message"
      image={requestattributemessage}
    />
  );
};

export default RequestAttributeMessagePage;
