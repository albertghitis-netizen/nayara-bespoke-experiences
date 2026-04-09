/*
 * NAYARA HANGAROA — Super Sale Chile 2026 Newsletter
 * Standalone page — no nav, no footer from site
 * Styled to match the Hangaroa sale landing page palette
 * Fonts: Cormorant Garamond (display) + Jost (body) via Google Fonts
 */

const HANGAROA_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/HedJYjxBAxARVsRI.png";
const SYNXIS_URL = "https://be.synxis.com/?Hotel=35955&Chain=24447&adult=2&_gl=1*ia4136*_gcl_au*MTM0OTUwOTY2Ni4xNzcyNTAzNTA4LjE0OTEzNjI4OTEuMTc3NTA1OTgwMS4xNzc1MDU5ODAw*_ga*NjU3NjMxODEuMTc3MjUwMzUwOA..*_ga_9CBC965QFL*czE3NzU1NzM2OTQkbzgkZzAkdDE3NzU1NzM2OTQkajYwJGwwJGgw&_ga=2.254700237.456278856.1775573694-65763181.1772503508";

const PROGRAM_IMAGES = {
  dream: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/DGbtLJsWgsbGXsiX.png",
  discover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/bibrKLcvHQQXZzyE.webp",
  full: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/oryKxaJgnhQNmATo.webp",
};

