"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
        executionreport,
} from "@/assets";

const ExecutionReportPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Execution Report(35=8)-Required Fields"
      backRoute="/crypto-fix-message"
      image={executionreport}
    />
  );
};

export default ExecutionReportPage;
