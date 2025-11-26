import { ListLinkedClientTransactionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListLinkedClientTransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
List Linked Client Transactions`}
      src={ListLinkedClientTransactionsImage}
      backRoute="/linked-clients"
    />
  );
};

export default ListLinkedClientTransactionsPage;
