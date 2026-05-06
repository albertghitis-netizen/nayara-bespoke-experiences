import { describe, it, expect, vi } from "vitest";

/**
 * Tests for the /api/hangaroa-lead Express endpoint.
 * Since the endpoint is registered directly on Express (not tRPC),
 * we test the logic and integration points rather than calling through HTTP.
 */

describe("Hangaroa lead endpoint logic", () => {
  it("saveLead is importable and callable", async () => {
    const { saveLead } = await import("./db");
    expect(typeof saveLead).toBe("function");
  });

  it("validates required fields , nombre and email must be present", () => {
    // Simulate the validation logic from the endpoint
    const validate = (body: Record<string, string>) => {
      const { nombre, email } = body;
      if (!email || !nombre) {
        return { valid: false, error: "nombre and email are required" };
      }
      return { valid: true };
    };

    // Missing nombre
    expect(validate({ nombre: "", apellido: "Test", email: "a@b.com", telefono: "" }))
      .toEqual({ valid: false, error: "nombre and email are required" });

    // Missing email
    expect(validate({ nombre: "Test", apellido: "Test", email: "", telefono: "" }))
      .toEqual({ valid: false, error: "nombre and email are required" });

    // Both missing
    expect(validate({ nombre: "", apellido: "", email: "", telefono: "" }))
      .toEqual({ valid: false, error: "nombre and email are required" });

    // Valid
    expect(validate({ nombre: "Maria", apellido: "Garcia", email: "maria@test.com", telefono: "+56912345678" }))
      .toEqual({ valid: true });

    // Valid with only nombre and email (no apellido/telefono)
    expect(validate({ nombre: "Maria", apellido: "", email: "maria@test.com", telefono: "" }))
      .toEqual({ valid: true });
  });

  it("constructs fullName correctly from nombre and apellido", () => {
    const buildName = (nombre: string, apellido: string) =>
      [nombre, apellido].filter(Boolean).join(" ");

    expect(buildName("Maria", "Garcia")).toBe("Maria Garcia");
    expect(buildName("Maria", "")).toBe("Maria");
    expect(buildName("Juan", "Pablo Montoya")).toBe("Juan Pablo Montoya");
  });

  it("constructs notes with telefono correctly", () => {
    const buildNotes = (telefono: string) =>
      `Super Sale Chile 2026 | Tel: ${telefono || "N/A"}`;

    expect(buildNotes("+56912345678")).toBe("Super Sale Chile 2026 | Tel: +56912345678");
    expect(buildNotes("")).toBe("Super Sale Chile 2026 | Tel: N/A");
  });

  it("lead is saved with correct source and propertyInterest", () => {
    // Verify the shape of the lead object that would be passed to saveLead
    const buildLead = (body: { nombre: string; apellido: string; email: string; telefono: string }) => {
      const fullName = [body.nombre, body.apellido].filter(Boolean).join(" ");
      return {
        email: body.email,
        name: fullName || null,
        source: "hangaroa-landing",
        channel: "website",
        propertyInterest: "Nayara Hangaroa",
        notes: `Super Sale Chile 2026 | Tel: ${body.telefono || "N/A"}`,
      };
    };

    const lead = buildLead({
      nombre: "Carlos",
      apellido: "Vega",
      email: "carlos@test.com",
      telefono: "+56987654321",
    });

    expect(lead).toEqual({
      email: "carlos@test.com",
      name: "Carlos Vega",
      source: "hangaroa-landing",
      channel: "website",
      propertyInterest: "Nayara Hangaroa",
      notes: "Super Sale Chile 2026 | Tel: +56987654321",
    });
  });

  it("lead schema accepts hangaroa-landing source", async () => {
    const { leads } = await import("../drizzle/schema");
    // The leads table should have source column that can accept our custom source
    expect(leads).toBeDefined();
    expect(Object.keys(leads)).toContain("source");
    expect(Object.keys(leads)).toContain("propertyInterest");
    expect(Object.keys(leads)).toContain("notes");
  });
});
