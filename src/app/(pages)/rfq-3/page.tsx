import { Rfq3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Rfq3Page = () => {
  return (
    <CommonPage
      pageTitle={`rfq-3`}
      src={Rfq3Image}
      backRoute="/scrypt-api8"
    />
  );
};

export default Rfq3Page;
