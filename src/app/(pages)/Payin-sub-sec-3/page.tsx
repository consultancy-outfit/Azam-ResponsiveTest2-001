import { payinSecImage1, payinSecImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Status of Order/Get Status by orderReference`}
      src={payinSecImage3}
      backRoute="/Payin-main"
      subPageTitle="Get Status by orderReference"
    />
  );
};

export default ReponsesReasonCodes;
