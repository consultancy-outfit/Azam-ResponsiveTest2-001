"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
  overviewFixApi,
} from "@/assets";

const CryptoPage = () => {
    const areas = [
  {
    alt: "logs",
    title: "logs",
    href: "/fixapi-change-logs",
    shape: "rect",
    coords: "55,363,1737,611",
  },
  {
    alt: "generate",
    title: "generate",
    href: "/fixapi-generate",
    shape: "rect",
    coords: "19,666,626,729",
  },
  {
    alt: "rate",
    title: "rate",
    href: "/rate-limits",
    shape: "rect",
    coords: "49,1336,1737,1584",
  },
  {
    alt: "fixapi",
    title: "fixapi",
    href: "/fixapi-fixapi",
    shape: "rect",
    coords: "63,1695,1698,1959",
  },
  {
    alt: "fixdirection",
    title: "fixdirection",
    href: "/fix-direction",
    shape: "rect",
    coords: "67,1985,1696,2239",
  },
  {
    alt: "endpoint",
    title: "endpoint",
    href: "/fix-endpoints",
    shape: "rect",
    coords: "79,2270,1643,3702",
  },
  {
    alt: "connectivity",
    title: "connectivity",
    href: "/fix-connectivity",
    shape: "rect",
    coords: "67,3771,1705,4034",
  },
  {
    alt: "management",
    title: "management",
    href: "/session-management",
    shape: "rect",
    coords: "58,4140,809,4178",
  },
  {
    alt: "endingsession",
    title: "endingsession",
    href: "/endingSession",
    shape: "rect",
    coords: "55,4787,1701,5045",
  },
];
  return (
    <CommonImgMapPage
      pageTitle="Overview"
      backRoute="/crypto-exchange-fix-api"
      image={overviewFixApi}
      areas={areas}
    />
  );
};

export default CryptoPage;
