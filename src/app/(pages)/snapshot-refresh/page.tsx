"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    snapshotrefresh,
} from "@/assets";

const SnapshotRefreshPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Snapshot Refresh(35=w)"
      backRoute="/crypto-fix-message"
        image={snapshotrefresh}
    />
  );
};

export default SnapshotRefreshPage;
