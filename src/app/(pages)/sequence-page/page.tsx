import { SequenceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SequencePage = () => {
  return (
    <CommonPage
      src={SequenceImage}
      backRoute="/project-tracker"
      pageTitle="Sequence Process"
    />
  );
};

export default SequencePage;
