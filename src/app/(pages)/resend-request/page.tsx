"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    resendRequest,
} from "@/assets";

const ResendRequestPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Resend Request(35=2)"
      backRoute="/crypto-fix-message"
      image={resendRequest}
    />
  );
};

export default ResendRequestPage;
