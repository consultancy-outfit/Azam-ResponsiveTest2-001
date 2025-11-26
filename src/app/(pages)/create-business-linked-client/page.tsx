import { CreateBusinessLinkedClientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateBusinessLinkedClientPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Create Business Linked Client`}
      src={CreateBusinessLinkedClientImage}
      backRoute="/linked-clients"
    />
  );
};

export default CreateBusinessLinkedClientPage;
