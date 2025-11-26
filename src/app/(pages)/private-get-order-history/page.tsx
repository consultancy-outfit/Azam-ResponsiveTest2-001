import { orderTradeTransactionImg1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <>
      <CommonPage
        pageTitle={`Scrypt API 1.0.0 / Order, Trade, Transaction History ApI / Orders`}
        src={orderTradeTransactionImg1}
        backRoute="/order-trade-transaction-history-api"
        subPageTitle="Order, Trade, Transaction API"
      ></CommonPage>
    </>
  );
};

export default ReponsesReasonCodes;
