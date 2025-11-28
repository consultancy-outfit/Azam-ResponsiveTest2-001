import { TransactionActionsPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Approve Transaction_ Response_Attributes",
    title: "Approve Transaction_ Response_Attributes",
    href: "/approve-transaction-response-attributes",
    coords: "1067,167,1486,265",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/approve",
    title:
      "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/approve",
    href: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/approve",
    coords: "937,100,1843,158",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Approve Transaction_ Request_Attributes",
    title: "Approve Transaction_ Request_Attributes",
    href: "/approve-transaction-request-attributes",
    coords: "46,337,512,439",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "Cancel Transaction_ Response_Attributes",
    title: "Cancel Transaction_ Response_Attributes",
    href: "/cancel-transaction-response-attributes",
    coords: "1072,777,1537,870",
    shape: "rect",
    target: "_self",
  },
  {
    alt: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/cancel",
    title:
      "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/cancel",
    href: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/transactionAction/cancel",
    coords: "946,698,1850,781",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Cancel Transaction_ Request_Attributes",
    title: "Cancel Transaction_ Request_Attributes",
    href: "/cancel-transaction-request-attributes",
    coords: "39,971,398,1106",
    shape: "rect",
    target: "_self",
  },
];

const TransactionActionsPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Transaction Actions`}
      image={TransactionActionsPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default TransactionActionsPagePage;
