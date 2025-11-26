"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    heartbeat,
} from "@/assets";

const HeartbeatPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Heartbeat(35=0)"
      backRoute="/crypto-fix-message"
      image={heartbeat}
    />
  );
};

export default HeartbeatPage;
