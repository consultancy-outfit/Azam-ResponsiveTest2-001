import { CheckRequisitePageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Confirmation of Payee Flow",
    title: "Confirmation of Payee Flow",
    href: "/confirmation-of-payee-flow",
    coords: "1689,5,1868,55",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/cop",
    title:
      "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/cop",
    href: "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/cop",
    coords: "1009,3174,1822,3308",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/bankTransfer/eu/iban/iban",
    title:
      "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/bankTransfer/eu/iban/iban",
    href: "https://private-anon-434646c51b-clearjunctionrestapi.apiary-mock.com/v7/gate/checkRequisite/bankTransfer/eu/iban/iban",
    coords: "873,4055,1839,4273",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Check SEPA SCT/Inst IBAN",
    title: "Check SEPA SCT/Inst IBAN",
    href: "/check-sepa-sctinst-iban",
    coords: "30,4068,659,4321",
    shape: "rect",
    target: "_self",
  },
];

const CheckRequisitePagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Check Requisite`}
      image={CheckRequisitePageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default CheckRequisitePagePage;
