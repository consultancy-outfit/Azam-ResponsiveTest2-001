import { OpenpaydApiImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OpenpaydApiPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd API( Get Started)`}
      src={OpenpaydApiImage}
      backRoute="/open-payd"
    />
  );
};

export default OpenpaydApiPage;
