"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    marketdatarefresh,
} from "@/assets";

const MarketDataRequestPage = () => {
  return (
    <CommonImgMapPage   
      pageTitle="Market Data Request(35=c)"
      backRoute="/crypto-fix-message"
      image={marketdatarefresh}
    />
  );
};

export default MarketDataRequestPage;
