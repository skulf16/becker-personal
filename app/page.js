import Link from "next/link";

const branchen = [
  {
    title: "IT / Informatik",
    berufe: [
      "SAP-Berater / SAP-Entwickler",
      "IT-Projektleiter / Berater",
      "Software-Architekt",
      "Anwendungs- und App-Entwickler",
      "Systemadministrator",
      "IT-Sicherheitsexperte",
      "Fachinformatiker für Systemintegration",
      "Web-Developer",
    ],
  },
  {
    title: "Elektrotechnik / Elektronik",
    berufe: [
      "Bachelor / Master Elektrotechnik",
      "Elektrotechnikermeister",
      "Elektroniker für Energie- und Gebäudetechnik",
      "Elektroniker für Automatisierungstechnik",
      "Informationstechnikermeister",
      "Mechatroniker",
    ],
  },
  {
    title: "Immobilienwirtschaft",
    berufe: [
      "Bachelor / Master Immobilienwirtschaft",
      "Facility-Manager",
      "Immobilienfachwirt",
      "Hausverwalter/in",
      "Immobilienmakler/in",
      "Immobilienkaufmann",
    ],
  },
  {
    title: "Steuern / Buchhaltung",
    berufe: [
      "Steuerberater",
      "Bilanzbuchhalter (auch International)",
      "Finanzbuchhalter",
      "Steuerfachwirt / Steuerfachangestellter",
      "Lohn- und Gehaltsbuchhalter",
      "Wirtschaftsprüfer",
      "Controller",
    ],
  },
  {
    title: "Bau / Architektur / Vermessung",
    berufe: [
      "Architekt",
      "Bau-Ingenieur Hochbau / Tief- und Straßenbau",
      "Meister im Handwerk (Elektro, Sanitär, Dach u. v. m.)",
      "Bauzeichner",
      "Vermessungstechniker",
      "Bautechniker",
    ],
  },
  {
    title: "Gesundheit",
    berufe: [
      "Apotheker",
      "Arzt (fachübergreifend)",
      "Psychologe",
      "Medizinischer Fachangestellter",
      "Zahntechniker",
      "Physiotherapeut",
    ],
  },
  {
    title: "Recht",
    berufe: [
      "Volljurist",
      "Rechtsanwalt (fachübergreifend)",
      "Notar",
      "Rechtsfachwirt",
      "Rechtsanwalts- und Notarfachangestellter",
      "Bachelor / Master Wirtschaftsrecht",
    ],
  },
  {
    title: "Wirtschaft / Politik",
    berufe: [
      "Betriebswirt (allgemein und spezialisiert)",
      "Controller",
      "Diplom-Kaufmann",
      "Wirtschaftsingenieur",
      "Politikwissenschaftler",
    ],
  },
  {
    title: "Kaufmännische Berufe",
    berufe: [
      "Kaufmann für Büromanagement",
      "Industriekaufmann",
      "Bankkaufmann",
      "Kaufmann im Groß- und Außenhandel",
      "Personaldienstleistungskaufmann",
      "Kaufmann für Marketingkommunikation",
      "Eventmanager",
    ],
  },
  {
    title: "Weiteres",
    berufe: [
      "Dienstleistungen",
      "Hotellerie / Gastronomie",
      "Wissenschaft, z. B. Biologen",
      "Spedition / Logistik",
    ],
  },
];

const partner = [
  { src: "/images/partner-wichert.png", alt: "Wichert" },
  { src: "/images/partner-logo2.png", alt: "Partner" },
  { src: "/images/partner-eplinius.png", alt: "Eplinius" },
  { src: "/images/partner-lvm.png", alt: "LVM" },
  { src: "/images/partner-lcm.png", alt: "LCM" },
  { src: "/images/partner-schwericke.png", alt: "Schwericke" },
];

