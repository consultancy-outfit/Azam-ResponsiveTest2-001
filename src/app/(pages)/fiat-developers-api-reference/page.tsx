import {
    FiatDevelopersOverviewImage,
    FiatDevelopersAPIReferenceImage,
    FiatDevelopersAPIGuideImage,
    FiatDevelopersAPITokenImage,
    FiatDevelopersPaymentsPlatformImage,
    FiatDevelopersTransactionMonitoringImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatDevelopersAPIReferencePage = () => {
    const cards = [
      {
        title: "API Token",
        image: FiatDevelopersAPITokenImage,
        route: "/fiat-developers-api-reference-overview",
        data: true,
      },
    
      {
        title: "Payments Platform",
        image: FiatDevelopersPaymentsPlatformImage,
        route: "/fiat-developers-api-reference-payments-platform",
       
        data: true,
      },
      {
        title: "Transaction Monitoring",
        image: FiatDevelopersTransactionMonitoringImage,
        route: "/fiat-developers-api-reference-transaction-monitoring",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="API Reference"
        cards={cards}
        backRoute={"/fiat-developers"}
      />
    );
  };
  
  export default FiatDevelopersAPIReferencePage;