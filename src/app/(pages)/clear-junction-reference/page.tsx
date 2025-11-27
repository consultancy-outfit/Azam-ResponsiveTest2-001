import {
  PayoutImage,
  PayinImage,
  RefundImage,
  ForeignExchangeImage,
  VirtualAccountsImage,
  ClientMoneyAccountEWalletImage,
  ReportsImage,
  TransactionActionsImage,
  CheckRequisiteImage,
  TokenizeImage,
  EntityPartnerImage,
  EntityPaymentDetailsImage,
  EntityRegistrantsImage,
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const ClearJunctionReferencePage = () => {
  const cards = [
    {
      title: "Payout",
      data: true,
      image: PayoutImage,
      route: "/payout",
    },
    {
      title: "Payin",
      data: true,
      image: PayinImage,
      route: "/payin",
    },
    {
      title: "Refund",
      data: true,
      image: RefundImage,
      route: "/refund",
    },
    {
      title: "Foreign Exchange",
      data: true,
      image: ForeignExchangeImage,
      route: "/foreign-exchange",
    },
    {
      title: "Virtual Accounts",
      data: true,
      image: VirtualAccountsImage,
      route: "/virtual-accounts",
    },
    {
      title: "Client Money Account E-Wallet",
      data: true,
      image: ClientMoneyAccountEWalletImage,
      route: "/client-money-account-e-wallet",
    },
    {
      title: "Reports",
      data: true,
      image: ReportsImage,
      route: "/reports",
    },
    {
      title: "Transaction Actions",
      data: true,
      image: TransactionActionsImage,
      route: "/transaction-actions",
    },
    {
      title: "Check Requisite",
      data: true,
      image: CheckRequisiteImage,
      route: "/check-requisite",
    },
    {
      title: "Tokenize",
      data: true,
      image: TokenizeImage,
      route: "/tokenize",
    },
    {
      title: "Entity Partner",
      data: true,
      image: EntityPartnerImage,
      route: "/entity-partner",
    },
    {
      title: "Entity Payment Details",
      data: true,
      image: EntityPaymentDetailsImage,
      route: "/entity-payment-details",
    },
    {
      title: "Entity Registrants",
      data: true,
      image: EntityRegistrantsImage,
      route: "/entity-registrants",
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Clear Junction Rest API"
      cards={cards}
      backRoute={"/clear-junction-rest-api"}
    />
  );
};

export default ClearJunctionReferencePage;
