import { virtualAccountsSec9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <CommonPage
      pageTitle={`Virtual Accounts/IBAN Actions/Virtual Account Actions Notification`}
      src={virtualAccountsSec9Image}
      backRoute="/virtual-accounts-main"
      subPageTitle="Virtual Account Actions Notification_Response"
    />
  );
};

export default ReponsesReasonCodes;
