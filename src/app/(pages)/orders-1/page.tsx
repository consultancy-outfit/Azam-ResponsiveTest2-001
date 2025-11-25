import { Orders1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders1Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-1`}
      src={Orders1Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders1Page;
