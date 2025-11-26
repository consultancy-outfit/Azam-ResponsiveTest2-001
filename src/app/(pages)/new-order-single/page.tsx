"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    newordersingle,
} from "@/assets";

const NewOrderSinglePage = () => {
  return (
    <CommonImgMapPage
      pageTitle="New Order Single(35=D)"
      backRoute="/crypto-fix-message"
      image={newordersingle}
    />
  );
};

export default NewOrderSinglePage;
