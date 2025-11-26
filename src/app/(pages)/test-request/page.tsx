"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    cryptofixmessag,
    testRequest,
} from "@/assets";

const TestRequestPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Test Request(35=1)"
      backRoute="/crypto-fix-message"
      image={testRequest}
    />
  );
};

export default TestRequestPage;
