import { payinSecImage1, payinSecImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Status of Order/Get Status by clientOrder`}
      src={payinSecImage4}
      backRoute="/Payin-main"
      subPageTitle="Response _ Body"
    />
  );
};

export default ReponsesReasonCodes;
