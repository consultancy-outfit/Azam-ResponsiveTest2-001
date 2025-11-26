import { UpdateAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UpdateAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Update Account (Update the friendly name, status, and primary account)`}
      src={UpdateAccountImage}
      backRoute="/accounts"
    />
  );
};

export default UpdateAccountPage;
