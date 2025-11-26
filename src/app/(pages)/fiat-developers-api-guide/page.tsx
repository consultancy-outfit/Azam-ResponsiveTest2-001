import {
    FiatDevelopersAPIGuideIntroductionImage,
    FiatDevelopersAPIGuideWebhooksImage,
    FiatDevelopersAPIGuideQuickstartIntegrationGuidesImage,
    FiatDevelopersAPIGuideCoreConceptsImage,
    FiatDevelopersAPIGuidePaymentsGuidesImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatDevelopersAPIReferencePage = () => {
    const cards = [
      {
        title: "Introduction",
        image: FiatDevelopersAPIGuideIntroductionImage,
        route: "/fiat-developers-api-guide-introduction",
        data: true,
      },
      {
        title: "Webhooks",
        image: FiatDevelopersAPIGuideWebhooksImage,
        route: "/fiat-developers-api-guide-webhooks",
        data: true,
      },
      {
        title: "Quickstart Integration Guides",
        image: FiatDevelopersAPIGuideQuickstartIntegrationGuidesImage,
        route: "/fiat-developers-api-guide-quickstart-integration-guides",
        data: true,
      },
      {
        title: "Core Concepts",
        image: FiatDevelopersAPIGuideCoreConceptsImage,
        route: "/fiat-developers-api-guide-core-concepts",
        data: true,
      },
      {
        title: "Payments Guides",
        image: FiatDevelopersAPIGuidePaymentsGuidesImage,
        route: "/fiat-developers-api-guide-payments-guides",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="API Guide"
        cards={cards}
        backRoute={"/fiat-developers"}
      />
    );
  };
  
  export default FiatDevelopersAPIReferencePage;