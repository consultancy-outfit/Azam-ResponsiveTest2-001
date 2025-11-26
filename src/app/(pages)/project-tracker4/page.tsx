import { ProjectTracker4Image } from "@/assets";
import { CommonPage, ProductCommonPage } from "@/components";
import React from "react";

const ProjectTracker4Page = () => {
  return (
    <CommonPage
      src={ProjectTracker4Image}
      backRoute="/project-tracker"
      pageTitle="Cosmonyx App – Full Technical Scope & Phased Delivery  Plan (v0.1)"
      showBtn={true}
    />
  );
};

export default ProjectTracker4Page;
