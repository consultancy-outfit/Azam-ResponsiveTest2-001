import { SecurityMaster1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ScryptApiPage2Page = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0 / Security Master / Security`}
      src={SecurityMaster1Image}
      backRoute="/scrypt-api4"  
    />
  );
};

export default ScryptApiPage2Page;
