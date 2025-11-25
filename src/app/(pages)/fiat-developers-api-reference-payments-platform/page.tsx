import {
    paymentsPlatformCard1,
    paymentsPlatformCard3,
    paymentsPlatformCard2,
    paymentsPlatformCard4,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const FiatDevelopersAPIReferencePaymentsPlatformPage = () => {
    const cards = [
      {
        title: "1-4: Individual End Users,Business, End Users,Fiat Accounts & Virtual Accounts",
        image: paymentsPlatformCard1,
        route: "/fiat-developers-api-reference-payments-platform-1-4",
        data: true,
      },
    
      {
        title: "5-8: Payees, Payments, Returns & Payers",
        image: paymentsPlatformCard2,
        route: "/fiat-developers-api-reference-payments-platform-5-8",
       
        data: true,
      },
      {
        title: "9-12:Conversions, The Transactions Object, The Webhook Object & Document Upload",
        image: paymentsPlatformCard3,
        route: "/fiat-developers-api-reference-payments-platform-9-12",
        data: true,
      },
      {
        title: "13-16: EaglenetCoin EMT,  Member Review Settings, Member& Simulator (SANDBOX ONLY)",
        image: paymentsPlatformCard4,
        route: "/fiat-developers-api-reference-payments-platform-13-16",
        data: true,
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Payments Platform"
        cards={cards}
        backRoute={"/fiat-developers-api-reference"}
      />
    );
  };
  
  export default FiatDevelopersAPIReferencePaymentsPlatformPage;