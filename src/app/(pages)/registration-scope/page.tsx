import {
  CardOneImage,
  CardTwoImage,
  CardThreeImage,
  CardFourImage,
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
      title: "Card Four",
      image: CardFourImage,
      route: "/yet-another-page",
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
