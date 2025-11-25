"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    fixApiSessionManagement,
} from "@/assets";

const SessionManagementPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Fix Session Management"
      backRoute="/overview-crypto-fix-api"
      image={fixApiSessionManagement}
    />
  );
};

export default SessionManagementPage;
