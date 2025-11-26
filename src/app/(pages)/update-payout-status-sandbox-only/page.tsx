import { UpdatePayoutStatusSandboxOnlyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UpdatePayoutStatusSandboxOnlyPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Transactions
/
Update Payout Status - Sandbox use ONLY`}
      src={UpdatePayoutStatusSandboxOnlyImage}
      backRoute="/transactions"
    />
  );
};

export default UpdatePayoutStatusSandboxOnlyPage;
