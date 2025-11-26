import { CreateIndividualLinkedClientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateIndividualLinkedClientPage = () => {
  return (
    <CommonPage
      pageTitle={`OpenPayd
/
Linked Clients
/
Create Individual Linked Client`}
      src={CreateIndividualLinkedClientImage}
      backRoute="/linked-clients"
    />
  );
};

export default CreateIndividualLinkedClientPage;
