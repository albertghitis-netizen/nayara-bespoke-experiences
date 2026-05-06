/*
 * CrossPropertyCTA , "Continue Your Journey"
 * Shows two contrasting property suggestions at the bottom of each property page.
 * Each card links to a different biome/destination to reinforce the collection narrative.
 * Supports both static images and auto-playing video backgrounds.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimateOnScroll, TextReveal, StaggerOnScroll, fadeUp, staggerContainer } from "@/components/motion";

export interface CrossPropertySuggestion {
  name: string;
  chapter: string;
  tagline: string;
  route: string;
  image: string;
  video?: string; // Optional: auto-playing video (takes priority over image)
  audienceTag?: string; // "Adults Only" | "Families Welcome"
}

interface CrossPropertyCTAProps {
  suggestions: CrossPropertySuggestion[];
  bgColor?: string;
  textColor?: string;
  textSecondaryColor?: string;
  accentColor?: string;
  dividerColor?: string;
}

export default function CrossPropertyCTA({
  suggestions,
  bgColor = "#f4f1eb",
  textColor = "#1A0F0A",
  textSecondaryColor = "#1A0F0A99",
  accentColor = "#3a2a1a",
  dividerColor = "#E6DFD5",
}: CrossPropertyCTAProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[10px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: textSecondaryColor }}
          >
            Continue Your Journey
          </p>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span
            className="text-xl md:text-3xl lg:text-[34px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: textColor }}
          >
            Explore Another Chapter
          </span>
        </TextReveal>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {suggestions.map((prop) => (
            <motion.div key={prop.route} variants={fadeUp}>
              <Link
                href={prop.route}
                className="group block overflow-hidden"
                style={{ border: `1px solid ${dividerColor}` }}
              >
                {/* Media , video or image */}
                <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                  {prop.video ? (
                    <video
                      src={prop.video}
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  {/* Audience tag overlay */}
                  {prop.audienceTag && (
                    <span
                      className="absolute top-4 right-4 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 backdrop-blur-sm"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        color: "#fff",
                        backgroundColor: "rgba(0,0,0,0.4)",
                      }}
                    >
                      {prop.audienceTag}
                    </span>
                  )}
                </div>
                {/* Text */}
                <div className="p-5 md:p-6" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: textSecondaryColor }}
                  >
                    {prop.chapter}
                  </p>
                  <h3
                    className="text-[18px] md:text-[20px] mb-2 group-hover:underline transition-all"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: textColor }}
                  >
                    {prop.name}
                  </h3>
                  <p
                    className="text-[13px] leading-[1.7]"
                    style={{ fontFamily: "var(--font-body)", color: textSecondaryColor }}
                  >
                    {prop.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
