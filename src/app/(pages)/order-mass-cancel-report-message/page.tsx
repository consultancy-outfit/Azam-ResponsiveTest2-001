"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    ordermasscancelreportmessage,
} from "@/assets";

const OrderMassCancelReportMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Order Mass Cancel Report Message(35=r)"
      backRoute="/crypto-fix-message"
      image={ordermasscancelreportmessage}
    />
  );
};

export default OrderMassCancelReportMessagePage;
