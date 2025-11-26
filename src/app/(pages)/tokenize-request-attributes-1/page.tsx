import { TokenizeRequestAttributesImage2 } from "@/assets";
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
Response_Attributes
  
  `}
      src={TokenizeRequestAttributesImage2}
      backRoute="/tokenize"
      subPageTitle="Response_Attributes"
    />
  );
};

export default ReponsesReasonCodes;
