"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    cryptofixmessag,
} from "@/assets";

const LogonPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Logon(35=A)"
      backRoute="/crypto-fix-message"
      image={cryptofixmessag}
    />
  );
};

export default LogonPage;
