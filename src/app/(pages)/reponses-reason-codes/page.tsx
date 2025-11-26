import { ReponsesReasonCodesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`1. Reponses & Reason Codes`}
      src={ReponsesReasonCodesImage}
      backRoute="/common-api-reference"
    />
  );
};

export default ReponsesReasonCodes;
