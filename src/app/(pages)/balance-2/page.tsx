import { Balance2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Balance2Page = () => {
  return (
    <CommonPage
      pageTitle={`balance-2`}
      src={Balance2Image}
      backRoute="/scrypt-api9"
    />
  );
};

export default Balance2Page;
