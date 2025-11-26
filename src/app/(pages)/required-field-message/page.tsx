"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    requiredfieldmessage,
} from "@/assets";

const RequiredFieldMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Required Field Message(35=0)"
      backRoute="/crypto-fix-message"
      image={requiredfieldmessage}
    />
  );
};

export default RequiredFieldMessagePage;
