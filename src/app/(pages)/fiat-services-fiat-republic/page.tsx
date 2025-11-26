import { FiatServicesFiatRepublicMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatServicesFiatRepublicPage = () => {
  return (
    <CommonPage
      pageTitle={`Fiat Republic – Fiat Services`}
      src={FiatServicesFiatRepublicMainPageImage}
      backRoute="/fiat-services"
    />
  );
};

export default FiatServicesFiatRepublicPage;
