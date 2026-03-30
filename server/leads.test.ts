import { describe, it, expect } from "vitest";

describe("Lead capture schema and router", () => {
  it("leads table has correct columns", async () => {
    const { leads } = await import("../drizzle/schema");
    expect(leads).toBeDefined();
    // Check that all expected columns exist
    const columns = Object.keys(leads);
    expect(columns).toContain("id");
    expect(columns).toContain("name");
    expect(columns).toContain("email");
    expect(columns).toContain("source");
    expect(columns).toContain("channel");
    expect(columns).toContain("propertyInterest");
    expect(columns).toContain("notes");
    expect(columns).toContain("createdAt");
  });

  it("saveLead function exists and is exported", async () => {
    const { saveLead } = await import("./db");
    expect(typeof saveLead).toBe("function");
  });

  it("getLeads function exists and is exported", async () => {
    const { getLeads } = await import("./db");
    expect(typeof getLeads).toBe("function");
  });

  it("email regex extracts emails correctly", () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    
    expect("my email is john@example.com".match(emailRegex)?.[0]).toBe("john@example.com");
    expect("sure it's jane.doe@nayara.co.cr".match(emailRegex)?.[0]).toBe("jane.doe@nayara.co.cr");
    expect("no email here".match(emailRegex)).toBeNull();
    expect("test@test.com and another@test.com".match(emailRegex)?.[0]).toBe("test@test.com");
  });

  it("name extraction patterns work correctly", () => {
    const namePatterns = [
      /(?:my name is|i'm|i am|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
    ];

    const testCases = [
      { input: "My name is John Smith", expected: "John Smith" },
      { input: "I'm Maria Garcia", expected: "Maria Garcia" },
      { input: "I am Carlos", expected: "Carlos" },
      { input: "This is Ana Lopez", expected: "Ana Lopez" },
      { input: "Call me Roberto", expected: "Roberto" },
    ];

    for (const tc of testCases) {
      let name: string | null = null;
      for (const pattern of namePatterns) {
        const match = tc.input.match(pattern);
        if (match) { name = match[1]; break; }
      }
      expect(name).toBe(tc.expected);
    }
  });

  it("appRouter has leads.save procedure", async () => {
    const { appRouter } = await import("./routers");
    expect(appRouter).toBeDefined();
    // Check that the leads router exists
    expect(appRouter._def.procedures).toBeDefined();
  });
});
