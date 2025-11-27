import { EntityPartnerIndividualEuEntityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EntityPartnerIndividualEuEntityPage = () => {
  return (
    <CommonPage
      pageTitle={`Entity Partner_ Individual Eu Entity`}
      src={EntityPartnerIndividualEuEntityImage}
      backRoute="/entity-partner-page"
    />
  );
};

export default EntityPartnerIndividualEuEntityPage;
