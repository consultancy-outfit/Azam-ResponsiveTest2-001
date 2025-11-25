import { UserAdministration1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserAdministration1Page = () => {
  return (
    <CommonPage
      pageTitle={`user-administration-1`}
      src={UserAdministration1Image}
      backRoute="/scrypt-api10"
    />
  );
};

export default UserAdministration1Page;
