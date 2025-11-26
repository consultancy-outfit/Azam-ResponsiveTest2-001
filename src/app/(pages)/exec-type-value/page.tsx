"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    exectypevalue,
} from "@/assets";

const ExecTypeValuePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Exec Type Value"
      backRoute="/crypto-fix-message"
      image={exectypevalue}
    />
  );
};

export default ExecTypeValuePage;
