import { Card5Image, Card6Image, Card7Image, Card8Image } from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const SomePagePage = () => {
  const cards = [
    {
      title: "Card 5",
      data: true,
      image: Card5Image,
      route: "/some-page",
    },
    {
      title: "Card 6",
      image: Card6Image,
      route: "/another-page",
    },
    {
      title: "Card 7",
      data: true,
      image: Card7Image,
    },
    {
      title: "Card 8",
      image: Card8Image,
      route: "/yet-another-page",
    },
    {
      title: "Card 9",
      data: true,
      image: Card7Image,
    },
    {
      title: "Card 10",
      image: Card8Image,
      route: "/yet-another-page",
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Some Page"
      cards={cards}
      backRoute={"/registration-scope"}
    />
  );
};

export default SomePagePage;
