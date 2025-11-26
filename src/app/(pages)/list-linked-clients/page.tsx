import { ListLinkedClientsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListLinkedClientsPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
List Linked Clients`}
      src={ListLinkedClientsImage}
      backRoute="/linked-clients"
    />
  );
};

export default ListLinkedClientsPage;
