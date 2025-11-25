import { Balance1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Balance1Page = () => {
  return (
    <CommonPage
      pageTitle={`balance-1`}
      src={Balance1Image}
      backRoute="/scrypt-api9"
    />
  );
};

export default Balance1Page;
