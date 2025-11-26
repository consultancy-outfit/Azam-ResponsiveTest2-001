"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    logout,
} from "@/assets";

const LogoutPage = () => {
  return (
    <CommonImgMapPage
      pageTitle="Logout(35=5)"
      backRoute="/crypto-fix-message"
      image={logout}
    />
  );
};

export default LogoutPage;
