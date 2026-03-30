import { describe, expect, it } from "vitest";
import {
  allDining,
  allRestaurants,
  costaRicaDining,
  hangaroaDining,
  atacamaDiningCollection,
  bocasDiningCollection,
} from "../client/src/data/dining";
import type { PropertyDining, Restaurant, MenuItem } from "../client/src/data/dining";

/* ═══════════════════════════════════════════
   DINING DATA INTEGRITY TESTS
   ═══════════════════════════════════════════ */

describe("Dining data — allDining", () => {
  it("should have 4 property dining collections", () => {
    expect(allDining).toHaveLength(4);
  });

  it("should cover all property slugs", () => {
    const slugs = allDining.map((d) => d.propertySlug);
    expect(slugs).toContain("arenal");
    expect(slugs).toContain("hangaroa");
    expect(slugs).toContain("alto-atacama");
    expect(slugs).toContain("bocas-del-toro");
  });

  it("every collection should have a headline and description", () => {
    for (const collection of allDining) {
      expect(collection.headline.length).toBeGreaterThan(0);
      expect(collection.description.length).toBeGreaterThan(0);
    }
  });

  it("every collection should have at least 1 restaurant", () => {
    for (const collection of allDining) {
      expect(collection.restaurants.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("Dining data — allRestaurants", () => {
  it("should have 10 total restaurants/venues", () => {
    expect(allRestaurants).toHaveLength(10);
  });

  it("every restaurant should have required fields", () => {
    for (const r of allRestaurants) {
      expect(r.id).toBeTruthy();
      expect(r.name).toBeTruthy();
      expect(r.property).toBeTruthy();
      expect(r.propertySlug).toBeTruthy();
      expect(r.tagline).toBeTruthy();
      expect(r.description).toBeTruthy();
      expect(r.cuisine).toBeTruthy();
      expect(r.atmosphere).toBeTruthy();
      expect(Array.isArray(r.sections)).toBe(true);
    }
  });

  it("all restaurant IDs should be unique", () => {
    const ids = allRestaurants.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

/* ═══════════════════════════════════════════
   COSTA RICA DINING
   ═══════════════════════════════════════════ */

describe("Costa Rica dining", () => {
  it("should have 6 restaurants", () => {
    expect(costaRicaDining.restaurants).toHaveLength(6);
  });

  it("should include Lapas Bar with cocktail menu items", () => {
    const lapas = costaRicaDining.restaurants.find((r) => r.id === "lapas-bar");
    expect(lapas).toBeDefined();
    expect(lapas!.cuisine).toBe("Cocktail Bar");
    expect(lapas!.sections.length).toBeGreaterThan(0);

    const allItems = lapas!.sections.flatMap((s) => s.items);
    expect(allItems.length).toBeGreaterThan(5);

    // Check for specific cocktails from the real menu
    const names = allItems.map((i) => i.name);
    expect(names).toContain("Dreams Mai Tai");
    expect(names).toContain("Lost Paradise Zombie");
  });

  it("should include Terraza with cocktail menu items", () => {
    const terraza = costaRicaDining.restaurants.find((r) => r.id === "terraza");
    expect(terraza).toBeDefined();
    expect(terraza!.sections.length).toBeGreaterThan(0);

    const allItems = terraza!.sections.flatMap((s) => s.items);
    const names = allItems.map((i) => i.name);
    expect(names).toContain("Casitico Sour");
  });

  it("should include Asia Luna, Amor Loco, Café Campesino, Nostalgia", () => {
    const names = costaRicaDining.restaurants.map((r) => r.name);
    expect(names).toContain("Asia Luna");
    expect(names).toContain("Amor Loco");
    expect(names).toContain("Café Campesino");
    expect(names).toContain("Nostalgia");
  });

  it("Lapas Bar cocktails should have prices", () => {
    const lapas = costaRicaDining.restaurants.find((r) => r.id === "lapas-bar");
    const allItems = lapas!.sections.flatMap((s) => s.items);
    const itemsWithPrices = allItems.filter((i) => i.price);
    expect(itemsWithPrices.length).toBeGreaterThan(0);
  });

  it("Lapas Bar should have non-alcoholic options flagged", () => {
    const lapas = costaRicaDining.restaurants.find((r) => r.id === "lapas-bar");
    const allItems = lapas!.sections.flatMap((s) => s.items);
    const nonAlcoholic = allItems.filter((i) => i.isNonAlcoholic);
    expect(nonAlcoholic.length).toBeGreaterThan(0);
  });
});

/* ═══════════════════════════════════════════
   HANGAROA DINING (POERAVA)
   ═══════════════════════════════════════════ */

describe("Hangaroa dining", () => {
  it("should have 1 restaurant (Poerava)", () => {
    expect(hangaroaDining.restaurants).toHaveLength(1);
    expect(hangaroaDining.restaurants[0].name).toBe("Poerava");
  });

  it("Poerava should have multiple menu sections", () => {
    const poerava = hangaroaDining.restaurants[0];
    expect(poerava.sections.length).toBeGreaterThanOrEqual(4);
  });

  it("Poerava items should have Rapa Nui local names", () => {
    const poerava = hangaroaDining.restaurants[0];
    const allItems = poerava.sections.flatMap((s) => s.items);
    const withLocalNames = allItems.filter((i) => i.nameLocal);
    expect(withLocalNames.length).toBeGreaterThan(0);
  });

  it("Poerava items should have CLP prices", () => {
    const poerava = hangaroaDining.restaurants[0];
    const allItems = poerava.sections.flatMap((s) => s.items);
    const withPrices = allItems.filter((i) => i.price && i.price.includes("$"));
    expect(withPrices.length).toBeGreaterThan(5);
  });

  it("should contain Ceviche Rapa Nui", () => {
    const poerava = hangaroaDining.restaurants[0];
    const allItems = poerava.sections.flatMap((s) => s.items);
    const names = allItems.map((i) => i.name);
    expect(names).toContain("Ceviche Rapa Nui");
  });

  it("should have a Kids Menu section", () => {
    const poerava = hangaroaDining.restaurants[0];
    const sectionTitles = poerava.sections.map((s) => s.title);
    expect(sectionTitles).toContain("Kids Menu");
  });
});

/* ═══════════════════════════════════════════
   BOCAS DEL TORO DINING & SPA
   ═══════════════════════════════════════════ */

describe("Bocas del Toro dining", () => {
  it("should have 2 venues (restaurant + spa)", () => {
    expect(bocasDiningCollection.restaurants).toHaveLength(2);
  });

  it("should include Overwater Restaurant", () => {
    const restaurant = bocasDiningCollection.restaurants.find(
      (r) => r.id === "bocas-dining"
    );
    expect(restaurant).toBeDefined();
    expect(restaurant!.cuisine).toBe("Caribbean & Panamanian");
  });

  it("should include Nayara Spa with treatment details", () => {
    const spa = bocasDiningCollection.restaurants.find(
      (r) => r.id === "bocas-spa"
    );
    expect(spa).toBeDefined();
    expect(spa!.sections.length).toBeGreaterThan(0);

    const allItems = spa!.sections.flatMap((s) => s.items);
    const names = allItems.map((i) => i.name);
    expect(names).toContain("Bliss Massage");
    expect(names).toContain("The Jungle Rub");
    expect(names).toContain("Deep Cleansing Facial");
    expect(names).toContain("Reflexology");
  });

  it("Spa treatments should have prices", () => {
    const spa = bocasDiningCollection.restaurants.find(
      (r) => r.id === "bocas-spa"
    );
    const allItems = spa!.sections.flatMap((s) => s.items);
    const withPrices = allItems.filter((i) => i.price);
    expect(withPrices.length).toBe(allItems.length);
  });
});

/* ═══════════════════════════════════════════
   ALTO ATACAMA DINING
   ═══════════════════════════════════════════ */

describe("Alto Atacama dining", () => {
  it("should have 1 restaurant", () => {
    expect(atacamaDiningCollection.restaurants).toHaveLength(1);
  });

  it("should include signature desert dishes", () => {
    const restaurant = atacamaDiningCollection.restaurants[0];
    const allItems = restaurant.sections.flatMap((s) => s.items);
    const names = allItems.map((i) => i.name);
    expect(names).toContain("Atacama Ceviche");
    expect(names).toContain("Llama Tenderloin");
    expect(names).toContain("Desert Garden Salad");
  });

  it("should flag local and vegetarian items", () => {
    const restaurant = atacamaDiningCollection.restaurants[0];
    const allItems = restaurant.sections.flatMap((s) => s.items);
    const localItems = allItems.filter((i) => i.isLocal);
    const vegItems = allItems.filter((i) => i.isVegetarian);
    expect(localItems.length).toBeGreaterThan(0);
    expect(vegItems.length).toBeGreaterThan(0);
  });
});
