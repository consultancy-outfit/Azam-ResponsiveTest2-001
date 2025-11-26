import { ListLinkedClientAccountsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListLinkedClientAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
List Linked Client Accounts`}
      src={ListLinkedClientAccountsImage}
      backRoute="/linked-clients"
    />
  );
};

export default ListLinkedClientAccountsPage;
