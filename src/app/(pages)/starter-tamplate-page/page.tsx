
import { CqcFundamentalStandardsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CqcFundamentalStandardsPage = () => {
  return (
    <CommonPage
      pageTitle={`CQC Fundamental Standards `}
      src={CqcFundamentalStandardsImage}
      backRoute="/care-quality-commission"
    />
  );
};

export default CqcFundamentalStandardsPage;
