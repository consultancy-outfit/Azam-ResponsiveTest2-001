import fs from "fs";
import path from "path";

// === CONFIG ===
const mainTitle = "Fiat Republic"; // <- change this only
const itemTitles = [
  "Overview",
  "Services",
  "Crypto Platforms",
  "Banking Partners",
  "Developers",
  "About Us",
];
const bgColor = "#16853F";

// === HELPERS ===
const pageName = mainTitle.replace(/\s+/g, "-").toLowerCase();
const folderName = pageName;
const pageComponent = `${mainTitle.replace(/\s+/g, "")}Page`;
const componentPrefix = mainTitle.replace(/\s+/g, "");

const arrayData = itemTitles.map((title, i) => {
  const index = i + 1;
  return {
    key: `${pageName}-${index}`,
    link: `/${pageName}-${index}`,
    icon: `${componentPrefix}Image${index}`,
    bgColor: bgColor,
    title: title,
  };
});

// === ICON IMPORTS ===
const allIcons = arrayData.map((item) => item.icon).join(", ");
const iconImports = `import { ${allIcons} } from "@/assets";`;

// === ARRAY DATA STRING ===
const arrayString = `const arrayData = ${JSON.stringify(arrayData, null, 2)
  .replace(/"icon": "([^"]+)"/g, `"icon": $1`)
  .replace(/"bgColor": "([^"]+)"/g, `"bgColor": "$1"`)};`;

// === PAGE CONTENT ===
const pageContent = `"use client";

import React from "react";
import { CommonBoxPage } from "@/components/common-box-page";
${iconImports}

${arrayString}

const ${pageComponent} = () => {
  return (
    <CommonBoxPage
      mainTitle="${mainTitle}"
      arrayData={arrayData}
      backRoute='/${folderName}'
    />
  );
};

export default ${pageComponent};
`;

// === CREATE PAGE FILE ===
const targetDir = path.join("src/app/(pages)", folderName);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
const targetFile = path.join(targetDir, "page.tsx");
fs.writeFileSync(targetFile, pageContent, "utf8");
console.log(`✅ Page generated at: ${targetFile}`);

// === UPDATE ASSETS INDEX.TSX ===
const assetsDir = path.join("src/assets");
const assetsIndexFile = path.join(assetsDir, "index.tsx");

let currentExports = "";
if (fs.existsSync(assetsIndexFile)) {
  currentExports = fs.readFileSync(assetsIndexFile, "utf8");
} else {
  fs.writeFileSync(assetsIndexFile, "", "utf8");
}

arrayData.forEach((item) => {
  const iconName = item.icon;
  const svgFile = `${iconName}.svg`;
  const exportLine = `export { default as ${iconName} } from "./${svgFile}";`;

  if (!currentExports.includes(exportLine)) {
    fs.appendFileSync(assetsIndexFile, exportLine + "\n");
    console.log(`➕ Added to assets/index.tsx: ${exportLine}`);
  }
});