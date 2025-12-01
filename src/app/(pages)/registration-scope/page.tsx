import {
  CardOneImage,
  CardTwoImage,
  CardThreeImage,
  CardFourImage,
  CardfiveImage,
  logoimage6
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const RegistrationScopePage = () => {
  const cards = [
    {
      title: "Project Tracker",
      image: CardOneImage,
      route: "/project-tracker",
      data: true,
    },
    {
      title: "Scrypt API 1.0.0",
      image: CardTwoImage,
      route: "/scrypt-api",
      data: true,
    },
    {
      title: "Fiat Republic",
      image: CardThreeImage,
      route: "/fiat-republic",
      data: true,
    },
    {
      title: "Crypto",
      image: CardFourImage,
      route: "/crypto",
      data: true,
    },
    {
      title: "Open Payd",
      image: CardfiveImage,
      route: "/open-payd",
      data: true,
    },
    {
      title: "clear junction",
      image: logoimage6,
      route: "/clear-junction-rest-api",
      data: true,
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Registration Scope"
      cards={cards}
      backRoute={"/"}
    />
  );
};

export default RegistrationScopePage;
