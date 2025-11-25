"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    endingsession,
} from "@/assets";

const EndingSessionPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Ending a Session"
      backRoute="/overview-crypto-fix-api"
      image={endingsession}
    />
  );
};

export default EndingSessionPage;
