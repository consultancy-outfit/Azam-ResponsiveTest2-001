"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    orderstatusrequest,
} from "@/assets";

const OrderStatusRequestPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Order Status Request (35=H)"
      backRoute="/crypto-fix-message"
      image={orderstatusrequest}
    />
  );
};

export default OrderStatusRequestPage;
