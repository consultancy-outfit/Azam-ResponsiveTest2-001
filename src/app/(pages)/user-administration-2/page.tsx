import { UserAdministration2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserAdministration2Page = () => {
  return (
    <CommonPage
      pageTitle={`user-administration-2`}
      src={UserAdministration2Image}
      backRoute="/scrypt-api10"
    />
  );
};

export default UserAdministration2Page;
