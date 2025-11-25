"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    fixApiChangeLogs,
} from "@/assets";

const ChangeLogsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Change Logs"
      backRoute="/overview-crypto-fix-api"
      image={fixApiChangeLogs}
    //   areas={areas}
    />
  );
};

export default ChangeLogsPage;
