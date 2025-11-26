import { GetLinkedClientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetLinkedClientPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Get Linked Client`}
      src={GetLinkedClientImage}
      backRoute="/linked-clients"
    />
  );
};

export default GetLinkedClientPage;
