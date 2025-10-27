"use client";
import { MultiPathPage } from "@/components";
import {
  img1ScopeOfRegistrationImage,
  img2ScopeOfRegistrationImage,
  img3ScopeOfRegistrationImage,
} from "@/assets";
import React from "react";

const ScopeOfRegistrationPageData = [
  {
    key: "scope-1",
    link: "/how-the-process-works",
    icon: img1ScopeOfRegistrationImage,
    title: "How the Process Works?",
  },
  {
    key: "scope-2",
    link: "/who-needs-to-register",
    icon: img2ScopeOfRegistrationImage,
    title: "Who Needs to Register?h",
  },
  {
    key: "scope-3",
    link: "/what-needs-to-be-registered",
    icon: img3ScopeOfRegistrationImage,
    title: "What Needs to Be Registered?",
  },
];

const ScopeOfRegistrationPage = () => {
  return (
    <MultiPathPage
      arrayData={ScopeOfRegistrationPageData}
      pageTitle="Scope of registration"
      backRoute="/"
    />
  );
};

export default ScopeOfRegistrationPage;
