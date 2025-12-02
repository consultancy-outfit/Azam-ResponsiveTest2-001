"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    marketdatarefresh,
} from "@/assets";

const MarketDataRefreshPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Market Data Refresh(35=x)"
      backRoute="/crypto-fix-message"
      image={marketdatarefresh}
    />
  );
};

export default MarketDataRefreshPage;
