import { ListPaymentAccountsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListPaymentAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Payment Accounts
/
List Payment Accounts`}
      src={ListPaymentAccountsImage}
      backRoute="/payment-accounts"
    />
  );
};

export default ListPaymentAccountsPage;
