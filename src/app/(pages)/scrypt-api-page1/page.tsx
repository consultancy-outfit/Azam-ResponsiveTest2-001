import { ScryptApiPage1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ScryptApiPage1Page = () => {
  return (
    <CommonPage
      pageTitle={`scrypt-api-page1`}
      src={ScryptApiPage1Image}
      backRoute="/scrypt-api3"
    />
  );
};

export default ScryptApiPage1Page;
