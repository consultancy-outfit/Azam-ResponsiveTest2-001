import {
  TokenizeRequestAttributesImage1,
  tradingapisubsec1Image1,
} from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Clear Junction API
/
Tokenize
/
Create token for PAN
/
Request_Attributes
  
  `}
      src={TokenizeRequestAttributesImage1}
      backRoute="/tokenize"
      subPageTitle="Request_Attributes"
    />
  );
};

export default ReponsesReasonCodes;
