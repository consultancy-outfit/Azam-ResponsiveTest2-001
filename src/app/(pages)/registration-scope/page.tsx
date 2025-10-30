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
      title: "Card One",
      image: CardOneImage,
      route: "/some-page",
      data: true,
    },
    {
      title: "Card Two",
      image: CardTwoImage,
      route: "/another-page",
    },
    {
      title: "Card Three",
      image: CardThreeImage,
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
