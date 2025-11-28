import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  { name: "Reserve Corporate Customer Wall 1.1.1", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Transfer Wallet \"Execution\" (Transfer funds between wallets.) 5", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Reserve Corporate Customer Wall 1.1.2", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Get reservation status by orderReference 2.1", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Get Status by orderReference 6.1", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Get reservation status by clientOrder 2.2", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Get Status by clientOrder 6.2", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Example Wallet reservation Notification Message 3.2", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Get the Wallet 4.1", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Transfer Wallet Notification Message (Example) 7", backRoute: "/client-money-account-e-wallet-page" },
  { name: "Entity Partner_ Corporate Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_ Corporate GB Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_ Corporate CHAPS Cross Scheme Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_ Ultimate Corporate Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_ Individual InternalPayment Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_ Individual Eu Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_Individual CHAPS Cross Scheme Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Partner_Ultimate Individual Entity", backRoute: "/entity-partner-page" },
  { name: "Entity Payment Detail/Bank Transfer Swift/Example Bank Transfer Swift payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer Eu/Example Bank Transfer Eu payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Internal Payment/Example Internal Payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer Sepa Inst/Example Bank Transfer Sepa Inst payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer FasterPayments/Example Bank Transfer Uk (FasterPayments) payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer CHAPS/Example Bank Transfer Uk (CHAPS) payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer CHAPS Cross Scheme/Example Bank Transfer Uk (CHAPS Cross Scheme) payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer BACS/Example Bank Transfer Uk (BACS) payment detail Entity", backRoute: "/entity-payment-details-page" },
  { name: "Entity Payment Detail/Bank Transfer Uk/Example Bank Transfer Uk payment detail Entity", backRoute: "/entity-payment-details-page" },
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
    .trim()
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { name } = page;
  let { backRoute } = page;

  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(name);
  const pascalBase = toPascalCase(name);

  // Determine directory name and image index
  let dir = path.join(baseDir, kebabBase);
  let finalKebab = kebabBase;
  let imageIndex = "";
  let dirSuffix = 0;

  while (fs.existsSync(dir) && dirSuffix < 100) {
    dirSuffix++;
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    imageIndex = String(dirSuffix);
  }

  if (dirSuffix >= 100) {
    console.log(`[ERROR] Too many duplicates for '${name}'. Skipping.`);
    continue;
  }

  const imageName = `${pascalBase}Image${imageIndex}`;
  const svgFile = `${imageName}.svg`;
  const pascalComponent = `${pascalBase}Page${imageIndex}`;

  if (backRoute && typeof backRoute === "string") {
    backRoute = `/${toKebabCase(backRoute)}`;
  }

  // Create directory
  fs.mkdirSync(dir, { recursive: true });
  console.log(`✅ Created directory: ${dir}`);

  // Write page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascalComponent} = () => {
  return (
    <CommonPage
      pageTitle={\`${name}\`}
      src={${imageName}}
      backRoute="${backRoute}"
    />
  );
};

export default ${pascalComponent};
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ page.tsx created in: ${dir}`);

  // Write image export
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  if (fs.existsSync(indexTsxPath)) {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    if (!content.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`✅ Export added to index.tsx: ${imageName}`);
    } else {
      console.log(`⚠️ Export for ${imageName} already exists. Skipped.`);
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport);
    console.log(`✅ index.tsx created and export written.`);
  }
}

console.log("\n🎉 Page generation complete.");
