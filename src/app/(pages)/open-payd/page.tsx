import {
  OpenPayd1Image,
  OpenPayd12Image,
  OpenPayd11Image,
  OpenPayd10Image,
  OpenPayd9Image,
  OpenPayd8Image,
  OpenPayd7Image,
  OpenPayd6Image,
  OpenPayd5Image,
  OpenPayd4Image,
  OpenPayd3Image,
  OpenPayd2Image,
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const OpenPaydPage = () => {
  const cards = [
    {
      title: "OpenPayd API (Get Started)",
      image: OpenPayd1Image,
      route: "/openpayd-api",
      data: true,
    },
    {
      title: "Authentication",
      image: OpenPayd2Image,
      route: "/authentication",
      data: true,
    },
    {
      title: "Linked Clients",
      image: OpenPayd3Image,
       route: "/linked-clients",
      data: true,
    },
    {
      title: "Accounts",
      image: OpenPayd4Image,
      route: "/accounts",
      data: true,
    },

     {
      title: "Payment Accounts",
      image: OpenPayd5Image,
      route: "/payment-accounts",
      data: true,
    },
    {
      title: "Beneficiaries",
      image: OpenPayd6Image,
      route: "/beneficiaries",
      data: true,
    },
    {
      title: "Bank Beneficiaries",
      image: OpenPayd7Image,
      route: "/bank-beneficiaries",
      data: true,
    },
    {
      title: "Transactions",
      image: OpenPayd8Image,
      route: "/transactions",
      data: true,
    },

     {
      title: "Exchange",
      image: OpenPayd9Image,
      route: "/exchange",
      data: true,
    },
    {
      title: "Reference Data",
      image: OpenPayd10Image,
      route: "/reference-data",
      data: true,
    },
    {
      title: "Open Banking",
      image: OpenPayd11Image,
      route: "/open-banking",
      data: true,
    },
    {
      title: "Direct Debit",
      image: OpenPayd12Image,
      route: "/direct-debit",
      data: true,
    },
  ];

  return (
    <CommonCardPage
      pageTitle="OpenPayd(API Reference)"
      cards={cards}
      backRoute={"/registration-scope"}
    />
  );
};

export default OpenPaydPage;
