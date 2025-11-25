import {
    FiatRepublicOverviewImage,
    FiatRepublicServicesImage,
    FiatRepublicCryptoPlatformsImage,
    FiatRepublicBankingPartnersImage,
    FiatRepublicDevelopersImage,
    FiatRepublicAboutUsImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatRepublicPage = () => {
    const cards = [
      {
        title: "Overview",
        image: FiatRepublicOverviewImage,
        route: "/fiat-republic-over-view",
        data: true,
      },
      {
        title: "Services",
        image: FiatRepublicServicesImage,
        route: "/fiat-services",
        data: true,
      },
      {
        title: "Crypto Platforms",
        image: FiatRepublicCryptoPlatformsImage,
        route: "/fiat-republic-crypto-platforms",
        data: true,
      },
      {
        title: "Banking Partners",
        image: FiatRepublicBankingPartnersImage,
        route: "/banking-partner",
        data: true,
      },
      {
        title: "Developers",
        image: FiatRepublicDevelopersImage,
        route: "/fiat-developers",
        data: true,
      },
      {
        title: "About Us",
        image: FiatRepublicAboutUsImage,
        route: "/fiat-about",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Fiat Republic"
        cards={cards}
        backRoute={"/fiat-republic"}
      />
    );
  };
  
  export default FiatRepublicPage;
