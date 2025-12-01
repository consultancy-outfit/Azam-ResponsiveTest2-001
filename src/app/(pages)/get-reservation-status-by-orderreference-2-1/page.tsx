import { GetReservationStatusByOrderreference21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetReservationStatusByOrderreference21Page = () => {
  return (
    <CommonPage
      pageTitle={`Get reservation status by orderReference 2.1`}
      src={GetReservationStatusByOrderreference21Image}
      backRoute="/client-money-account-e-wallet-page"
    />
  );
};

export default GetReservationStatusByOrderreference21Page;
