import {
  img1CryptoImage,
  img2CryptoImage,
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const CryptoPage = () => {
  const cards = [
    {
      title: "Exchange FIX API",
      image: img1CryptoImage,
      route: "/crypto-exchange-fix-api",
      data: true,
    },
    {
      title: "Exchange API V1",
      image: img2CryptoImage,
      route: "/crypto-com-exchange-api-v1",
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Crypto"
      cards={cards}
      backRoute={"/"}
    />
  );
};

export default CryptoPage;

