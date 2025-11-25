import {
    CryptoPlatformsOneImage,
    CryptoPlatformsTwoImage,
    CryptoPlatformsThreeImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatRepublicCryptoPlatformsPage = () => {
    const cards = [
      {
        title: "Enhance your user fiat deposit and withdrawal journeys",
        image: CryptoPlatformsOneImage,
        route: "/fiat-crypto-platforms-enhance",
        data: true,
      },
      {
        title: "Optimise your fiat treasury operationsI",
        image: CryptoPlatformsTwoImage,
        route: "/fiat-crypto-platforms-optimise",
        data: true,
      },
      {
        title: "Consortium",
        image: CryptoPlatformsThreeImage,
        route: "/fiat-crypto-platforms-consortium",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Crypto Platforms"
        cards={cards}
        backRoute={"/fiat-republic"}
      />
    );
  };
  
  export default FiatRepublicCryptoPlatformsPage;
