import { Rfq1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Rfq1Page = () => {
  return (
    <CommonPage
      pageTitle={`rfq-1`}
      src={Rfq1Image}
      backRoute="/scrypt-api8"
    />
  );
};

export default Rfq1Page;
