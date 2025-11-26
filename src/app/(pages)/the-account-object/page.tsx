import { TheAccountObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheAccountObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
The Account Object`}
      src={TheAccountObjectImage}
      backRoute="/accounts"
    />
  );
};

export default TheAccountObjectPage;
