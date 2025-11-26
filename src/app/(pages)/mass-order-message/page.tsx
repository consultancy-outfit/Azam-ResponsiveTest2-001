"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    massordermessage,
} from "@/assets";

const MassOrderMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Mass Order Message(35=dj)"
      backRoute="/crypto-fix-message"
      image={massordermessage}
    />
  );
};

export default MassOrderMessagePage;
