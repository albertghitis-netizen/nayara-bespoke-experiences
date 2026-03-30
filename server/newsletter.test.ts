import { describe, it, expect } from "vitest";
import { newsletters } from "../client/src/data/journal";

describe("Newsletter data integrity", () => {
  it("has 9 unique newsletter issues", () => {
    expect(newsletters.length).toBe(9);
    const issues = newsletters.map((n) => n.issue);
    const uniqueIssues = new Set(issues);
    expect(uniqueIssues.size).toBe(9);
  });

  it("every newsletter has required fields", () => {
    for (const nl of newsletters) {
      expect(nl.issue).toBeGreaterThan(0);
      expect(nl.title.length).toBeGreaterThan(5);
      expect(nl.subtitle.length).toBeGreaterThan(5);
      expect(nl.date).toMatch(/^(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$/);
      expect(nl.slug).toMatch(/^\d{4}-\d{2}$/);
      expect(nl.content.length).toBeGreaterThan(100);
    }
  });

  it("no newsletter content is truncated (ends mid-word)", () => {
    for (const nl of newsletters) {
      // Content should end with a period, backtick, or complete word
      const trimmed = nl.content.trim();
      // Should not end with a partial word (no trailing lowercase letters without punctuation after a space)
      expect(trimmed).not.toMatch(/\s[a-z]+$/);
    }
  });

  it("newsletters are sorted by date newest first", () => {
    const parseDate = (dateStr: string): number => {
      const months: Record<string, number> = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
      };
      const [monthName, yearStr] = dateStr.split(" ");
      return new Date(parseInt(yearStr), months[monthName]).getTime();
    };

    for (let i = 0; i < newsletters.length - 1; i++) {
      const currentDate = parseDate(newsletters[i].date);
      const nextDate = parseDate(newsletters[i + 1].date);
      expect(currentDate).toBeGreaterThanOrEqual(nextDate);
    }
  });

  it("newsletter content does not contain HubSpot tracking artifacts", () => {
    for (const nl of newsletters) {
      expect(nl.content).not.toContain("hubspot");
      expect(nl.content).not.toContain("hs-cta");
      expect(nl.content).not.toContain("tracking");
      expect(nl.content).not.toContain("utm_");
    }
  });

  it("newsletter slugs match their dates", () => {
    const monthMap: Record<string, string> = {
      January: "01", February: "02", March: "03", April: "04",
      May: "05", June: "06", July: "07", August: "08",
      September: "09", October: "10", November: "11", December: "12",
    };
    for (const nl of newsletters) {
      const [monthName, year] = nl.date.split(" ");
      const expectedSlug = `${year}-${monthMap[monthName]}`;
      expect(nl.slug).toBe(expectedSlug);
    }
  });
});
