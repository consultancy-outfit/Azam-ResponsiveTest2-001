import { CheckSepaSctInstIbanImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CheckSepaSctInstIbanPage = () => {
  return (
    <CommonPage
      pageTitle={`Check SEPA SCT/Inst IBAN`}
      src={CheckSepaSctInstIbanImage}
      backRoute="/check-requisite-page"
    />
  );
};

export default CheckSepaSctInstIbanPage;
