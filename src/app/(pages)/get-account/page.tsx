import { GetAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Get Account (Get an account by its encrypted id)`}
      src={GetAccountImage}
      backRoute="/accounts"
    />
  );
};

export default GetAccountPage;
