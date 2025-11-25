import { Orders4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders4Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-4`}
      src={Orders4Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders4Page;
