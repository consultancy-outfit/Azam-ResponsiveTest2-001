import {
    FiatAboutUsImage,
    EagleNetCoinImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatAboutPage = () => {
    const cards = [
      {
        title: "About Us",
        image: FiatAboutUsImage,
        route: "/fiat-about-us",
        data: true,
      },
      {
        title: "EagleNet Coin",
        image: EagleNetCoinImage,
        route: "/fiat-eaglenet-coin",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="About"
        cards={cards}
        backRoute={"/fiat-republic"}
      />
    );
  };
  
  export default FiatAboutPage;
