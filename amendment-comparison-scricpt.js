const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

const pages = [
  {
    title: "k",
    amendmentButtonRoute: "/Amen",
    amendmentButtonTitle: "View c Comparison",
    backRoute: "/schedule-act-1983",
  },
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .replace(/[&^/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

const toKebabRoute = (str) =>
  str
    .replace(/[&^/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const {
  title,
  amendmentButtonRoute,
  amendmentButtonTitle,
  backRoute,
} of pages) {
  const kebab = toKebabCase(title);
  const pascal = toPascalCase(title);
  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;

  const dir = path.join(baseDir, kebab);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const amendmentButtonRouteProp = amendmentButtonRoute
    ? `\n      amendmentButtonRoute="${toKebabRoute(amendmentButtonRoute)}"`
    : "";

  const amendmentButtonTitleProp = amendmentButtonTitle
    ? `\n      amendmentButtonTitle="${amendmentButtonTitle}"`
    : "";

  const backRouteProp = backRoute
    ? `\n      backRoute="${toKebabRoute(backRoute)}"`
    : "";

  const pageContent = `"use client";

import { ${imageName} } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ${pascal}Page = () => {
  return (
    <AmendmentComparison
      pageTitle={\` / Part VII / ${title}\`}
      src={${imageName}}${backRouteProp}${amendmentButtonRouteProp}${amendmentButtonTitleProp}
    />
  );
};

export default ${pascal}Page;
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");

  const indexTsxPath = path.join(assetsDir, "index.tsx");
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
  if (fs.existsSync(indexTsxPath)) {
    const indexContent = fs.readFileSync(indexTsxPath, "utf8");
    if (!indexContent.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`Export for image '${imageName}' added to index.tsx.`);
    } else {
      console.log(
        `Export for image '${imageName}' already exists in index.tsx. Skipping export.`,
      );
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport, "utf8");
    console.log(`index.tsx created and export for image '${imageName}' added.`);
  }
}

console.log("Pages and image exports have been created.");
