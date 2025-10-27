const fs = require("fs");
const path = require("path");

// === Setup Paths ===
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

// === Helpers ===
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

// === Data: Define All Pages Here ===
const pages = [
  {
    title: "FCA Application Page",
    pageTitle: "FCA Application Main",
    backRoute: "/FCA Sequence Diagram",
    imageRoutes: [
      "/PISP_API",
      "/PISP_API  Filling in the Form",
      "/PISP_API  Section 1: Identification Details and Timings",
      "/PISP_API  Section 2: Programme of Operations",
      "/PISP_API  Section 3:  Business Plan ",
      "/PISP_API  Section 4:  Structural organisation ",
      "/PISP_API Section 5:  Evidence of initial capital ",
      "/PISP_API  Section 6:  Measures to safeguard the funds of payment service users",
      "/PISP_API Section 7:  Procedure to monitor, handle and follow up on a  security incident and security related customer complaints",
      "/PISP_API Section 8:  Procedure to monitor, handle and follow up on a  security incident and security related customer complaints. ",
      "/PISP_API Process in place to file, monitor, track and restrict access to sensitive payment data",
      "/PISP_API  Business continuity arrangements",
      "/PISP_API The principles and definitions applicable to the collection of statistical data on performance, transactions and fraud",
      "/PISP_API Security policy document",
      "/PPISP_API Internal control mechanisms to comply with obligations in relation to money laundering and terrorist financing",
      "/PISP_API Section 14",
      "/PISP_API Section 15",
      "/PISP_API Section 16 Professional indemnity insurance (PII) or comparable guarantee",
      "/PISP_API Section 17 Professional indemnity insurance (PII) or comparable guarantee",
      "/PISP_API Section 18 Fees and levies",
    ],
    buttonTitles: ["Reference Doc", "KEY TERMS"],
    buttonRoutes: ["/PISP_API", "/PISP_API  TERMS IN APPLICATION PACK"],
  },
];

// === Main Page Generator ===
for (const page of pages) {
  const {
    title,
    pageTitle,
    backRoute,
    imageRoutes,
    buttonTitles,
    buttonRoutes,
  } = page;
  const pascal = toPascalCase(title);
  const kebab = toKebabCase(title);

  // Convert imageRoutes to kebab-case at runtime if not already
  const processedImageRoutes = imageRoutes.map((route) => toKebabCase(route));
  const imageNames = processedImageRoutes.map(
    (_, i) => `${pascal}Image${i + 1}`,
  );

  // Convert buttonRoutes to kebab-case at runtime if not already
  const processedButtonRoutes = buttonRoutes.map((route) => toKebabCase(route));

  // === Create Unique Folder ===
  let dir = path.join(baseDir, kebab);
  let suffix = 1;
  while (fs.existsSync(dir)) {
    dir = path.join(baseDir, `${kebab}-section${suffix++}`);
  }
  fs.mkdirSync(dir, { recursive: true });

  // === Create Page Content ===
  const imageImports = imageNames
    .map((name) => `import { ${name} } from "@/assets";`)
    .join("\n");

  const imageArray = imageNames
    .map(
      (name, i) =>
        `        { src: ${name}, route: "/${
          processedImageRoutes[i]
        }", alt: "Image ${i + 1}" },`,
    )
    .join("\n");

  const buttonProps = processedButtonRoutes
    .map(
      (route, i) =>
        `      amendmentButtonRoute${
          i + 1
        }="/${route}"\n      amendmentButtonTitle${i + 1}="${buttonTitles[i]}"`,
    )
    .join("\n");

  const pageContent = `"use client";
import React from "react";
${imageImports}
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const ${pascal}Page = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
${imageArray}
      ]}
      pageTitle="${pageTitle}"
    backRoute="${kebabBackRoute}"
${buttonProps}
    />
  );
};

export default ${pascal}Page;
`;

  // === Write page.tsx ===
  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ Created: ${dir}/page.tsx`);

  // === Update assets/index.tsx with image exports ===
  for (const imageName of imageNames) {
    const svgFile = `${imageName}.svg`;
    const exportLine = `export { default as ${imageName} } from "./${svgFile}";\n`;

    let shouldAppend = true;
    if (fs.existsSync(indexTsxPath)) {
      const content = fs.readFileSync(indexTsxPath, "utf8");
      if (content.includes(exportLine.trim())) {
        shouldAppend = false;
      }
    }

    if (shouldAppend) {
      fs.appendFileSync(indexTsxPath, exportLine);
      console.log(`➕ Exported ${imageName} to index.tsx`);
    }
  }
}

console.log("🎉 All pages and image exports created.");
