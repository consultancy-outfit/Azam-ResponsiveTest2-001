import { Orders5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders5Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-5`}
      src={Orders5Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders5Page;
