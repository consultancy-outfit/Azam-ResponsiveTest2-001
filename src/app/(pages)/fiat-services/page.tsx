import {
    ServicesImage,
    apiServicesImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatServicesPage = () => {
    const cards = [
      {
        title: "Fiat Services",
        image: ServicesImage,
        route: "/fiat-services-fiat-republic",
        data: true,
      },
      {
        title: "PSD2 API",
        image: apiServicesImage,
        route: "/fiat-services-fiat-republic-framework",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Services"
        cards={cards}
        backRoute={"/fiat-republic"}
      />
    );
  };
  
  export default FiatServicesPage;
