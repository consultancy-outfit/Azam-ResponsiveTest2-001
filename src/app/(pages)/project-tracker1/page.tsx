import { ProjectTracker1Image } from "@/assets";
import { CommonPage, ProductCommonPage } from "@/components";
import React from "react";

const ProjectTracker1Page = () => {
  return (
    <CommonPage
      src={ProjectTracker1Image}
      backRoute="/project-tracker"
      pageTitle="Project Tracker - Admin"
    />
  );
};

export default ProjectTracker1Page;
