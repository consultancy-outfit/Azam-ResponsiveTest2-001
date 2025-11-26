"use client";
import { MultiPathPage } from "@/components";
import {
  img1ScopeOfRegistrationImage1,
  img1ScopeOfRegistrationImage2,
} from "@/assets";
import React from "react";
import CommonCardPage from "@/components/common-card-page";


interface CardItem {
    title: string;
    image: any;
    route?: string;
    data?: boolean;
  }

const ScopeOfRegistrationPageData: CardItem[] = [
  {
    
    route: "/project-tracker1",
    image: img1ScopeOfRegistrationImage1,
    title: "Cosmonyx Services",
    data: true,
  },
  {
   
    route: "/project-tracker2",
    image: img1ScopeOfRegistrationImage2,
    title: "Cosmonyx App – Full Technical Scope & Phased Delivery  Plan (v0.1) ",
    data: true,
  },
  {
   
    route: "/project-tracker3",
    image: img1ScopeOfRegistrationImage2,
    title: "BackOffice - Admin Flow",
    data: true,
  },
  {
   
    route: "/project-tracker4",
    image: img1ScopeOfRegistrationImage2,
    title: "End User Flow",
    data: true,
  },
];

const ProjectTrackerPage = () => {
  return (
    <CommonCardPage
    pageTitle="Project Tracker"
    cards={ScopeOfRegistrationPageData}
    backRoute={"/registration-scope"}
  />
  );
};

export default ProjectTrackerPage;
