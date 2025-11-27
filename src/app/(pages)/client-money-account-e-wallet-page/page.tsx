import { ClientMoneyAccountEWalletPageImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "1.1.1 Reserve Corporate Customer Wall",
    title: "1.1.1 Reserve Corporate Customer Wall",
    href: "/reserve-corporate-customer-wall-1-1-1",
    coords: "49,237,439,305",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "1.1.2 Reserve Corporate Customer Wall",
    title: "1.1.2 Reserve Corporate Customer Wall",
    href: "/reserve-corporate-customer-wall-1-1-2",
    coords: "49,2699,476,2785",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "2.1 Get reservation status by orderReference",
    title: "2.1 Get reservation status by orderReference",
    href: "/get-reservation-status-by-orderreference-2-1",
    coords: "32,3069,730,3208",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    title: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    href: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    coords: "869,3078,1801,3226",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    title: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    href: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/status/orderReference/uuid",
    coords: "923,3700,1815,3866",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "2.2 Get reservation status by clientOrder",
    title: "2.2 Get reservation status by clientOrder",
    href: "/get-reservation-status-by-clientorder-2-2",
    coords: "44,3707,655,3866",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/corporate",
    title: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/corporate",
    href: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/corporate",
    coords: "986,168,1809,263",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "3.2 Example Wallet reservation Notification Message",
    title: "3.2 Example Wallet reservation Notification Message",
    href: "/example-wallet-reservation-notification-message-3-2",
    coords: "39,5140,811,5302",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/statusN",
    title: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/statusN",
    href: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/statusN",
    coords: "935,5132,1755,5323",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "4.1 Get the Wallet",
    title: "4.1 Get the Wallet",
    href: "/get-the-wallet-4-1",
    coords: "35,5886,591,6060",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/uuid?returnPaymentMethods=false",
    title: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/uuid?returnPaymentMethods=false",
    href: "https://private-anon-b8bbe7195c-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/uuid?returnPaymentMethods=false",
    coords: "846,5886,1808,6055",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "5 Transfer Wallet “Execution” (Transfer funds between wallets.)",
    title: "5 Transfer Wallet “Execution” (Transfer funds between wallets.)",
    href: "/transfer-wallet-execution-transfer-funds-between-wallets-5",
    coords: "4,6730,981,6951",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/transfer",
    title: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/transfer",
    href: "https://private-anon-1bf55e6c18-clearjunctionrestapi.apiary-mock.com/v7/gate/wallets/transfer",
    coords: "1037,6737,1799,6974",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "6.1 Get Status by orderReference",
    title: "6.1 Get Status by orderReference",
    href: "get-status-by-orderreference-6-1",
    coords: "35,7869,560,8076",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    title: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    href: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    coords: "807,7852,1788,8068",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "6.2 Get Status by clientOrder",
    title: "6.2 Get Status by clientOrder",
    href: "/get-status-by-clientorder-6-2",
    coords: "46,9530,505,9754",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    title: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    href: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/v7/gate/status/walletTransfer/orderReference/uuid",
    coords: "870,9519,1785,9742",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "5 Transfer Wallet “Execution” (Transfer funds between wallets.)",
    title: "5 Transfer Wallet “Execution” (Transfer funds between wallets.)",
    href: "/transfer-wallet-execution-transfer-funds-between-wallets-51",
    coords: "30,7308,870,7546",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "7 Transfer Wallet Notification Message (Example)",
    title: "7 Transfer Wallet Notification Message (Example)",
    href: "/transfer-wallet-notification-message-example-7",
    coords: "895,11200,51,11393",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/wftm",
    title: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/wftm",
    href: "https://private-anon-d96bfd9546-clearjunctionrestapi.apiary-mock.com/wftm",
    coords: "1134,11163,1827,11400",
    shape: "rect",
    target: "_blank"
  },
];

const ClientMoneyAccountEWalletPagePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Client Money Account e-Wallet Page`}
      image={ClientMoneyAccountEWalletPageImage}
      backRoute="/clear-junction-reference"
      areas={areas}
    />
  );
};

export default ClientMoneyAccountEWalletPagePage;
