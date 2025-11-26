import { websocketSubscriptions11 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <>
      <CommonPage
        pageTitle={`Scrypt API 1.0.0 / Websocket Subscriptions  /  Websocket Subscriptions `}
        src={websocketSubscriptions11}
        backRoute="/websocket-subscriptions"
        subPageTitle="Websocket Subscriptions"
      ></CommonPage>
    </>
  );
};

export default ReponsesReasonCodes;
