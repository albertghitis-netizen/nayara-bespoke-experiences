/**
 * MISAMORES RESTAURANT , Dining Detail Page
 * Property: Nayara Tented Camp
 * Palette: Olive green (#868B75) on bone (#F7F5F0)
 * Gallery: Images from culinaryImages.ts
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { restaurants } from "@/data/culinaryImages";
import { getPalette, BRAND } from "@/data/propertyPalettes";
import { AnimateOnScroll, fadeUp } from "@/components/motion";

const palette = getPalette("springs");

export default function MisAmoresRestaurant() {
  const restaurant = restaurants.find((r) => r.slug === "mis-amores");

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen" style={ { backgroundColor: BRAND.pageBackground }}>
      <BrandNavigation pageType="property" backLink={{ label: "Nayara Springs", href: "/springs" }} />
      <HeroSection restaurant={restaurant} />
      <IntroSection restaurant={restaurant} />
      <GallerySection restaurant={restaurant} />
      <CTASection />
      <Footer pageType="property" bgColor={palette.primary} textColor="#FFFFFF" propertyName="Springs" />
    </div>
  );
}

function HeroSection({ restaurant }: { restaurant: any }) {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden" style={ { backgroundColor: palette.primary }}>
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src={restaurant.hero}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={ { opacity: 0, y: 30 }}
          animate={ { opacity: 1, y: 0 }}
          transition={ { duration: 1.2, delay: 0.3 }}
        >
          <p
            className="text-white/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
            style={ { fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {restaurant.propertyName}
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl mb-4"
            style={ { fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {restaurant.name}
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl max-w-md mx-auto"
            style={ { fontFamily: "var(--font-body)" }}
          >
            {restaurant.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection({ restaurant }: { restaurant: any }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
      <div className="max-w-[900px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.primary }}
          >
            {restaurant.name}
          </h2>
          <p
            className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
            style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
          >
            Mis Amores is the culinary jewel of Nayara Springs — an adults-only fine dining experience where every detail is designed for romance. The menu weaves Costa Rican ingredients with international technique, served in an intimate candlelit setting overlooking the volcanic hot springs. A Relais & Châteaux dining experience.
          </p>
          <p
            className="text-[15px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
          >
            Each course is a love letter to the land — from the volcanic terroir that shapes our produce to the Pacific waters that deliver our seafood. The tasting menu changes nightly, guided by what the morning harvest reveals. Paired with wines from our sommelier's personal selections, dinner at Mis Amores is not a meal — it is an evening you will remember.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function GallerySection({ restaurant }: { restaurant: any }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = restaurant.images || [];

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={ { backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-2xl md:text-3xl mb-12"
            style={ { fontFamily: "var(--font-display)", fontWeight: 400, color: palette.primary }}
          >
            Gallery
          </h2>
        </AnimateOnScroll>

        {/* Main image display */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="mb-8">
            <img
          loading="lazy"
              src={images[selectedIndex]}
              alt={`${restaurant.name} - Image ${selectedIndex + 1}`}
              className="w-full h-auto rounded-lg object-cover"
              style={ { maxHeight: "500px" }}
            />
          </div>
        </AnimateOnScroll>

        {/* Thumbnail grid */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  border: selectedIndex === index ? `2px solid ${palette.primary}` : "none",
                  opacity: selectedIndex === index ? 1 : 0.6,
                }}
              >
                <img
          loading="lazy"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Image counter */}
        <div className="mt-8 text-center">
          <p
            className="text-[12px] tracking-[0.1em] uppercase"
            style={ { fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            {selectedIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={ { backgroundColor: BRAND.pageBackground }}>
      <div className="max-w-[900px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={ { fontFamily: "var(--font-display)", fontWeight: 400, color: palette.primary }}
          >
            Ready to Experience This?
          </h2>
          <Link href="/springs/gastronomy">
            <a
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105"
              style={ { backgroundColor: palette.primary }}
            >
              <span style={ { fontFamily: "var(--font-body)", fontWeight: 500 }}>
                Back to Gastronomy
              </span>
            </a>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
