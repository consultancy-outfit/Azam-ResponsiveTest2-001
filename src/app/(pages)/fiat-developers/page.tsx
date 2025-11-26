import {
    FiatDevelopersOverviewImage,
    FiatDevelopersAPIReferenceImage,
    FiatDevelopersAPIGuideImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatDevelopersPage = () => {
    const cards = [
      {
        title: "Overview",
        image: FiatDevelopersOverviewImage,
        route: "/fiat-developers-overview",
        data: true,
      },
    
      {
        title: "API Reference",
        image: FiatDevelopersAPIReferenceImage,
        route: "/fiat-developers-api-reference",
       
        data: true,
      },
      {
        title: "API Guide",
        image: FiatDevelopersAPIGuideImage,
        route: "/fiat-developers-api-guide",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Developers"
        cards={cards}
        backRoute={"/fiat-republic"}
      />
    );
  };
  
  export default FiatDevelopersPage;