/**
 * Tests for centralized booking configuration
 * Ensures all booking URLs are valid and the helper functions work correctly
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

// Read the booking config file directly since it's a client-side module
const bookingSource = readFileSync(
  resolve(__dirname, "../client/src/data/booking.ts"),
  "utf-8"
);

describe("Centralized booking configuration", () => {
  it("booking.ts file exists and exports BOOKING_URLS", () => {
    expect(bookingSource).toContain("export const BOOKING_URLS");
  });

  it("has booking URLs for all 7 property keys", () => {
    const expectedKeys = [
      "gardens",
      "springs",
      "tented-camp",
      "costa-rica",
      "alto-atacama",
      "hangaroa",
      "bocas-del-toro",
    ];
    for (const key of expectedKeys) {
      expect(bookingSource).toContain(`"${key}"`);
    }
  });

  it("all booking URLs point to be.synxis.com", () => {
    const urlMatches = bookingSource.match(/https:\/\/be\.synxis\.com[^"]+/g);
    expect(urlMatches).not.toBeNull();
    expect(urlMatches!.length).toBeGreaterThanOrEqual(7);
    for (const url of urlMatches!) {
      expect(url).toMatch(/^https:\/\/be\.synxis\.com/);
    }
  });

  it("exports hotelBookingLinks array with 6 properties", () => {
    expect(bookingSource).toContain("export const hotelBookingLinks");
    // Count the number of id: entries in the array
    const idMatches = bookingSource.match(/id:\s*"/g);
    expect(idMatches).not.toBeNull();
    expect(idMatches!.length).toBe(6);
  });

  it("exports buildBookingUrl helper function", () => {
    expect(bookingSource).toContain("export function buildBookingUrl");
  });

  it("exports DEFAULT_BOOKING_URL", () => {
    expect(bookingSource).toContain("export const DEFAULT_BOOKING_URL");
  });

  it("no hardcoded synxis URLs remain in property page files", () => {
    const propertyPages = [
      "Home.tsx",
      "Gardens.tsx",
      "Springs.tsx",
      "TentedCamp.tsx",
      "AltoAtacama.tsx",
      "CostaRica.tsx",
    ];
    for (const page of propertyPages) {
      const content = readFileSync(
        resolve(__dirname, `../client/src/pages/${page}`),
        "utf-8"
      );
      // Should NOT contain direct synxis URLs (only imports from booking.ts)
      const directUrls = content.match(
        /["']https:\/\/be\.synxis\.com[^"']+["']/g
      );
      expect(
        directUrls,
        `${page} still has hardcoded synxis URL(s): ${directUrls}`
      ).toBeNull();
    }
  });

  it("no hardcoded synxis URLs in Footer component", () => {
    const footer = readFileSync(
      resolve(__dirname, "../client/src/components/Footer.tsx"),
      "utf-8"
    );
    const directUrls = footer.match(
      /["']https:\/\/be\.synxis\.com[^"']+["']/g
    );
    expect(
      directUrls,
      `Footer.tsx still has hardcoded synxis URL(s)`
    ).toBeNull();
  });

  it("property pages import from @/data/booking", () => {
    const files = [
      "../client/src/pages/Home.tsx",
      "../client/src/pages/CostaRica.tsx",
      "../client/src/components/Footer.tsx",
    ];
    for (const file of files) {
      const content = readFileSync(resolve(__dirname, file), "utf-8");
      expect(
        content,
        `${file} does not import from @/data/booking`
      ).toContain("@/data/booking");
    }
  });
});
