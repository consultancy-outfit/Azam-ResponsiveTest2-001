const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");

// ==========================================
// CONFIGURATION: Pages Data Array
// ==========================================
// Each object in this array will generate a new page
// 
// Required properties:
//   - pathName: URL route path (e.g., "my-page" creates /my-page route)
//   - pageTitle: Header title displayed on the page
//   - cards: Array of card objects
//   - backRoute: Route to navigate back (optional, defaults to "/")
//
// Card object structure:
//   - title: Card title text (required)
//   - image: Image name from assets (must match export name from src/assets/index.tsx)
//   - route: Optional route for clickable card (card won't be clickable if omitted)
//
// Example:
//   {
//     pathName: "my-awesome-page",
//     pageTitle: "My Awesome Page",
//     backRoute: "/",
//     cards: [
//       {
//         title: "Clickable Card",
//         image: "TestPageImage",
//         route: "/some-destination"
//       },
//       {
//         title: "Regular Card",
//         image: "TestPageImage"
//         // No route = card not clickable
//       }
//     ]
//   }

const pages = [
  {
    pathName: "registration-scope",
    pageTitle: "Registration Scope",
    backRoute: "/",
    cards: [
      {
        title: "Card One",
        image: "TestPageImage",
        route: "/some-page"
      },
      {
        title: "Card Two",
        image: "TestPageImage",
        route: "/another-page"
      },
      {
        title: "Card Three",
        image: "TestPageImage"
      },
      {
        title: "Card Four",
        image: "TestPageImage",
        route: "/yet-another-page"
      }
    ]
  },
  {
    pathName: "quality-standards",
    pageTitle: "Quality Standards Overview",
    backRoute: "/",
    cards: [
      {
        title: "Standard One",
        image: "CqcFundamentalStandardsImage",
        route: "/standard-details"
      },
      {
        title: "Standard Two",
        image: "CareQualityCommissionCqcOverviewImage"
      },
      {
        title: "Standard Three",
        image: "CrossSectorInspectionsImage",
        route: "/cross-sector"
      }
    ]
  }
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
const generatePageContent = (page, pascalName) => {
  const kebabBackRoute = toKebabCase(page.backRoute || "/");
  const finalBackRoute = `"${kebabBackRoute.startsWith('/') ? kebabBackRoute : '/' + kebabBackRoute}"`;

  const cardsArray = page.cards.map(card => {
    const cardObj = `{
      title: "${card.title}",
      image: ${card.image}`;
    
    const routePart = card.route ? `,
      route: "${card.route}"` : '';
    
    return cardObj + routePart + `
    }`;
  }).join(',\n  ');

  // Get unique images for this specific page
  const pageImages = new Set();
  page.cards.forEach(card => {
    if (card.image) {
      pageImages.add(card.image);
    }
  });
  const uniqueImagesForPage = Array.from(pageImages);

  return `import { ${uniqueImagesForPage.join(', ')} } from '@/assets';
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
  if (!page.pathName || typeof page.pathName !== "string" || !page.pathName.trim()) {
    console.log("[SKIP] Invalid or empty pathName. Skipping entry.");
    continue;
  }

  if (!page.pageTitle || typeof page.pageTitle !== "string" || !page.pageTitle.trim()) {
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
      `[SKIP] Could not generate valid names for pathName: '${page.pathName}'. Skipping.`,
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
      `[ERROR] Too many duplicate directories for '${page.pathName}'. Skipping.`,
    );
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(
      `Directory for page '${page.pathName}' already exists. Created: ${finalKebab}`,
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

  const pageContent = generatePageContent(page, pascal);

  try {
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    console.log(`✓ page.tsx created in: ${dir}`);
  } catch (err) {
    console.log(`[ERROR] Failed to write page.tsx in '${dir}':`, err.message);
    continue;
  }
}

console.log("\n✨ Common Card pages have been created successfully!");

