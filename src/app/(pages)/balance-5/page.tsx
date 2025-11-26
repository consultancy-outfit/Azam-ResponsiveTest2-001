import { Balance5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Balance5Page = () => {
  return (
    <CommonPage
      pageTitle={`balance-5`}
      src={Balance5Image}
      backRoute="/scrypt-api9"
    />
  );
};

export default Balance5Page;
