import {
    EntityRegistrantsImageSec1,
  } from "@/assets";
  import { CommonPage } from "@/components";
  import React from "react";
  
  const ReponsesReasonCodes = () => {
    return (
      <CommonPage
        pageTitle={`Entity Registrants/individual IBAN V2 ***deprecated***/Example Allocate IBAN V2 individual Entity`}
        src={EntityRegistrantsImageSec1}
        backRoute="/entity-registrants"
        subPageTitle="Example Allocate IBAN V2 individual Entity"
      />
    );
  };
  
  export default ReponsesReasonCodes;
  