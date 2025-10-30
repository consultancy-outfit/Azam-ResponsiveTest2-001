const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    pathName: "Some Page",
    pageTitle: "Some Page",
    backRoute: "/registration-scope",
    cards: [
      {
        title: "Card 5",
        route: "/some-page",
        data: true,
      },
      {
        title: "Card 6",
        route: "/another-page",
      },
      {
        title: "Card 7",
        data: true
      },
      {
        title: "Card 8",
        route: "/yet-another-page",
      },
    ],
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
    .replace(/[''"'"'']+/g, "")
    .replace(/[&/\\?#!()\[\],.:]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

// Generate the page content
const generatePageContent = (page, pascalName, cardsWithImages) => {
  const kebabBackRoute = toKebabCase(page.backRoute || "/");
  const finalBackRoute = `"${kebabBackRoute.startsWith("/") ? kebabBackRoute : "/" + kebabBackRoute}"`;

  const cardsArray = cardsWithImages
    .map((card) => {
      const routePart = card.route
        ? `,
      route: "${card.route}"`
        : "";

      const dataPart = card.data ? true : false;

      // Build properties string for card
      let properties = `title: "${card.title}",\n`;

      if (card.data) {
        properties += `  data: true,\n`;
      }

      properties += `  image: ${card.imageName}`;

      if (card.route) {
        properties += `,\n  route: "${card.route}"`;
      }

      const cardObj = `{
  ${properties}
}`;

      return cardObj;
    })
    .join(",\n  ");

  // Get unique images for this specific page
  const pageImages = new Set();
  cardsWithImages.forEach((card) => {
    if (card.imageName) {
      pageImages.add(card.imageName);
    }
  });
  const uniqueImagesForPage = Array.from(pageImages);

  return `import { ${uniqueImagesForPage.join(", ")} } from '@/assets';
import CommonCardPage from '@/components/common-card-page';
import React from 'react';

const ${pascalName}Page = () => {
  const cards = [
    ${cardsArray}
  ];

  return (
    <CommonCardPage
      pageTitle="${page.pageTitle}"
      cards={cards}
      backRoute={${finalBackRoute}}
    />
  );
};

export default ${pascalName}Page;
`;
};

for (const page of pages) {
  if (
    !page.pathName ||
    typeof page.pathName !== "string" ||
    !page.pathName.trim()
  ) {
    console.log("[SKIP] Invalid or empty pathName. Skipping entry.");
    continue;
  }

  if (
    !page.pageTitle ||
    typeof page.pageTitle !== "string" ||
    !page.pageTitle.trim()
  ) {
    console.log("[SKIP] Invalid or empty pageTitle. Skipping entry.");
    continue;
  }

  if (!page.cards || !Array.isArray(page.cards) || page.cards.length === 0) {
    console.log("[SKIP] Invalid or empty cards array. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(page.pathName);
  const pascal = toPascalCase(page.pathName);

  if (!kebabBase || !pascal) {
    console.log(
      `[SKIP] Could not generate valid names for pathName: '${page.pathName}'. Skipping.`
    );
    continue;
  }

  let dir = path.join(baseDir, kebabBase);
  let dirSuffix = 1;
  let finalKebab = kebabBase;
  let maxTries = 100;
  while (fs.existsSync(dir) && dirSuffix < maxTries) {
    finalKebab = `${kebabBase}-page${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    dirSuffix++;
  }
  if (dirSuffix >= maxTries) {
    console.log(
      `[ERROR] Too many duplicate directories for '${page.pathName}'. Skipping.`
    );
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(
      `Directory for page '${page.pathName}' already exists. Created: ${finalKebab}`
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

  // Generate image names and add exports to assets/index.tsx for each card
  const cardsWithImages = page.cards.map((card, index) => {
    const cardPascal = toPascalCase(card.title);
    const imageName = `${cardPascal}Image`;
    const svgFileName = `${imageName}.svg`;

    // Add export to assets/index.tsx if not already there
    const imageExport = `export { default as ${imageName} } from "./${svgFileName}";\n`;
    if (fs.existsSync(indexTsxPath)) {
      try {
        const content = fs.readFileSync(indexTsxPath, "utf8");
        if (!content.includes(imageExport.trim())) {
          fs.appendFileSync(indexTsxPath, imageExport);
          console.log(`✅ Export added to index.tsx: ${imageName}`);
        } else {
          console.log(
            `[SKIP] Export already exists in index.tsx: ${imageName}`
          );
        }
      } catch (err) {
        console.log(`[ERROR] Failed to add export to index.tsx:`, err.message);
      }
    } else {
      try {
        fs.writeFileSync(indexTsxPath, imageExport);
        console.log(`✅ Created index.tsx with export: ${imageName}`);
      } catch (err) {
        console.log(`[ERROR] Failed to write index.tsx:`, err.message);
      }
    }

    return {
      ...card,
      imageName: imageName,
    };
  });

  const pageContent = generatePageContent(page, pascal, cardsWithImages);

  try {
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    console.log(`✓ page.tsx created in: ${dir}`);
  } catch (err) {
    console.log(`[ERROR] Failed to write page.tsx in '${dir}':`, err.message);
    continue;
  }
}

console.log("\n✨ Common Card pages have been created successfully!");
