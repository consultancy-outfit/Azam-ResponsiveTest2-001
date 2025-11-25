import { Trade1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Trade1Page = () => {
  return (
    <CommonPage
      pageTitle={`Scrypt API 1.0.0 / Post Trade / Trade`}
      src={Trade1Image}
      backRoute="/scrypt-api7"  
    />
  );
};

export default Trade1Page;