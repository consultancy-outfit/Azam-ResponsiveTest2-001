import { UpdateIndividualLinkedClientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UpdateIndividualLinkedClientPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Update Individual Linked Client`}
      src={UpdateIndividualLinkedClientImage}
      backRoute="/linked-clients"
    />
  );
};

export default UpdateIndividualLinkedClientPage;
