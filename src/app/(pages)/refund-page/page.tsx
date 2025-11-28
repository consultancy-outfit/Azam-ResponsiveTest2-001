import { RefundPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Refund Execution",
    title: "Refund Execution",
    href: "/refund-execution-refund-request",
    coords: "44,567,512,651",
    shape: "rect",
  },
  {
    alt: "Refund Execution_Refund Response",
    title: "Refund Execution_Refund Response",
    href: "/refund-execution-refund-response",
    coords: "54,842,535,939",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    title: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    coords: "1055,493,1829,581",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    title: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/refund",
    coords: "877,2496,1809,2611",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Status of Order_Get Status by orderReference_Response_Attributes",
    title: "Status of Order_Get Status by orderReference_Response_Attributes",
    href: "status-of-order-get-status-by-order-reference-response-attributes",
    coords: "53,2475,837,2618",
    shape: "rect",
  },
  {
    alt: "Status of Order_Get Status by clientOrder_Response_Attributes",
    title: "Status of Order_Get Status by clientOrder_Response_Attributes",
    href: "status-of-order-get-status-by-client-order-response-attributes",
    coords: "46,4163,811,4323",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/status/refund/clientOrder/id",
    title: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/status/refund/clientOrder/id",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/v7/gate/status/refund/clientOrder/id",
    coords: "928,4154,1827,4316",
    shape: "rect",
    target: "_blank",
  },
  {
    alt: "Refund_Refund Notification Message_Attributes_Response_Attributes",
    title: "Refund_Refund Notification Message_Attributes_Response_Attributes",
    href: "refund-refund-notification-message-attributes-response-attributes",
    coords: "30,6541,744,6746",
    shape: "rect",
  },
  {
    alt: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/refundm",
    title: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/refundm",
    href: "https://private-anon-2d28dc1d0c-clearjunctionrestapi.apiary-mock.com/refundm",
    coords: "1134,6543,1818,6760",
    shape: "rect",
    target: "_blank",
  },
];

const RefundPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Refund Page`}
      image={RefundPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default RefundPagePage;
