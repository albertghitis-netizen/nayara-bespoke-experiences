/*
 * NAYARA HANGAROA — Super Sale Chile 2026
 * Landing page converted from user-provided HTML
 * Standalone page — no site nav, uses own footer
 */

import { useState, useEffect, useRef } from "react";

const SYNXIS_URL =
  "https://be.synxis.com/?Hotel=35955&Chain=24447&adult=2";

const PROGRAMS = [
  {
    id: "dream",
    label: "Dream",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/DGbtLJsWgsbGXsiX.png",
    items: [
      "Alojamiento y desayuno.",
      "Traslados desde y hacia el Aeropuerto Mataveri en vuelos regulares.",
      "Collar de bienvenida.",
      "Minibar de bienvenida.",
      "Gimnasio, acceso a piscina y wifi.",
      "No incluye entradas al Parque Nacional Rapa Nui.",
    ],
  },
  {
    id: "discover",
    label: "Discover",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/bibrKLcvHQQXZzyE.webp",
    items: [
      "Alojamiento.",
      "Desayuno, almuerzo o cena a la carta, con bebidas sin alcohol, cerveza, vino sugerencia de la casa y café o té durante las comidas.",
      "Traslados desde y hacia el Aeropuerto Mataveri en vuelos regulares.",
      "Collar de bienvenida.",
      "Un medio día de excursión compartida con otros huéspedes por noche de estadía, acompañados por guías locales.",
      "Entrada al Parque Nacional Rapa Nui.",
      "Minibar en la habitación con reposición diaria.",
      "Gimnasio, acceso a piscina y wifi.",
    ],
  },
  {
    id: "full",
    label: "Full Experience",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/oryKxaJgnhQNmATo.webp",
    items: [
      "Traslado desde y hacia el Aeropuerto Mataveri.",
      "Collar tradicional de bienvenida y despedida.",
      "Desayuno, almuerzo y cena (pensión completa).",
      "Barra libre en el hotel (con algunas exclusiones).",
      "2 excursiones de medio día con guías locales, por noche de estadía.",
      "Entrada al Parque Nacional Rapa Nui.",
      "Reposición diaria del minibar.",
      "Gimnasio, acceso a piscina y wifi.",
    ],
  },
];

const CONDITIONS = [
  "Válido exclusivamente para chilenos residentes en Chile.",
  "Las reservas deben realizarse entre el 11 al 30 de abril de 2026 para viajar entre el 1 de mayo al 13 de septiembre de 2026.",
  "El alojamiento deberá ser abonado en su totalidad en el momento de confirmación de reserva y es no reembolsable.",
  "Es posible cancelar sin penalidad hasta 30 días antes de la llegada. El monto abonado queda como crédito para una futura estadía, sujeto a ajuste de tarifa vigente.",
  "Sujeto a disponibilidad. No acumulable con otras promociones.",
];

