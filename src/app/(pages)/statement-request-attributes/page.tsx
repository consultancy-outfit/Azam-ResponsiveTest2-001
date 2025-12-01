import { StatementRequestAttributesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementRequestAttributesPage = () => {
  return (
    <CommonPage
      pageTitle={`Statement _ Request_Attributes`}
      src={StatementRequestAttributesImage}
      backRoute="/reports-page"
    />
  );
};

export default StatementRequestAttributesPage;
