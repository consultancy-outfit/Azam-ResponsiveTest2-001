import { ProjectTracker2Image } from "@/assets";
import { CommonPage, ProductCommonPage } from "@/components";
import React from "react";

const ProjectTracker2Page = () => {
  return (
    <CommonPage
      src={ProjectTracker2Image}
      backRoute="/project-tracker"
      pageTitle="End User Flow"
    />
  );
};

export default ProjectTracker2Page;
