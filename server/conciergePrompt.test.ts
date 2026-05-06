/**
 * Concierge System Prompt , Content Verification Tests
 * Ensures the knowledge base contains all required information for all 6 properties.
 */
import { describe, it, expect } from "vitest";
import { NAYARA_CONCIERGE_SYSTEM_PROMPT } from "./conciergePrompt";

const prompt = NAYARA_CONCIERGE_SYSTEM_PROMPT;

describe("Concierge prompt , Lead capture & contact info", () => {
  it("instructs email capture early in conversation", () => {
    expect(prompt).toMatch(/email/i);
    expect(prompt).toMatch(/early/i);
  });

  it("includes reservations phone number", () => {
    expect(prompt).toContain("1-844-865-2002");
  });

  it("includes reservations email", () => {
    expect(prompt).toContain("reservations@nayararesorts.com");
  });

  it("includes phone hours", () => {
    expect(prompt).toMatch(/Mon.*Fri.*8.*AM.*10.*PM/i);
  });

  it("identifies as Henry, Nayara's AI concierge", () => {
    expect(prompt).toMatch(/Henry/);
    expect(prompt).toMatch(/Nayara.*concierge/i);
  });

  it("provides Nayara contact info for escalation", () => {
    expect(prompt).toContain("reservations@nayararesorts.com");
    expect(prompt).toContain("(844) 865-2002");
  });
});

describe("Concierge prompt , Suggested prompts", () => {
  it("includes all 4 suggested prompts", () => {
    expect(prompt).toContain("Pricing and Availability");
    expect(prompt).toContain("Rooms and Accommodations");
    expect(prompt).toContain("Experiences and Spa");
    expect(prompt).toContain("Sustainability Practices");
  });
});

describe("Concierge prompt , All 6 properties present", () => {
  it("covers Alto Atacama", () => {
    expect(prompt).toContain("NAYARA ALTO ATACAMA");
    expect(prompt).toContain("Catarpe Valley");
    expect(prompt).toContain("San Pedro de Atacama");
  });

  it("covers Nayara Gardens", () => {
    expect(prompt).toContain("Nayara Gardens");
    expect(prompt).toMatch(/family.friendly/i);
  });

  it("covers Nayara Springs", () => {
    expect(prompt).toContain("Nayara Springs");
    expect(prompt).toMatch(/adults.only/i);
  });

  it("covers Nayara Tented Camp", () => {
    expect(prompt).toContain("Nayara Tented Camp");
    expect(prompt).toMatch(/most luxurious/i);
  });

  it("covers Nayara Hangaroa", () => {
    expect(prompt).toContain("NAYARA HANGAROA");
    expect(prompt).toContain("Easter Island");
    expect(prompt).toContain("Rapa Nui");
  });

  it("covers Nayara Bocas del Toro", () => {
    expect(prompt).toContain("NAYARA BOCAS DEL TORO");
    expect(prompt).toContain("Panama");
    expect(prompt).toContain("Caribbean");
  });
});

describe("Concierge prompt , Property distinctions", () => {
  it("identifies adults-only properties", () => {
    expect(prompt).toMatch(/Adults.only.*Springs/i);
    expect(prompt).toMatch(/adults.only.*Bocas/i);
  });

  it("identifies family-friendly properties", () => {
    expect(prompt).toMatch(/Family.friendly.*Gardens/i);
  });

  it("prohibits 'Nayara Arenal' naming", () => {
    expect(prompt).toMatch(/NEVER.*Nayara Arenal/i);
  });

  it("identifies 3 separate Costa Rica properties", () => {
    expect(prompt).toContain("Nayara Gardens");
    expect(prompt).toContain("Nayara Springs");
    expect(prompt).toContain("Nayara Tented Camp");
    expect(prompt).toMatch(/THREE SEPARATE PROPERTIES/i);
  });
});

describe("Concierge prompt , Meal plans", () => {
  it("Costa Rica is breakfast included", () => {
    expect(prompt).toMatch(/Breakfast included/i);
  });

  it("Bocas del Toro is all-inclusive", () => {
    expect(prompt).toMatch(/ALL.INCLUSIVE/i);
    expect(prompt).toMatch(/all.inclusive.*Bocas|Bocas.*all.inclusive/is);
  });

  it("Atacama has room-only/half-board/all-inclusive options", () => {
    expect(prompt).toMatch(/half.board/i);
  });
});

describe("Concierge prompt , Awards (correct info)", () => {
  it("Springs has THREE Michelin Keys", () => {
    expect(prompt).toMatch(/Springs.*THREE Michelin Keys/i);
  });

  it("Alto Atacama has TWO Michelin Keys", () => {
    expect(prompt).toMatch(/Alto Atacama.*TWO Michelin Keys/i);
  });

  it("Bocas del Toro has TWO Michelin Keys", () => {
    expect(prompt).toMatch(/Bocas del Toro.*TWO Michelin Keys/i);
  });

  it("Bocas is #1 on Condé Nast", () => {
    expect(prompt).toMatch(/Bocas.*#1.*Cond/i);
  });

  it("Tented Camp won T+L best resort 4/5 years", () => {
    expect(prompt).toMatch(/Tented Camp.*4 out of the last 5/i);
  });

  it("explains Michelin Keys vs Stars", () => {
    expect(prompt).toMatch(/Michelin.*stars.*Keys|Keys.*stars.*Michelin/is);
  });
});

describe("Concierge prompt , Booking links", () => {
  it("includes SynXis booking links for all properties", () => {
    expect(prompt).toContain("be.synxis.com");
    // Should have multiple booking links
    const synxisCount = (prompt.match(/be\.synxis\.com/g) || []).length;
    expect(synxisCount).toBeGreaterThanOrEqual(4);
  });
});

describe("Concierge prompt , Key differentiators", () => {
  it("mentions Alto Atacama oasis advantage", () => {
    expect(prompt).toMatch(/oasis/i);
    expect(prompt).toMatch(/ONLY.*hotel.*oasis|oasis.*ONLY/i);
  });

  it("mentions Atacama stargazing and observatory", () => {
    expect(prompt).toMatch(/observatory/i);
    expect(prompt).toMatch(/telescope/i);
  });

  it("mentions Bocas coral restoration", () => {
    expect(prompt).toMatch(/coral.*restoration/i);
    expect(prompt).toMatch(/Caribbean Coral Reef Restoration/i);
  });

  it("references blog/journal content", () => {
    expect(prompt).toMatch(/journal/i);
    expect(prompt).toMatch(/blog/i);
  });
});
