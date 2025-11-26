import { FiatDevelopersTransactionMonitoringImageMainPageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FiatDevelopersAPIReferenceTransactionMonitoringPage = () => {
  return (
    <CommonPage
      pageTitle={`Transaction Monitoring`}
      src={FiatDevelopersTransactionMonitoringImageMainPageImage  }
      backRoute="/fiat-developers-api-reference"
    />
  );
};

export default FiatDevelopersAPIReferenceTransactionMonitoringPage;