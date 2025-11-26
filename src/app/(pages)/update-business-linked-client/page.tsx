import { UpdateBusinessLinkedClientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UpdateBusinessLinkedClientPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Update Business Linked Client`}
      src={UpdateBusinessLinkedClientImage}
      backRoute="/linked-clients"
    />
  );
};

export default UpdateBusinessLinkedClientPage;
