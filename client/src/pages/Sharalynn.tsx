import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Volume2, VolumeX } from "lucide-react";

export default function Sharalynn() {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Wide video for desktop, vertical for mobile
  const heroVideoUrlDesktop = "/manus-storage/sharalynn-hero-1_7131d5f7.mov";
  const heroVideoUrlMobile = "/manus-storage/sharalynn-hero-2_c2c135e4.mov";
  const heroVideoUrl = isMobile ? heroVideoUrlMobile : heroVideoUrlDesktop;
  
  const logoUrl = "/manus-storage/sharalynn-logo.png";
  const headshotUrl = "/manus-storage/IMG_8842_a1b2c3d4.jpeg";

  const services = [
    {
      icon: "🏠",
      title: "Luxury Home Sales",
      description:
        "Representing buyers and sellers in Miami's most exclusive properties. We specialize in waterfront, branded residences, and ultra-luxury estates.",
    },
    {
      icon: "💕",
      title: "Expert Matchmaking",
      description:
        "Personalized introductions based on values, lifestyle, and neighborhood fit. We believe the right address attracts the right people.",
    },
    {
      icon: "📍",
      title: "Relocation Consulting",
      description:
        "Moving to Miami? We guide you through neighborhoods, social scenes, and help you build your life from day one.",
    },
    {
      icon: "💼",
      title: "Executive Placement",
      description:
        "For accomplished professionals seeking both the perfect home and meaningful connections in Miami's elite circles.",
    },
    {
      icon: "🌟",
      title: "Ultra-Luxury Advisory",
      description:
        "Discretion, expertise, and access. We serve Miami's most discerning clients across real estate and personal introductions.",
    },
    {
      icon: "🎯",
      title: "Second Act Services",
      description:
        "For divorced or newly single accomplished clients. We help rebuild both your home and your social life with intention.",
    },
  ];

  const neighborhoods = [
    "Brickell",
    "Coral Gables",
    "Coconut Grove",
    "Fisher Island",
    "Pinecrest",
    "South Beach",
    "Wynwood",
    "Design District",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          key={heroVideoUrl}
        >
          <source src={heroVideoUrl} type="video/quicktime" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top Navigation Pills */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
          {/* Mute Button - Left */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 hover:opacity-90 transition-all"
            style={{ backgroundColor: "rgba(196, 30, 58, 0.70)" }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" style={{ color: "rgba(255, 255, 255, 0.8)" }} />
            ) : (
              <Volume2 className="w-4 h-4" style={{ color: "rgba(255, 255, 255, 0.8)" }} />
            )}
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {isMuted ? "Sound" : "Mute"}
            </span>
          </button>

          {/* Ask Shara Button - Right */}
          <button
            className="pointer-events-auto flex items-center justify-center h-9 px-5 rounded-full backdrop-blur-md border border-white/10 hover:opacity-90 transition-all"
            style={{ backgroundColor: "rgba(196, 30, 58, 0.70)" }}
            aria-label="Ask Shara"
          >
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{ color: "rgba(255, 255, 255, 0.8)", fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Ask Shara
            </span>
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Where You Live Is Who You Meet
            </h1>
            <p className="text-lg text-white/80 mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Luxury real estate meets expert matchmaking
            </p>
            <p className="text-2xl text-red-400 font-light" style={{ fontFamily: "var(--font-display)" }}>
              All Things Home and Heart ❤️
            </p>
          </div>
        </div>
      </section>

      {/* About Sharalynn Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={headshotUrl}
              alt="Sharalynn Zeitlin"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img src={logoUrl} alt="Sharalynn Logo" className="w-24 h-24 mb-6" />
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Sharalynn Zeitlin
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Luxury real estate broker and expert matchmaker specializing in Miami's most discerning professionals. With deep expertise in both luxury real estate and meaningful introductions, Sharalynn understands that where you live and who you meet are intrinsically connected.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in Miami's most prestigious neighborhoods, she works with accomplished individuals, executives, and high-net-worth clients seeking both the perfect home and meaningful connections.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => (window.location.href = "mailto:Shara.Zeitlin@compass.com")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Human Matchmaking Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
          Why Human-Led Matchmaking?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">The App Problem</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✗ 69% delete apps within a month</li>
              <li>✗ 62% experience ghosting</li>
              <li>✗ Only 9% lead to lasting relationships</li>
              <li>✗ $1.1B lost to romance scams</li>
              <li>✗ 80% feel emotionally drained</li>
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">The Sharalynn Difference</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Personalized vetting & introductions</li>
              <li>✓ 6-9x higher success rates</li>
              <li>✓ Discretion & confidentiality</li>
              <li>✓ Real connections, not algorithms</li>
              <li>✓ Ongoing support & guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
            Miami's Premier Neighborhoods
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-800">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
          Featured Insights
        </h2>
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-12 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Love and Home: The Connection</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Explore how your living environment shapes your relationships and why the right neighborhood can lead to the right connections.
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() =>
              window.open(
                "https://blog.nayararesorts.com/love-and-home",
                "_blank"
              )
            }
          >
            Read the Blog
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Find Your Home and Your Match?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let's start a conversation about where you want to live and who you want to meet.
          </p>
          <Button
            className="bg-white text-red-600 hover:bg-gray-100"
            onClick={() => (window.location.href = "mailto:Shara.Zeitlin@compass.com")}
          >
            Ask Shara
          </Button>
        </div>
      </section>

      {/* Footer - No Ask Concierge */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">Sharalynn Zeitlin | Luxury Real Estate & Expert Matchmaking</p>
          <p className="text-gray-500">
            <a href="mailto:Shara.Zeitlin@compass.com" className="hover:text-red-400 transition-colors">
              Shara.Zeitlin@compass.com
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-4">All Things Home and Heart ❤️</p>
        </div>
      </footer>
    </div>
  );
}
