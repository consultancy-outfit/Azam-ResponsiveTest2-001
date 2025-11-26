import {
  EntityRegistrantsImageSec3,
  TokenizeRequestAttributesImage1,
  tradingapisubsec1Image1,
} from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Entity Registrants/individual IBAN V3/Example Allocate IBAN V3 individual Entity
    
    `}
      src={EntityRegistrantsImageSec3}
      backRoute="/entity-registrants"
      subPageTitle="Request_Attributes"
    />
  );
};

export default ReponsesReasonCodes;
