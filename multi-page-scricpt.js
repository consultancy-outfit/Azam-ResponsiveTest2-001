const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

const pages = [
  {
    title: "Scope of registration",
    pageTitle: "Scope of registration",
    imageCount: 3,
    links: ["item-one", "item-two"],
    titles: ["First Item", "Second Item"],
    backRoute: "some-previous-page", 
  },
  {
    title: "Another Main Section",
    pageTitle: "Another Overview Page",
    imageCount: 2,
    links: ["item-one", "item-two"],
    titles: ["First Item", "Second Item"],
    backRoute: "helo see sample page ",
  },
  
 
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .normalize("NFKD")
    .replace(/[’'"“”‘’]+/g, "")
    .replace(/[&/\\?#!()\[\],.:]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

for (const {
  title,
  pageTitle,
  imageCount = 2,
  links = [],
  titles = [],
  backRoute = "/",
} of pages) {
  if (!title || typeof title !== "string" || !title.trim()) {
    console.log("[SKIP] Invalid or empty page title. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(title);
  const pascal = toPascalCase(title.replace(/ & /g, ""));
  if (!kebabBase || !pascal) {
    console.log(
      `[SKIP] Could not generate valid names for title: '${title}'. Skipping.`,
    );
    continue;
  }

  let dir = path.join(baseDir, kebabBase);
  let dirSuffix = 1;
  let finalKebab = kebabBase;
  let maxTries = 100;
  while (fs.existsSync(dir) && dirSuffix < maxTries) {
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    dirSuffix++;
  }
  if (dirSuffix >= maxTries) {
    console.log(
      `[ERROR] Too many duplicate directories for '${title}'. Skipping.`,
    );
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(
      `Directory for page '${title}' already exists. Created: ${finalKebab}`,
    );
  }
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Directory created: ${dir}`);
    } catch (err) {
      console.log(`[ERROR] Failed to create directory '${dir}':`, err.message);
      continue;
    }
  } else {
    console.log(`[SKIP] Directory already exists and was not created: ${dir}`);
  }

  const arrayData = [];
  const itemCount = links.length || imageCount || 2;
  for (let i = 0; i < itemCount; i++) {
    const imageName = `img${i + 1}${pascal}Image`;
    const svgFile = `${imageName}.svg`;

    const rawLink = links[i] || `${title} Item ${i + 1}`;
    const link = `/${toKebabCase(rawLink)}`;
    const itemTitle = titles[i] || `${title} Item ${i + 1}`;

    arrayData.push({
      key: `${finalKebab.split("-")[0]}-${i + 1}`,
      link: link,
      icon: imageName,
      title: itemTitle,
    });

    const indexTsxPath = path.join(assetsDir, "index.tsx");
    const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
    let shouldWriteExport = true;
    if (fs.existsSync(indexTsxPath)) {
      try {
        const indexContent = fs.readFileSync(indexTsxPath, "utf8");
        if (indexContent.includes(imageExport.trim())) {
          shouldWriteExport = false;
          console.log(
            `Export for image '${imageName}' already exists in index.tsx. Skipping export.`,
          );
        }
      } catch (err) {
        console.log(`[ERROR] Failed to read index.tsx:`, err.message);
        shouldWriteExport = false;
      }
    }
    if (shouldWriteExport) {
      try {
        fs.appendFileSync(indexTsxPath, imageExport);
        console.log(`Export for image '${imageName}' added to index.tsx.`);
      } catch (err) {
        console.log(
          `[ERROR] Failed to append export to index.tsx:`,
          err.message,
        );
      }
    }
  }

  let finalBackRoute;
  if (backRoute === "") {
    finalBackRoute = '""'; 
  } else {
    const kebabBackRoute = toKebabCase(backRoute);
    finalBackRoute = `"${kebabBackRoute.startsWith('/') ? kebabBackRoute : '/' + kebabBackRoute}"`;
  }

  const uniqueIcons = Array.from(new Set(arrayData.map((item) => item.icon)));
  const pageContent = `"use client";
import { MultiPathPage } from "@/components";
import {
  ${uniqueIcons.join(",\n  ")}
} from "@/assets";
import React from "react";

const ${pascal}PageData = [
  ${arrayData
    .map(
      (item) => `{
    key: "${item.key}",
    link: "${item.link}",
    icon: ${item.icon},
    title: "${item.title}",
  }`,
    )
    .join(",\n  ")}
];

const ${pascal}Page = () => {
  return (
    <MultiPathPage
      arrayData={${pascal}PageData}
      pageTitle="${pageTitle}"
      backRoute=${finalBackRoute}
    />
  );
};

export default ${pascal}Page;
`;

  try {
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    console.log(`page.tsx created in: ${dir}`);
  } catch (err) {
    console.log(`[ERROR] Failed to write page.tsx in '${dir}':`, err.message);
    continue;
  }
}

console.log(
  "Dynamic MultiPath pages with  image names, titles, links, and image exports have been created.",
);