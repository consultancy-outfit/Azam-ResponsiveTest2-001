"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    ordercancelrequest,
} from "@/assets";

const OrderCancelRequestMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Order Cancel Request Message(35=f)"
      backRoute="/crypto-fix-message"
      image={ordercancelrequest}
    />
  );
};

export default OrderCancelRequestMessagePage;