const testimonials = [
  {
    quote:
      "„Ich war erst etwas schüchtern, ob meine Qualifikationen ausreichen. Frau Becker hat mir Mut gemacht und Fähigkeiten aus mir rausgeholt, von denen ich vergessen hatte, dass die da sind. Jetzt habe ich einen tollen Job.“",
    author: "B. Hannen, Buchhalterin",
  },
  {
    quote:
      "„Immer wieder, gerne. Eine runde Sache, habe drei fähige Leute auf einen Schlag vermittelt bekommen und ein Maßnahmenpaket zur Weiterqualifizierung.“",
    author: "Niederlassungsleiter einer Baufirma",
  },
  {
    quote:
      "„Angerufen, kurz erzählt, dann kamen schon erste Vorschläge – ich wusste sofort, ich kann den ganzen Bewerber-Ablauf in Frau Beckers Hände abgeben.“",
    author: "CFO eines Energieversorgungsunternehmens",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="start">
        <div className="hero-inner">
          <div className="hero-stats">
            <div className="stat-circle coral">
              <span className="stat-value">20</span>
              <span className="stat-label">Jahre Berufserfahrung</span>
            </div>
            <div className="stat-circle teal">
              <span className="stat-value">95%</span>
              <span className="stat-label">Bleibequote</span>
            </div>
            <div className="stat-circle sand">
              <span className="stat-prefix">über</span>
              <span className="stat-value">8.590</span>
              <span className="stat-label">Netzwerkkontakte</span>
            </div>
          </div>

          <h1>Wir geben Ihnen die passende Antwort auf Ihre Personalfrage.</h1>

          <p>
            Gerne sind wir als Spezialisten für die uns beauftragenden
            Unternehmen/Kanzleien, unsere Bewerberinnen/Bewerber m/w/d und
            Geschäftspartner für die passende Personalstrategie im Unternehmen,
            die optimale Besetzung der ausgeschriebenen Stellen und zukünftigen
            beruflichen Perspektiven tätig.
          </p>
          <p>
            Durch professionelle Videokonferenzsysteme und Telefoninterviews
            erzielen wir mit Ihnen optimale Ergebnisse.
          </p>
          <p>
            <strong>
              Sie haben Fragen? Gerne steht Ihnen Sabine Becker unter{" "}
              <a href="tel:+491721617190" style={{ color: "#fff", textDecoration: "underline" }}>
                0172 161 71 90
              </a>{" "}
              zur Verfügung.
            </strong>
          </p>
        </div>
      </section>

      {/* Über uns */}
      <section className="section" id="ueber-uns">
        <div className="section-inner">
          <p className="section-subtitle">Über uns</p>
          <h2 className="section-title">
            Individuelle Lösungen für zukunftsfähige Entwicklungen
          </h2>
          <div className="about-grid">
            <figure className="about-portrait">
              <img
                src="/images/portrait-sabine-becker.jpg"
                alt="Sabine Becker, Inhaberin von Becker Personal + Perspektiven"
              />
              <figcaption>
                Sabine Becker
                <span>Inhaberin</span>
              </figcaption>
            </figure>
            <div>
              <p>
                Unser Unternehmen Becker Personal + Perspektiven unterstützt
                Unternehmen seit fast 18 Jahren durch Personalberatung in der
                Region Berlin, Potsdam und dem Land Brandenburg. Die Entwicklung
                zukunftsfähiger Personalstrategien zur Optimierung der
                Wirtschaftlichkeit und Wettbewerbsfähigkeit gehören neben der
                Personalvermittlung und dem Headhunting zu unserem Portfolio.
              </p>
              <p style={{ marginTop: 16 }}>
                Sabine Becker ist seit 2000 in der Region Berlin/Brandenburg
                tätig und hat sich mit ihrem Unternehmen als hochspezialisierte
                Personalberatung in der Region etabliert.
              </p>
              <p style={{ marginTop: 24 }}>
                <a className="btn" href="#kontakt">
                  Erfahren Sie, wofür unser Unternehmen steht
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Unternehmen / Bewerber */}
      <section className="section section-mint" id="unternehmen">
        <div className="section-inner">
          <div className="cta-grid">
            <div className="cta-card">
              <h3>Sie suchen Fach- und Führungskräfte?</h3>
              <p>
                Wir unterstützen Sie von A – Z bei der Suche nach qualifiziertem
                Personal. Entdecken Sie jetzt unseren Service für Unternehmen!
              </p>
              <a className="btn btn-outline" href="#kontakt">
                Setzen Sie sich mit uns in Verbindung
              </a>
            </div>
            <div className="cta-card dark" id="bewerber">
              <h3>Sie möchten sich beruflich verändern?</h3>
              <p>
                Ob Sie auf der Suche nach neuen Herausforderungen sind oder sich
                beruflich weiterentwickeln wollen – wir bieten eine Vielzahl an
                spannenden Perspektiven!
              </p>
              <a className="btn btn-outline" href="#kontakt">
                Setzen Sie sich mit uns in Verbindung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section className="section branchen-section" id="branchen">
        <div className="section-inner section-inner-wide">
          <p className="section-subtitle">
            Wir sind Spezialisten in diesen Branchen
          </p>
          <h2 className="section-title">Fachwissen durch Spezialisierung</h2>
          <p className="section-text">
            Wir bieten Ihnen eine besonders hohe Spezialisierung in
            unterschiedlichsten Tätigkeitsfeldern und Kerngebieten. Dabei
            agieren wir diversitätsinklusiv – alle Personen- und
            Berufsbezeichnungen beziehen sich immer auf das männliche, weibliche
            und diverse Geschlecht.
          </p>

          <div className="branchen-grid">
            {branchen.map((b) => (
              <div className="branche" key={b.title}>
                <details>
                  <summary>{b.title}</summary>
                  <ul>
                    {b.berufe.map((beruf) => (
                      <li key={beruf}>{beruf}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>

          <p className="section-center" style={{ marginTop: 40 }}>
            <strong style={{ color: "var(--teal-dark)" }}>
              Ist Ihre Branche nicht dabei?
            </strong>
            <br />
            Fragen Sie uns gern nach unseren erweiterten Dienstleistungen.
          </p>
          <p className="section-center" style={{ marginTop: 16 }}>
            <a className="btn" href="#kontakt">
              Setzen Sie sich mit uns in Verbindung
            </a>
          </p>
        </div>
      </section>

      {/* Partner */}
      <section className="section section-mint" id="netzwerk">
        <div className="section-inner">
          <h2 className="section-title">Unser starkes Netzwerk</h2>
          <div className="partner-grid">
            {partner.map((p) => (
              <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="referenzen">
        <div className="section-inner">
          <h2 className="section-title">Das sagen unsere Kunden</h2>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div className="testimonial" key={t.author}>
                <blockquote>{t.quote}</blockquote>
                <cite>{t.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="section" id="kontakt">
        <div className="section-inner">
          <div className="kontakt-box">
            <h2>Setzen Sie sich mit uns in Verbindung</h2>
            <p>
              Becker Personal + Perspektiven
              <br />
              Sabine Becker
            </p>
            <p className="kontakt-details">
              Am Luftschiffhafen 1, 14471 Potsdam
              <br />
              Telefon: <a href="tel:+4933190736220">+49 331 907 362 20</a>
              <br />
              Mobil: <a href="tel:+491721617190">0172 161 71 90</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@becker-personal-perspektiven.de">
                info@becker-personal-perspektiven.de
              </a>
            </p>
            <a className="btn btn-outline" href="mailto:info@becker-personal-perspektiven.de">
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Becker Personal + Perspektiven ·{" "}
          <Link href="/impressum">Impressum</Link>·
          <Link href="/datenschutz">Datenschutz</Link>
        </p>
      </footer>
    </>
  );
}
