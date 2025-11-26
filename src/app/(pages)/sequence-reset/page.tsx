"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    sequenceReset,
} from "@/assets";

const SequenceResetPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Sequence Reset(35=4)"
      backRoute="/crypto-fix-message"
      image={sequenceReset}
    />
  );
};

export default SequenceResetPage;
