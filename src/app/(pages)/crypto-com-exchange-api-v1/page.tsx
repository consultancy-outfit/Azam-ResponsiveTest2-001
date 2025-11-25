import {
  img1CryptoImagev1,
  img2CryptoImagev1,
  img3CryptoImagev1,
  img4CryptoImagev1,
  img5CryptoImagev1,
  img6CryptoImagev1,
  img7CryptoImagev1,
  img8CryptoImagev1,
  img9CryptoImagev1,
  img10CryptoImagev1,
  img11CryptoImagev1,
  img12CryptoImagev1,
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const CryptoPage = () => {
  const cards = [
    {
      title: "Introduction",
      image: img1CryptoImagev1,
      route: "/crypro-introduction",
      data: true,
    },
    {
      title: "Common API Reference",
      image: img2CryptoImagev1,
      route: "/",
    },
    {
      title: "Reference and Market Data API",
      image: img3CryptoImagev1,
      route: "/",
    },
    {
      title: "Account Balance and Position API",
      image: img4CryptoImagev1,
      route: "/",
    },
    {
      title: "Trading API",
      image: img5CryptoImagev1,
      route: "/",
    },
    {
      title: "Advanced Order Management API",
      image: img6CryptoImagev1,
      route: "/",
    },
    {
      title: "Order, Trade, Transaction History API",
      image: img7CryptoImagev1,
      route: "/",
    },
    {
      title: "Wallet API",
      image: img8CryptoImagev1,
      route: "/",
    },
    {
      title: "Fiat Wallet API",
      image: img9CryptoImagev1,
      route: "/",
    },
    {
      title: "Staking API",
      image: img10CryptoImagev1,
      route: "/",
    },
    {
      title: "Websocket Subscriptions",
      image: img11CryptoImagev1,
      route: "/",
    },
    {
      title: "Common Issues",
      image: img12CryptoImagev1,
      route: "/",
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Crypto.com Exchange API v1"
      cards={cards}
      backRoute={"/crypto"}
    />
  );
};

export default CryptoPage;
