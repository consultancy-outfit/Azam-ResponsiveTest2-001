"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    cryptofixmessag,
} from "@/assets";

const FixMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Fix Direction"
      backRoute="/crypto-fix-message"
      image={cryptofixmessag}
    />
  );
};

export default FixMessagePage;
