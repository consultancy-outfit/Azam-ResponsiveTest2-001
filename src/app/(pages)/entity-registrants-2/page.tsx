import {
  EntityRegistrantsImageSec2,
  } from "@/assets";
  import { CommonPage } from "@/components";
  import React from "react";
  
  const ReponsesReasonCodes = () => {
    return (
      <CommonPage
        pageTitle={`Entity Registrants/individual IBAN V3/Example Allocate IBAN V3 individual Entity
    
    `}
        src={EntityRegistrantsImageSec2}
        backRoute="/entity-registrants"
        subPageTitle="Example Allocate IBAN V3 individual Entity"
      />
    );
  };
  
  export default ReponsesReasonCodes;
  