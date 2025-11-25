import { ListLinkedClientPayInReviewTransactionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListLinkedClientPayInReviewTransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
List Linked Client Pay-in Review Transactions`}
      src={ListLinkedClientPayInReviewTransactionsImage}
      backRoute="/linked-clients"
    />
  );
};

export default ListLinkedClientPayInReviewTransactionsPage;
