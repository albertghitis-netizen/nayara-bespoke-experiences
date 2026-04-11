/**
 * Page rendering tests — verify all new pages exist and export default components
 * These are structural/smoke tests to ensure pages are wired correctly
 */
import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "fs";
import path from "path";

const CLIENT_PAGES = path.resolve(__dirname, "../client/src/pages");

const requiredPages = [
  { file: "Journal.tsx", route: "/journal", mustContain: ["blogpost", "podcast"] },
  { file: "Gallery.tsx", route: "/gallery", mustContain: ["gallery", "filter"] },
  { file: "Experiences.tsx", route: "/experiences", mustContain: ["experience"] },
  { file: "Wellness.tsx", route: "/wellness", mustContain: ["wellness"] },
  { file: "Sustainability.tsx", route: "/sustainability", mustContain: ["sustainability", "coral"] },
  { file: "Hangaroa.tsx", route: "/hangaroa", mustContain: ["hangaroa", "easter island", "rapa nui"] },
  { file: "BocasDelToro.tsx", route: "/bocas-del-toro", mustContain: ["bocas", "panama", "caribbean"] },
];

describe("Page files exist and contain expected content", () => {
  for (const page of requiredPages) {
    describe(page.file, () => {
      const filePath = path.join(CLIENT_PAGES, page.file);

      it("file exists", () => {
        expect(existsSync(filePath)).toBe(true);
      });

      it("exports a default function component", () => {
        const content = readFileSync(filePath, "utf-8");
        expect(content).toMatch(/export default function/);
      });

      it("contains expected content keywords", () => {
        const content = readFileSync(filePath, "utf-8").toLowerCase();
        for (const keyword of page.mustContain) {
          expect(content).toContain(keyword.toLowerCase());
        }
      });
    });
  }
});

describe("App.tsx routing", () => {
  const appPath = path.resolve(__dirname, "../client/src/App.tsx");

  it("App.tsx exists", () => {
    expect(existsSync(appPath)).toBe(true);
  });

  it("contains routes for all new pages", () => {
    const content = readFileSync(appPath, "utf-8");
    const expectedRoutes = [
      "/journal",
      "/gallery",
      "/experiences",
      "/wellness",
      "/sustainability",
      "/hangaroa",
      "/bocas-del-toro",
    ];
    for (const route of expectedRoutes) {
      expect(content).toContain(route);
    }
  });

  it("imports all page components", () => {
    const content = readFileSync(appPath, "utf-8");
    const expectedImports = [
      "Journal",
      "Gallery",
      "Experiences",
      "Wellness",
      "Sustainability",
      "Hangaroa",
      "BocasDelToro",
    ];
    for (const imp of expectedImports) {
      expect(content).toContain(imp);
    }
  });
});

describe("Journal data file", () => {
  const dataPath = path.resolve(__dirname, "../client/src/data/journal.ts");

  it("journal data file exists", () => {
    expect(existsSync(dataPath)).toBe(true);
  });

  it("exports blog posts array", () => {
    const content = readFileSync(dataPath, "utf-8");
    expect(content).toMatch(/blogPosts/);
  });

  it("exports podcast data", () => {
    const content = readFileSync(dataPath, "utf-8");
    expect(content).toMatch(/podcast/i);
  });

  it("contains destination and pillar tags", () => {
    const content = readFileSync(dataPath, "utf-8");
    expect(content).toMatch(/destination/i);
    expect(content).toMatch(/pillar/i);
  });
});
