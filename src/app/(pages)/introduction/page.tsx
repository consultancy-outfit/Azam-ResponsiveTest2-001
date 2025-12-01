import { IntroductionPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Authentication",
    title: "Authentication",
    href: "/authentication-page",
    coords: "26,1028,396,1115",
    shape: "rect",
  },
];

const IntroductionPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Introduction`}
      image={IntroductionPageImage}
      backRoute="/clear-junction-rest-api"
      areas={areas}
    />
  );
};

export default IntroductionPage;
