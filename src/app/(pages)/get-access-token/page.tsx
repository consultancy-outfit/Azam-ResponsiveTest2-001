import { GetAccessTokenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetAccessTokenPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Authentication
/
Get Access Token`}
      src={GetAccessTokenImage}
      backRoute="/authentication"
    />
  );
};

export default GetAccessTokenPage;
