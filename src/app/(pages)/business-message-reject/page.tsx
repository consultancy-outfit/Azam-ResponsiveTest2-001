"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    businessmessagereject,
} from "@/assets";

const BusinessMessageRejectPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Business Message Reject(35=j)"
      backRoute="/crypto-fix-message"
      image={businessmessagereject}
    />
  );
};

export default BusinessMessageRejectPage;
