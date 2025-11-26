import { Orders2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders2Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-2`}
      src={Orders2Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders2Page;
