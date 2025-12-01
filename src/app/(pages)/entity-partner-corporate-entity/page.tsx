import { EntityPartnerCorporateEntityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EntityPartnerCorporateEntityPage = () => {
  return (
    <CommonPage
      pageTitle={`Entity Partner_ Corporate Entity`}
      src={EntityPartnerCorporateEntityImage}
      backRoute="/entity-partner-page"
    />
  );
};

export default EntityPartnerCorporateEntityPage;
