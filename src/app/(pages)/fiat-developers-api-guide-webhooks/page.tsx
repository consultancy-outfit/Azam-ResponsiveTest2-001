import { FiatDevelopersAPIGuideWebhooksImageMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIGuideWebhooksPage = () => {
  return (
    <CommonPage
      pageTitle={`Webhooks`}
      src={FiatDevelopersAPIGuideWebhooksImageMainPageImage}
      backRoute="/fiat-developers-api-guide"
    />
  );
};

export default FiatDevelopersAPIGuideWebhooksPage;