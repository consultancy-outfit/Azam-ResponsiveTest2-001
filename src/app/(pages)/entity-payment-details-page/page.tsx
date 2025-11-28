import { EntityPaymentDetailsPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Entity Payment Detail/Bank Transfer Swift/Example Bank Transfer Swift payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer Swift/Example Bank Transfer Swift payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-swift-example-bank-transfer-swift-payment-detail-entity",
    coords: "21,102,391,186",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer Eu/Example Bank Transfer Eu payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer Eu/Example Bank Transfer Eu payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-eu-example-bank-transfer-eu-payment-detail-entity",
    coords: "28,1239,386,1374",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Internal Payment/Example Internal Payment detail Entity",
    title:
      "Entity Payment Detail/Internal Payment/Example Internal Payment detail Entity",
    href: "/entity-payment-detail-internal-payment-example-internal-payment-detail-entity",
    coords: "35,1808,349,1955",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer Sepa Inst/Example Bank Transfer Sepa Inst payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer Sepa Inst/Example Bank Transfer Sepa Inst payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-sepa-inst-example-bank-transfer-sepa-inst-payment-detail-entity",
    coords: "35,2387,441,2541",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer FasterPayments/Example Bank Transfer Uk (FasterPayments) payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer FasterPayments/Example Bank Transfer Uk (FasterPayments) payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-faster-payments-example-bank-transfer-uk-faster-payments-payment-detail-entity",
    coords: "42,2934,537,3110",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer CHAPS/Example Bank Transfer Uk (CHAPS) payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer CHAPS/Example Bank Transfer Uk (CHAPS) payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-chaps-example-bank-transfer-uk-chaps-payment-detail-entity",
    coords: "33,3508,425,3740",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer CHAPS Cross Scheme/Example Bank Transfer Uk (CHAPS Cross Scheme) payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer CHAPS Cross Scheme/Example Bank Transfer Uk (CHAPS Cross Scheme) payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-chaps-cross-scheme-example-bank-transfer-uk-chaps-cross-scheme-payment-detail-entity",
    coords: "28,4086,621,4373",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkChapsPaymentDetailEntity",
    title:
      "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkChapsPaymentDetailEntity",
    href: "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkChapsPaymentDetailEntity",
    coords: "906,4077,1806,4414",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer BACS/Example Bank Transfer Uk (BACS) payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer BACS/Example Bank Transfer Uk (BACS) payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-bacs-example-bank-transfer-uk-bacs-payment-detail-entity",
    coords: "37,4663,605,4963",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Entity Payment Detail/Bank Transfer Uk/Example Bank Transfer Uk payment detail Entity",
    title:
      "Entity Payment Detail/Bank Transfer Uk/Example Bank Transfer Uk payment detail Entity",
    href: "/entity-payment-detail-bank-transfer-uk-example-bank-transfer-uk-payment-detail-entity",
    coords: "26,5232,479,5605",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkDefaultPaymentDetailEntity",
    title:
      "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkDefaultPaymentDetailEntity",
    href: "https://private-anon-26146b1462-clearjunctionrestapi.apiary-mock.com/BankTransferUkDefaultPaymentDetailEntity",
    coords: "916,5251,1832,5648",
    shape: "rect",
    target: "_blank",
  },
];

const EntityPaymentDetailsPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Entity Payment Details`}
      image={EntityPaymentDetailsPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default EntityPaymentDetailsPagePage;
