import { TheLinkedClientObjectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheLinkedClientObjectPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
The Linked Client Object`}
      src={TheLinkedClientObjectImage}
      backRoute="/linked-clients"
    />
  );
};

export default TheLinkedClientObjectPage;
