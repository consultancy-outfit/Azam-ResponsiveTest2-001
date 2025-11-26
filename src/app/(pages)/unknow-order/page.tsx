"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    unknoworder,
} from "@/assets";

const UnknowOrderPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Order status request rejected for unknown order"
      backRoute="/crypto-fix-message"
      image={unknoworder}
    />
  );
};

export default UnknowOrderPage;
