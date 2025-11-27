import { ForeignExchangePageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Foreign Exchange_Instant FX_Get Rate",
    title: "Foreign Exchange_Instant FX_Get Rate",
    href: "/foreign-exchange-instant-fx-get-rate",
    coords: "46,1844,356,1908",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/rate",
    title:
      "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/rate",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/rate",
    coords: "972,1773,1795,1839",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Foreign Exchange_Instant FX_Get Rate1",
    title: "Foreign Exchange_Instant FX_Get Rate1",
    href: "/foreign-exchange-instant-fx-get-rate1",
    coords: "51,2129,402,2222",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    title:
      "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    coords: "969,2552,1820,2669",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    title:
      "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/transfer",
    coords: "835,3556,1802,3703",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Foreign Exchange_Instant FX_Get Status by orderReference",
    title: "Foreign Exchange_Instant FX_Get Status by orderReference",
    href: "/foreign-exchange-instant-fx-get-status-by-order-reference",
    coords: "4,3559,535,3722",
    shape: "rect",
  },
  {
    alt: "Foreign Exchange_Instant FX_Get Status by clientOrder",
    title: "Foreign Exchange_Instant FX_Get Status by clientOrder",
    href: "/foreign-exchange-instant-fx-get-status-by-client-order",
    coords: "5,4205,477,4409",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/status/clientOrder/id",
    title:
      "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/status/clientOrder/id",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/fx/instant/status/clientOrder/id",
    coords: "883,4221,1853,4428",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Foreign Exchange_Instant FX_Instant FX Transfer Notification Message",
    title:
      "Foreign Exchange_Instant FX_Instant FX Transfer Notification Message",
    href: "/foreign-exchange-instant-fx-instant-fx-transfer-notification-message",
    coords: "12,4933,741,5149",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/fx/instant",
    title:
      "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/fx/instant",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/fx/instant",
    coords: "1109,4921,1836,5154",
    shape: "rect",
    target: "_blank",
  },
];

const ForeignExchangePagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Foreign Exchange Page`}
      image={ForeignExchangePageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default ForeignExchangePagePage;
