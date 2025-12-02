"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    ordermasscancelrequestmessage,
} from "@/assets";

const OrderMassCancelRequestMessagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Order Mass Cancel Request Message(35=q)"
      backRoute="/crypto-fix-message"
      image={ordermasscancelrequestmessage}
    />
  );
};

export default OrderMassCancelRequestMessagePage;
