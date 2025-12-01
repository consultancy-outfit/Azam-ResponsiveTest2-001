"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    securitydefinitionrequest,
    
} from "@/assets";

const SecurityDefinationPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Security Defination(35=d)"
      backRoute="/crypto-fix-message"
      image={securitydefinitionrequest}
    />
  );
};

export default SecurityDefinationPage;
