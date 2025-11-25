"use client";
import { MultiPathPage } from "@/components";
import {
  ScryptApi1Image,
  ScryptApi2Image,
  ScryptApi3Image,
  ScryptApi4Image,
  ScryptApi5Image,
  ScryptApi6Image,
  ScryptApi7Image,
  ScryptApi8Image,
  ScryptApi9Image,
  ScryptApi10Image,
  ScryptApi11Image,
  ScryptApi12Image,
} from "@/assets";
import React from "react";
import CommonCardPage from "@/components/common-card-page";


interface CardItem {
    title: string;
    image: any;
    route?: string;
    data?: boolean;
  }

const ScopeOfRegistrationPageData: CardItem[] = [
  {
    
    route: "/scrypt-api1",
    image: ScryptApi1Image, 
    title: "Introduction",
    data: true,
  },
  {
   
    route: "/scrypt-api2",
    image: ScryptApi2Image, 
    title: "Servers",
    data: true,
  },
  {
   
    route: "/scrypt-api3",
    image: ScryptApi3Image,
    title: "Protocols ",
    data: true,
  },
  {
   
    route: "/scrypt-api4",
    image: ScryptApi4Image,
    title: "Security Master",
    data: true,
  },

  {
    
    route: "/scrypt-api5",
    image: ScryptApi5Image,
    title: "Market Data",
    data: true,
  },
  {
   
    route: "/scrypt-api6", 
    image: ScryptApi6Image,
    title: "Orders",
    data: true,
  },
  {
   
    route: "/scrypt-api7",
    image: ScryptApi7Image,
    title: "Post Trade ",
    data: true,
  },
  {
   
    route: "/scrypt-api8",
    image: ScryptApi8Image,
    title: "RFQ",
    data: true,
  },

  {
    
    route: "/scrypt-api9",
    image: ScryptApi9Image,
    title: "Balances and Credit",
    data: true,
  },
  {
   
    route: "/scrypt-api10",
    image: ScryptApi10Image,
    title: "User Administration",
    data: true,
  },
  {
   
    route: "/scrypt-api11",
    image: ScryptApi11Image,
    title: "REST API",
    data: true,
  },
  {
   
    route: "/scrypt-api12",
    image: ScryptApi12Image,
    title: "Schemas",
    data: true,
  },
];

const ScryptApiPage = () => {
  return (
    <CommonCardPage
    pageTitle="Scrypt API 1.0.0"
    cards={ScopeOfRegistrationPageData}
    backRoute={"/"}
  />
  );
};

export default ScryptApiPage;
