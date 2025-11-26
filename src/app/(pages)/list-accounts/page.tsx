import { ListAccountsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
List Accounts (Get a list of all accounts filtered by various params)`}
      src={ListAccountsImage}
      backRoute="/accounts"
    />
  );
};

export default ListAccountsPage;
