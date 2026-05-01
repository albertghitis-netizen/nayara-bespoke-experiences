import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";

export default function Stargazing() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://manus-storage.s3.amazonaws.com/TimeLapseVideoLong_90340743.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center max-w-3xl"
          >
            <h1
              className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Stargazing in Atacama
            </h1>
            <p
              className="text-white/70 text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Experience the clearest night skies on Earth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2
              className="text-white text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              The Atacama Experience
            </h2>
            <p
              className="text-white/60 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Coming Soon
            </p>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-white text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Atacama Night Sky
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              src="https://manus-storage.s3.amazonaws.com/fd9345d1-bbec-446f-af3b-1c2974454b33_d63a47c0.JPG"
              alt="Stargazing view 1"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src="https://manus-storage.s3.amazonaws.com/ca3fcfa9-c401-4764-8caf-aa1b556a1eec_19cde269.JPG"
              alt="Stargazing view 2"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://manus-storage.s3.amazonaws.com/3ebfa54d-69b4-4274-bc93-fc60642536c9_fe60ecbc.JPG"
              alt="Stargazing view 3"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src="https://manus-storage.s3.amazonaws.com/3a94f88f-2a69-457a-bc18-fae9946d8f0c_fd175feb.jpg"
              alt="Stargazing view 4"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src="https://manus-storage.s3.amazonaws.com/9f6e35ed-63fd-40ca-bb72-31e6a2f0f28f_544eb3d1.JPG"
              alt="Stargazing view 5"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src="https://manus-storage.s3.amazonaws.com/ae06ce17-ec89-4b23-8be6-1e5251ac850c_a1639555.JPG"
              alt="Stargazing view 6"
              className="rounded-lg w-full h-64 object-cover"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              src="https://manus-storage.s3.amazonaws.com/feb91b2b-2699-4cd2-84ad-f80e0237ac2b_ff945380.JPG"
              alt="Stargazing view 7"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Plan Your Stargazing Adventure
            </h2>
            <p
              className="text-white/60 text-lg mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Coming Soon
            </p>
            <button
              className="px-8 py-3 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Reserve Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
