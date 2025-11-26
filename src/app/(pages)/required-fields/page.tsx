"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    requiredField,
} from "@/assets";

const RequiredFieldsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Required Fields"
      backRoute="/crypto-fix-message"
      image={requiredField}
    />
  );
};

export default RequiredFieldsPage;
