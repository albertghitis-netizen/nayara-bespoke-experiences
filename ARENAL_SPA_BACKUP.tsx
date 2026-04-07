/* ARENAL SPA SECTION BACKUP
   This code was extracted from CostaRica.tsx (/arenal page)
   Preserved here in case it needs to be used elsewhere
*/

function ArenalSpa({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("nature");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const treatments = tentedCamp.treatments;
  const filtered = treatments.filter((t) =>
    activeCategory === "culinary-wellness"
      ? ["culinary", "wellness", "spa"].includes(t.category)
      : t.category === activeCategory
  );

  return (
    <section ref={ref} id="spa" className="relative py-24 md:py-32 bg-[#f7f5f0]">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-emerald-950 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Explore Our Spa
          </h2>
          <p
            className="text-emerald-900/50 text-lg md:text-xl tracking-wide"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Earth, Water &amp; Rainforest
          </p>
        </motion.div>

        {/* Spa Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 h-64 md:h-96 overflow-hidden"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-kids-robes_57409a94.jpg"
            alt="Nayara Spa experience"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {spaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-emerald-900 text-white border-emerald-900"
                  : "bg-transparent text-emerald-900/40 border-emerald-900/15 hover:border-emerald-900/30 hover:text-emerald-900/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Treatment Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((treatment, i) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                index={i}
                isExpanded={expandedId === treatment.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === treatment.id ? null : treatment.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Policies Note */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-emerald-900/10 pt-8"
        >
          <p
            className="text-emerald-900/25 text-xs leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            {tentedCamp.theme.spaPolicies}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Treatment Card */
function TreatmentCard({
  treatment,
  index,
  isExpanded,
  onToggle,
}: {
  treatment: Treatment;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onToggle}
      className="group border border-emerald-900/8 bg-white/60 p-6 hover:border-emerald-900/15 hover:bg-white/80 transition-all duration-500 cursor-pointer"
    >
      {/* Element Icon + Name */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          {treatment.element && (
            <div className="flex items-center gap-2 mb-1">
              <span className={elementColors[treatment.element] || "text-emerald-700"}>
                {elementIcons[treatment.element] || <Leaf className="w-4 h-4" />}
              </span>
              <span
                className="text-emerald-900/30 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {treatment.element}
              </span>
            </div>
          )}
          <h3
            className="text-emerald-950 text-lg"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {treatment.name}
          </h3>
          {treatment.localName && (
            <p
              className="text-emerald-700/50 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {treatment.localName}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-emerald-900/30 transition-transform duration-300 flex-shrink-0 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Quick Info */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-emerald-900/25" />
          <span
            className="text-xs text-emerald-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {treatment.duration}
          </span>
        </div>
        <span
          className="text-xs text-emerald-700/60"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {treatment.price}
        </span>
      </div>

      {/* Expandable Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-emerald-900/50 text-sm leading-relaxed pt-3 border-t border-emerald-900/8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {treatment.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
