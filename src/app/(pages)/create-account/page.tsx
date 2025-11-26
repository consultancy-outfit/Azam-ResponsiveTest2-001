import { CreateAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Create Account (Create an account for an individual or corporate)`}
      src={CreateAccountImage}
      backRoute="/accounts"
    />
  );
};

export default CreateAccountPage;
