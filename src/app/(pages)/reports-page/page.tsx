import { ReportsPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "TransactionReport_ Request_Attributes",
    title: "TransactionReport_ Request_Attributes",
    href: "/transaction-report-request-attributes",
    coords: "35,154,439,226",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    title:
      "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    href: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    coords: "944,88,1822,183",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    title:
      "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    href: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/reports/transactionReport",
    coords: "997,986,1811,1060",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "TransactionReport_ Response _Attributes",
    title: "TransactionReport_ Response _Attributes",
    href: "/transaction-report-response-attributes",
    coords: "40,423,521,528",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Statement _ Request_Attributes",
    title: "Statement _ Request_Attributes",
    href: "/statement-request-attributes",
    coords: "42,1057,405,1190",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Statement _ Request_Attributes1",
    title: "Statement _ Request_Attributes1",
    href: "/statement-request-attributes1",
    coords: "40,1323,419,1492",
    shape: "rect",
    target: "_self",
  },
];

const ReportsPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Reports Page`}
      image={ReportsPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default ReportsPagePage;
