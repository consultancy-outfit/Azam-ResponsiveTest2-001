import {
    img3CryptoImage,
    img4CryptoImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const CryptoPage = () => {
    const cards = [
      {
        title: "Overview",
        image: img3CryptoImage,
        route: "/overview-crypto-fix-api",
        data: true,
      },
      {
        title: "FIX Messages",
        image: img4CryptoImage,
        route: "crypto-fix-message",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Crypto.com Exchange FIX API"
        cards={cards}
        backRoute={"/crypto"}
      />
    );
  };
  
  export default CryptoPage;