const PROGRAMS = [
  {
    name: "Dream",
    image: PROGRAM_IMAGES.dream,
    items: [
      "Alojamiento y desayuno.",
      "Traslados desde y hacia el Aeropuerto Mataveri en vuelos regulares.",
      "Collar de bienvenida.",
      "Minibar de bienvenida.",
      "Gimnasio, acceso a piscina y wifi.",
    ],
    note: "No incluye entradas al Parque Nacional Rapa Nui.",
  },
  {
    name: "Discover",
    image: PROGRAM_IMAGES.discover,
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
    name: "Full Experience",
    image: PROGRAM_IMAGES.full,
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

// Landing page URL (where "Learn More" links to — with lead capture)
const LANDING_PAGE_URL = "/hangaroa-super-sale";

export default function HangaroaNewsletter() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#FFFFFF" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* ── LOGO HEADER ── */}
      <div style={{ backgroundColor: "#FBF8F3", textAlign: "center", padding: "20px 20px 16px" }}>
        <img
          src={HANGAROA_LOGO}
          alt="Nayara Hangaroa"
          style={{ maxWidth: 180, height: "auto" }}
        />
      </div>

      {/* ── HERO IMAGE ── */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", backgroundColor: "#000" }}>
        <img
          src={PROGRAM_IMAGES.full}
          alt="Nayara Hangaroa — Easter Island"
          style={{ width: "100%", height: "auto", display: "block", maxHeight: 500, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
            padding: "40px 20px 24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 38,
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.2,
              margin: "0 0 8px 0",
            }}
          >
            Nayara Hangaroa — Super Sale Chile 2026
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
            Duerme frente al Pacífico
          </h2>
          <p
            style={{
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#333333",
              lineHeight: 1.75,
              margin: "0 0 14px 0",
            }}
          >
            Descubre la magia de Rapa Nui en uno de los destinos más exclusivos del Pacífico Sur.
            Nayara Hangaroa te invita a desconectarte, conectar con la cultura ancestral y vivir
            experiencias auténticas en un entorno de naturaleza, misterio y bienestar — con
            condiciones especiales pensadas para ti.
          </p>
          <p
            style={{
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#333333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            <strong style={{ color: "#231F20" }}>Reserva entre el 11 y el 30 de abril</strong> y
            aprovecha{" "}
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
            fontFamily: "'Jost', Helvetica, Arial, sans-serif",
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
        <div
          style={{
            fontFamily: "'Jost', Helvetica, Arial, sans-serif",
            fontSize: 13,
            fontWeight: 300,
            color: "rgba(255,255,255,0.8)",
            marginTop: 8,
            letterSpacing: "0.05em",
          }}
        >
          *Sobre tarifas internacionales. Válido para residentes en Chile.
        </div>
      </div>

      {/* ── BOOKING PILL ── */}
      <div style={{ backgroundColor: "#F5F0E8", textAlign: "center", padding: "24px 20px 8px" }}>
        <div style={{ display: "inline-block", border: "1px solid #AD8F61", padding: "12px 24px" }}>
          <span
            style={{
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
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
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 12, justifyContent: "center", alignItems: "center" }}>
          <a
            href={SYNXIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "16px 44px",
              backgroundColor: "#AD8F61",
              color: "#FFFFFF",
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              border: "2px solid #AD8F61",
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
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              background: "transparent",
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
        <div
          style={{
            display: "flex",
            gap: 12,
            maxWidth: 960,
            margin: "0 auto",
            flexWrap: "wrap" as const,
            justifyContent: "center",
          }}
        >
          {PROGRAMS.map((prog) => (
            <div key={prog.name} style={{ flex: "1 1 280px", maxWidth: 320 }}>
              <div
                style={{
                  position: "relative",
                  height: 380,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <img
                  src={prog.image}
                  alt={prog.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
                <div style={{ position: "absolute", top: 24, left: 0, right: 0, textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Jost', Helvetica, Arial, sans-serif",
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
                      fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase" as const,
                      color: "#FFFFFF",
                      marginTop: 4,
                    }}
                  >
                    {prog.name}
                  </div>
                  <div style={{ width: 40, height: 2, background: "#FFFFFF", margin: "12px auto 0" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Details */}
        <div style={{ maxWidth: 700, margin: "24px auto 0" }}>
          {PROGRAMS.map((prog) => (
            <div
              key={prog.name}
              style={{
                background: "#FFFFFF",
                marginTop: 24,
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "#231F20",
                  margin: "0 0 18px 0",
                }}
              >
                Programa {prog.name}
              </h3>
              <div style={{ textAlign: "left" }}>
                <ul
                  style={{
                    fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                    fontSize: 14,
                    color: "#333333",
                    lineHeight: 1.8,
                    margin: 0,
                    paddingLeft: 20,
                  }}
                >
                  {prog.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                  {prog.note && (
                    <li style={{ color: "#999" }}>{prog.note}</li>
                  )}
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
                    fontFamily: "'Jost', Helvetica, Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    textDecoration: "none",
                    border: "2px solid #AD8F61",
                  }}
                >
                  Reserva Directo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LEARN MORE CTA ── */}
      <div style={{ backgroundColor: "#F5F0E8", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ width: 60, height: 1, backgroundColor: "#AD8F61", margin: "0 auto 24px" }} />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#AD8F61",
              lineHeight: 1.35,
              margin: "0 0 16px 0",
            }}
          >
            Conoce más sobre nuestras ofertas y novedades exclusivas
          </h2>
          <p
            style={{
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "#666666",
              lineHeight: 1.7,
              margin: "0 0 24px 0",
            }}
          >
            Visita nuestra página de ofertas para más detalles, condiciones completas y para
            suscribirte a nuestras novedades.
          </p>
          <a
            href={LANDING_PAGE_URL}
            style={{
              display: "inline-block",
              padding: "14px 36px",
              backgroundColor: "#AD8F61",
              color: "#FFFFFF",
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              border: "2px solid #AD8F61",
            }}
          >
            Ver Ofertas y Condiciones
          </a>
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
        <p
          style={{
            fontFamily: "'Jost', Helvetica, Arial, sans-serif",
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 24px 0",
          }}
        >
          Vive la magia de Isla de Pascua con Nayara Hangaroa
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 12, justifyContent: "center", alignItems: "center" }}>
          <a
            href={SYNXIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              backgroundColor: "#FFFFFF",
              color: "#AD8F61",
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
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
              fontFamily: "'Jost', Helvetica, Arial, sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              background: "transparent",
            }}
          >
            Contacta Reservaciones
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ backgroundColor: "#231F20", padding: "36px 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Jost', Helvetica, Arial, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            margin: "0 0 10px 0",
          }}
        >
          <a
            href="https://www.nayarahangaroa.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#AD8F61", textDecoration: "none" }}
          >
            nayarahangaroa.com
          </a>
        </p>
        <p
          style={{
            fontFamily: "'Jost', Helvetica, Arial, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Nayara Hangaroa · Isla de Pascua, Chile
          <br />
          <a
            href="mailto:reservations@nayararesorts.com"
            style={{ color: "#AD8F61", textDecoration: "none" }}
          >
            reservations@nayararesorts.com
          </a>
          <br />
          <br />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
            Si no deseas recibir más correos, puedes{" "}
            <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              darte de baja aquí
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
