import { AuthenticationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AuthenticationPage = () => {
  return (
    <CommonPage
      pageTitle={`Intoduction / Authentication`}
      src={AuthenticationImage}
      backRoute="/introduction"
    />
  );
};

export default AuthenticationPage;
