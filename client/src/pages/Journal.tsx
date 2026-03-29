/*
 * JOURNAL — All Nayara blog articles
 * Clean editorial listing grouped by destination
 * Links to blog.nayararesorts.com
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface JournalEntry {
  title: string;
  url: string;
  destination: string;
}

const articles: JournalEntry[] = [
  // Alto Atacama
  { title: "Why the Atacama Desert Is Mars on Earth", url: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel", destination: "Alto Atacama" },
  { title: "Wildlife Conservation in the Atacama Desert & Easter Island", url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island", destination: "Alto Atacama" },
  { title: "Why Winter Is the Best Time to Visit the Atacama", url: "https://blog.nayararesorts.com/why-winter-is-the-best-time-to-experience-the-atacama-desert", destination: "Alto Atacama" },
  { title: "Stargazing in the Atacama: The World's Clearest Skies", url: "https://blog.nayararesorts.com/best-stargazing-resort-atacama-desert", destination: "Alto Atacama" },
  { title: "An Oasis in the Desert", url: "https://blog.nayararesorts.com/best-place-to-stay-atacama-desert-oasis", destination: "Alto Atacama" },
  { title: "Romance in the Atacama", url: "https://blog.nayararesorts.com/why-nayara-alto-atacama-is-the-best-resort-in-the-atacama-desert-for-couples", destination: "Alto Atacama" },
  // Nayara Arenal
  { title: "Pura Vida: The Science of Why Costa Rica Feels Different", url: "https://blog.nayararesorts.com/pura-vida", destination: "Nayara Arenal" },
  { title: "Nature-Based Wellness: Rainforests, Oceans & Night Skies", url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health", destination: "Nayara Arenal" },
  { title: "Holistic Wellness Naturally", url: "https://blog.nayararesorts.com/holistic-wellness-naturally", destination: "Nayara Arenal" },
  { title: "Meeting the Toucans of Arenal Rainforest", url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them", destination: "Nayara Arenal" },
  { title: "Window to the Wild: Arenal Volcano Family Vacations", url: "https://blog.nayararesorts.com/window-to-the-wild-arenal-volcano-family-vacations-with-nayara-gardens-and-nayara-tented-camp", destination: "Nayara Arenal" },
  { title: "Wildlife Conservation in Arenal and Bocas del Toro", url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro", destination: "Nayara Arenal" },
  { title: "Birdwatching in Costa Rica", url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica", destination: "Nayara Arenal" },
  { title: "The History and Science of Private Hot Springs & Plunge Pools", url: "https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools", destination: "Nayara Arenal" },
  { title: "The Fiery Heart of Costa Rica: Life and Love at Nayara Springs", url: "https://blog.nayararesorts.com/the-fiery-heart-of-costa-ricas-rainforest-life-and-love-at-nayara-springs", destination: "Nayara Arenal" },
  // Hangaroa
  { title: "The Tapati Rapa Nui Festival at Nayara Hangaroa", url: "https://blog.nayararesorts.com/the-tapati-rapa-nui-festival-at-nayara-hangaroa", destination: "Hangaroa" },
  { title: "Walking Giants: The Hito Family & the Future of Easter Island", url: "https://blog.nayararesorts.com/walking-giants-the-hito-family-the-future-of-easter-island", destination: "Hangaroa" },
  { title: "Challenge Easter Island's Outdoors with Nayara Hangaroa", url: "https://blog.nayararesorts.com/challenge-easter-islands-outdoors-with-nayara-hangaroa", destination: "Hangaroa" },
  { title: "A Collapse That Wasn't: Maya and Rapa Nui on Climate & Survival", url: "https://blog.nayararesorts.com/a-collapse-that-wasnt-a-collapse", destination: "Hangaroa" },
  // Bocas del Toro
  { title: "5 Interesting Facts About Bocas del Toro, Panama", url: "https://blog.nayararesorts.com/5-interesting-facts-about-bocas-del-toro-panama", destination: "Bocas del Toro" },
  { title: "The Private Island Paradise of Bocas del Toro", url: "https://blog.nayararesorts.com/the-private-island-paradise-of-bocas-del-toro", destination: "Bocas del Toro" },
  { title: "Your Floating Paradise in the Galapagos of the Caribbean", url: "https://blog.nayararesorts.com/your-floating-paradise-in-the-galapagos-of-the-caribbean-nayara-bocas-del-toro", destination: "Bocas del Toro" },
  { title: "Nayara Bocas del Toro Treehouse", url: "https://blog.nayararesorts.com/nayarabocasdeltorotreehouse", destination: "Bocas del Toro" },
  { title: "Biodensity, Underwater Mountains & Our Ecosystems", url: "https://blog.nayararesorts.com/biodensity-underwater-mountains-and-more-a-different-perspective-on-our-ecosystems", destination: "Bocas del Toro" },
];

const destinations = ["Alto Atacama", "Nayara Arenal", "Hangaroa", "Bocas del Toro"];

export default function Journal() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Header */}
      <div className="bg-stone-900 text-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase mb-10 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            All Properties
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/50 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Journal
            </h1>
            <p
              className="text-white/60 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Stories, insights, and dispatches from our destinations around the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Articles by Destination */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {destinations.map((dest, di) => {
          const destArticles = articles.filter((a) => a.destination === dest);
          return (
            <motion.div
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: di * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2
                className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-6 pb-3 border-b border-stone-200"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {dest}
              </h2>
              <div className="flex flex-col">
                {destArticles.map((article, ai) => (
                  <a
                    key={ai}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-stone-100 hover:border-stone-300 transition-colors"
                  >
                    <span
                      className="text-stone-700 group-hover:text-stone-900 text-base md:text-lg transition-colors pr-4"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {article.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-stone-500 flex-shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-stone-300 text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Resorts
          </p>
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
