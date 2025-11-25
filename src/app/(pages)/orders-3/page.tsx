import { Orders3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Orders3Page = () => {
  return (
    <CommonPage
      pageTitle={`orders-3`}
      src={Orders3Image}
      backRoute="/scrypt-api6"
    />
  );
};

export default Orders3Page;
