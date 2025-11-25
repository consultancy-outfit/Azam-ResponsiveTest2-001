import { Orders6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders6Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-6`}
      src={Orders6Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders6Page;