/* ─── Countdown hook ─── */
function useCountdown(deadline: Date) {
  const [diff, setDiff] = useState(deadline.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(deadline.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [deadline]);
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function HangaroaSuperSale() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const deadline = useRef(new Date("2026-04-30T23:59:59-04:00"));
  const countdown = useCountdown(deadline.current);

  const toggle = (id: string) => {
    const next = openProgram === id ? null : id;
    setOpenProgram(next);
    if (next && detailRef.current) {
      setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 120);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#FFFFFF", fontFamily: "'Jost', Helvetica, Arial, sans-serif" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* ── LOGO HEADER ── */}
      <div style={{ backgroundColor: "#FBF8F3", textAlign: "center", padding: "20px 20px 16px" }}>
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/HedJYjxBAxARVsRI.png"
          alt="Nayara Hangaroa"
          style={{ maxWidth: 180, height: "auto" }}
        />
      </div>

      {/* ── HERO VIDEO ── */}
      <div style={{ position: "relative", width: "100%", height: 600, overflow: "hidden", background: "#000" }} className="nhr-hero-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/DVulAgXgLGESeyod.mp4"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
            padding: "40px 20px 16px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 46,
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.2,
              margin: "0 0 12px 0",
            }}
          >
            Nayara Hangaroa - Super Sale Chile 2026
          </h1>
          <div
            style={{
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.08em",
            }}
          >
            Isla de Pascua
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div style={{ backgroundColor: "#F5F0E8", padding: "32px 24px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 60, height: 1, backgroundColor: "#AD8F61", margin: "0 auto 24px" }} />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontWeight: 400,
              color: "#AD8F61",
              lineHeight: 1.3,
              margin: "0 0 20px 0",
            }}
          >
            Camina entre los Moai
            <br />
            Duerme frente al Pac&iacute;fico
          </h2>
          <p style={{ fontSize: 16, fontWeight: 400, color: "#333333", lineHeight: 1.75, margin: "0 0 14px 0" }}>
            Descubre la magia de Rapa Nui en uno de los destinos más exclusivos del Pacífico Sur. Nayara Hangaroa te
            invita a desconectarte, conectar con la cultura ancestral y vivir experiencias auténticas en un entorno de
            naturaleza, misterio y bienestar, con condiciones especiales pensadas para ti.
          </p>
          <p style={{ fontSize: 16, fontWeight: 400, color: "#333333", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#231F20" }}>Reserva entre el 11 y el 30 de abril</strong> y aprovecha{" "}
            <strong style={{ color: "#231F20" }}>
              tarifas especiales para viajar entre el 1 de mayo y el 13 de septiembre,
            </strong>{" "}
            con condiciones exclusivas para planificar tu próxima estadía.
          </p>
        </div>
      </div>

      {/* ── 50% BANNER ── */}
      <div style={{ backgroundColor: "#AD8F61", padding: "30px 20px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 80,
            fontWeight: 300,
            color: "#FFFFFF",
            lineHeight: 1,
            margin: 0,
          }}
        >
          50<span style={{ fontSize: 50 }}>%</span>
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase" as const,
            color: "#FFFFFF",
            marginTop: 4,
          }}
        >
          Descuento
        </div>
        <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.8)", marginTop: 8, letterSpacing: "0.05em" }}>
          *Sobre tarifas internacionales. Válido para residentes en Chile.
        </div>
      </div>

      {/* ── BOOKING PILL ── */}
      <div style={{ backgroundColor: "#F5F0E8", textAlign: "center", padding: "24px 20px 8px" }}>
        <div style={{ display: "inline-block", border: "1px solid #AD8F61", padding: "12px 24px" }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#AD8F61",
              fontWeight: 500,
            }}
          >
            Reserva entre el 11 – 30 de Abril
          </span>
        </div>
      </div>

      {/* ── TOP CTA ── */}
      <div style={{ backgroundColor: "#F5F0E8", textAlign: "center", padding: "16px 20px 28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
          <a
            href={SYNXIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "16px 44px",
              backgroundColor: "#AD8F61",
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              border: "2px solid #AD8F61",
              transition: "all 0.3s ease",
            }}
          >
            Reserva Directo
          </a>
          <a
            href="mailto:reservations@nayararesorts.com"
            style={{
              display: "inline-block",
              padding: "15px 32px",
              border: "2px solid #AD8F61",
              color: "#AD8F61",
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              background: "transparent",
              transition: "all 0.3s ease",
            }}
          >
            Contacta Reservaciones
          </a>
        </div>
      </div>

      {/* ── PROGRAMS SECTION ── */}
      <div style={{ backgroundColor: "#B8A88A", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontWeight: 400,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Nuestros Programas
          </h2>
        </div>

        {/* Program Cards */}
        <div style={{ display: "flex", gap: 12, maxWidth: 960, margin: "0 auto", flexWrap: "wrap" }}>
          {PROGRAMS.map((prog) => {
            const isActive = openProgram === prog.id;
            const isDimmed = openProgram !== null && openProgram !== prog.id;
            return (
              <div key={prog.id} style={{ flex: 1, minWidth: 260 }}>
                <div
                  onClick={() => toggle(prog.id)}
                  style={{
                    position: "relative",
                    height: 380,
                    borderRadius: 4,
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    opacity: isDimmed ? 0.5 : 1,
                    filter: isDimmed ? "grayscale(60%)" : "none",
                    transform: isActive ? "translateY(-4px)" : "none",
                    boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  <img
                    src={prog.image}
                    alt={prog.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", top: 24, left: 0, right: 0, textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase" as const,
                        color: "#FFFFFF",
                      }}
                    >
                      Programa
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase" as const,
                        color: "#FFFFFF",
                        marginTop: 4,
                      }}
                    >
                      {prog.label}
                    </div>
                    <div style={{ width: 40, height: 2, background: "#FFFFFF", margin: "12px auto 0" }} />
                  </div>
                  <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "8px 20px",
                        border: "1px solid rgba(255,255,255,0.7)",
                        fontSize: 11,
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase" as const,
                        color: "#FFFFFF",
                        background: "rgba(0,0,0,0.2)",
                      }}
                    >
                      Ver más
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Detail */}
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {PROGRAMS.map((prog) =>
            openProgram === prog.id ? (
              <div
                key={prog.id}
                ref={detailRef}
                style={{
                  background: "#FFFFFF",
                  marginTop: 24,
                  padding: "32px 28px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: "#231F20",
                    margin: "0 0 18px 0",
                  }}
                >
                  Programa {prog.label}
                </h3>
                <div style={{ textAlign: "left", fontSize: 14, color: "#333333", lineHeight: 1.8 }}>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {prog.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: 24 }}>
                  <a
                    href={SYNXIS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "14px 36px",
                      backgroundColor: "#AD8F61",
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase" as const,
                      textDecoration: "none",
                      border: "2px solid #AD8F61",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Reserva Directo
                  </a>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>

      {/* ── COUNTDOWN TIMER ── */}
      <div style={{ backgroundColor: "#FBF8F3", padding: "36px 20px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#231F20",
            margin: "0 0 16px 0",
          }}
        >
          Super Sale Chile 2026
        </h3>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
          {[
            { value: countdown.days, label: "Días" },
            { value: countdown.hours, label: "Horas" },
            { value: countdown.minutes, label: "Minutos" },
            { value: countdown.seconds, label: "Seg" },
          ].map((unit) => (
            <div key={unit.label} style={{ textAlign: "center", margin: "0 16px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 56,
                  fontWeight: 300,
                  color: "#231F20",
                  lineHeight: 1,
                }}
              >
                {unit.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: "#7A7A7A",
                  marginTop: 4,
                }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 13,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#AD8F61",
            fontWeight: 500,
            marginTop: 16,
          }}
        >
          Disponible hasta el 30 de Abril
        </div>
      </div>

      {/* ── CONDITIONS ── */}
      <div style={{ backgroundColor: "#FFFFFF", padding: "32px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#AD8F61",
              margin: "0 0 18px 0",
            }}
          >
            Condiciones
          </h3>
          <div style={{ textAlign: "left" }}>
            {CONDITIONS.map((cond, i) => (
              <div
                key={i}
                style={{
                  fontSize: 14,
                  color: "#333333",
                  lineHeight: 1.7,
                  padding: "10px 0",
                  borderBottom: i < CONDITIONS.length - 1 ? "1px solid #E8E2D8" : "none",
                }}
                dangerouslySetInnerHTML={{
                  __html: cond
                    .replace(
                      "11 al 30 de abril de 2026",
                      "<strong>11 al 30 de abril de 2026</strong>",
                    )
                    .replace(
                      "1 de mayo al 13 de septiembre de 2026.",
                      "<strong>1 de mayo al 13 de septiembre de 2026.</strong>",
                    ),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── SIGNUP SECTION ── */}
      <div style={{ backgroundColor: "#F5F0E8", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ width: 60, height: 1, backgroundColor: "#AD8F61", margin: "0 auto 24px" }} />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontWeight: 400,
              color: "#AD8F61",
              lineHeight: 1.35,
              margin: "0 0 10px 0",
            }}
          >
            Suscríbete y sé el primero en conocer
            <br />
            nuestras ofertas y novedades exclusivas
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10, marginTop: 28 }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <input
                type="text"
                placeholder="Nombre"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  border: "1px solid #C8BBA0",
                  background: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#231F20",
                  letterSpacing: "0.05em",
                  outline: "none",
                  fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                  boxSizing: "border-box" as const,
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <input
                type="text"
                placeholder="Apellido"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  border: "1px solid #C8BBA0",
                  background: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#231F20",
                  letterSpacing: "0.05em",
                  outline: "none",
                  fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                  boxSizing: "border-box" as const,
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="email"
              placeholder="Correo electrónico"
              style={{
                width: "100%",
                padding: "14px 18px",
                border: "1px solid #C8BBA0",
                background: "#FFFFFF",
                fontSize: 13,
                fontWeight: 300,
                color: "#231F20",
                letterSpacing: "0.05em",
                outline: "none",
                fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                boxSizing: "border-box" as const,
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <input
              type="tel"
              placeholder="Teléfono (opcional)"
              style={{
                width: "100%",
                padding: "14px 18px",
                border: "1px solid #C8BBA0",
                background: "#FFFFFF",
                fontSize: 13,
                fontWeight: 300,
                color: "#231F20",
                letterSpacing: "0.05em",
                outline: "none",
                fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                boxSizing: "border-box" as const,
              }}
            />
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              padding: "16px 28px",
              backgroundColor: "#AD8F61",
              color: "#FFFFFF",
              border: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              cursor: "pointer",
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              transition: "background 0.3s ease",
            }}
          >
            Suscribirme
          </button>
          <p style={{ fontSize: 11, fontWeight: 300, color: "#A09880", letterSpacing: "0.05em", margin: "16px 0 0 0" }}>
            Nayara Hangaroa &middot; Isla de Pascua. Puedes darte de baja en cualquier momento.
          </p>
          <div style={{ width: 60, height: 1, backgroundColor: "#AD8F61", margin: "28px auto 0" }} />
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{ backgroundColor: "#AD8F61", padding: "44px 24px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 32,
            fontWeight: 300,
            color: "#FFFFFF",
            margin: "0 0 10px 0",
          }}
        >
          Reserva Tu Experiencia en Rapa Nui
        </h2>
        <p style={{ fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.85)", margin: "0 0 24px 0" }}>
          Vive la magia de Isla de Pascua con Nayara Hangaroa
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
          <a
            href={SYNXIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              backgroundColor: "#FFFFFF",
              color: "#AD8F61",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
            }}
          >
            Reserva Directo
          </a>
          <a
            href="mailto:reservations@nayararesorts.com"
            style={{
              display: "inline-block",
              padding: "13px 28px",
              border: "2px solid rgba(255,255,255,0.85)",
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              background: "transparent",
              transition: "all 0.3s ease",
            }}
          >
            Contacta Reservaciones
          </a>
        </div>
      </div>

      {/* ── FOOTER (matches blog/newsletter style) ── */}
      <footer style={{ backgroundColor: "#3a2a1a", textAlign: "center", padding: "36px 32px" }}>
        <p
          style={{
            margin: "0 0 20px 0",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "2.5px",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Cont&aacute;ctanos
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: 20 }}>
          <a
            href="mailto:reservations@nayararesorts.com"
            style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            reservations@nayararesorts.com
          </a>
          <a
            href="tel:+18448652002"
            style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            +1 (844) 865-2002 (US)
          </a>
          <a
            href="tel:+50624791600"
            style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            +506 2479-1600 (Costa Rica)
          </a>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginBottom: 24 }}>
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
              <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
              <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9a6.34 6.34 0 0 0-1-.05 6.34 6.34 0 1 0 6.34 6.34V9.37a8.16 8.16 0 0 0 4.77 1.52V7.44a4.85 4.85 0 0 1-.89-.75z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)", marginBottom: 20 }} />

        {/* Copyright */}
        <p style={{ margin: 0, fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.2)" }}>
          &copy; 2026 Nayara Resorts. All rights reserved.
        </p>
      </footer>

      {/* ── Mobile styles ── */}
      <style>{`
        @media (max-width: 700px) {
          .nhr-hero-wrap { height: 380px !important; }
          .nhr-hero-wrap h1 { font-size: 26px !important; }
        }
      `}</style>
    </div>
  );
}
