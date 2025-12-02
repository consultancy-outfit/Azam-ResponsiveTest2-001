import { EntityPartnerPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Entity Partner_ Corporate Entity",
    title: "Entity Partner_ Corporate Entity",
    href: "/entity-partner-corporate-entity",
    coords: "30,113,538,205",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    coords: "1087,113,1820,193",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateEntity",
    coords: "1092,674,1832,798",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_ Corporate GB Entity",
    title: "Entity Partner_ Corporate GB Entity",
    href: "/entity-partner-corporate-gb-entity",
    coords: "34,682,559,814",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Partner_ Corporate CHAPS Cross Scheme Entity",
    title: "Entity Partner_ Corporate CHAPS Cross Scheme Entity",
    href: "/entity-partner-corporate-chaps-cross-scheme-entity",
    coords: "30,1285,805,1384",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateChapsCrossSchemeEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateChapsCrossSchemeEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/CorporateChapsCrossSchemeEntity",
    coords: "995,1289,1832,1390",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_ Ultimate Corporate Entity",
    title: "Entity Partner_ Ultimate Corporate Entity",
    href: "/entity-partner-ultimate-corporate-entity",
    coords: "44,1882,651,2013",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/UltimateCorporateEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/UltimateCorporateEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/UltimateCorporateEntity",
    coords: "1069,1873,1823,2007",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_ Individual InternalPayment Entity",
    title: "Entity Partner_ Individual InternalPayment Entity",
    href: "/entity-partner-individual-internalpayment-entity",
    coords: "30,2455,724,2652",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualInternalPaymentEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualInternalPaymentEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualInternalPaymentEntity",
    coords: "1025,2461,1818,2652",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_ Individual Eu Entity",
    title: "Entity Partner_ Individual Eu Entity",
    href: "/entity-partner-individual-eu-entity",
    coords: "32,3358,542,3567",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualEuEntity",
    title:
      "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualEuEntity",
    href: "https://private-anon-38afa2310b-clearjunctionrestapi.apiary-mock.com/IndividualEuEntity",
    coords: "1113,3376,1813,3616",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_Individual CHAPS Cross Scheme Entity",
    title: "Entity Partner_Individual CHAPS Cross Scheme Entity",
    href: "/entity-partner-individual-chaps-cross-scheme-entity",
    coords: "37,4679,795,4964",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/IndividualChapsCrossSchemeEntity",
    title:
      "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/IndividualChapsCrossSchemeEntity",
    href: "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/IndividualChapsCrossSchemeEntity",
    coords: "982,4672,1800,5003",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Partner_Ultimate Individual Entity",
    title: "Entity Partner_Ultimate Individual Entity",
    href: "/entity-partner-ultimate-individual-entity",
    coords: "30,5596,646,5951",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/UltimateIndividualEntity",
    title:
      "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/UltimateIndividualEntity",
    href: "https://private-anon-54fe0dcacf-clearjunctionrestapi.apiary-mock.com/UltimateIndividualEntity",
    coords: "1071,5578,1823,5916",
    shape: "rect",
    target: "_blank",
  },
];

const EntityPartnerPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Entity Partner`}
      image={EntityPartnerPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default EntityPartnerPagePage;
