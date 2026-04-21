import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Sharalynn() {
  const [isMuted, setIsMuted] = useState(true);
  const videoUrl = "/manus-storage/sharalynn-hero_a9d0f29a.mp4";

  const services = [
    {
      icon: "🏠",
      title: "Luxury Home Sales",
      description:
        "Representing buyers and sellers in Miami's most exclusive properties. We specialize in waterfront, branded residences, and ultra-luxury estates.",
    },
    {
      icon: "🔍",
      title: "Lifestyle Matching",
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
      <section className="relative h-screen w-full overflow-hidden pt-20">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Mute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-24 left-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 hover:opacity-90 transition-all"
          style={{ backgroundColor: "rgba(58, 42, 26, 0.70)" }}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg
              className="w-4 h-4"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
              />
            </svg>
          )}
          <span
            className="text-[10px] tracking-[0.2em]"
            style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {isMuted ? "Sound" : "Mute"}
          </span>
        </button>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Where You Live
            <br />
            <span className="text-red-400">Is Who You Meet</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mb-8">
            Luxury real estate brokering meets expert matchmaking.
            <br />
            Your home and your heart deserve the same level of care.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Find Your Home & Match
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            All Things Home and Heart <Heart className="inline-block text-red-600 w-8 h-8 ml-2" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold mb-3">Luxury Real Estate</h3>
              <p className="text-gray-600">
                Discover Miami's most coveted neighborhoods and properties. From Brickell penthouses to Coral Gables
                estates, we know every address and what lifestyle it offers.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-2xl font-bold mb-3">Expert Matchmaking</h3>
              <p className="text-gray-600">
                Curated introductions for accomplished professionals. We understand that where you live shapes who you
                meet and the life you build.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Dual Expertise</h3>
              <p className="text-gray-600">
                The only advisor in Miami who understands both your real estate goals and your relationship aspirations.
                One conversation. One expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Miami's Premier Neighborhoods</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-red-600 text-red-600 p-4 rounded-lg text-center font-bold hover:bg-red-600 hover:text-white transition-all cursor-pointer"
              >
                {neighborhood}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Find Your Home & Your Match?
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Let's start a conversation about the life you want to build in Miami.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
