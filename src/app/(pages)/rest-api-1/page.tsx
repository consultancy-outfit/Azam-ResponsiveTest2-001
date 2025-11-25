import { RestApi1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RestApi1Page = () => {
  return (
    <CommonPage
      pageTitle={`rest-api-1`}
      src={RestApi1Image}
      backRoute="/scrypt-api11"
    />
  );
};

export default RestApi1Page;
