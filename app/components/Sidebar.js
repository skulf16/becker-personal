"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/#start", label: "Start" },
  { href: "/#unternehmen", label: "Für Unternehmen" },
  { href: "/#bewerber", label: "Für Bewerber" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mobile-header">
        <Link href="/#start" onClick={() => setOpen(false)}>
          <img src="/images/logo-2x.png" alt="Becker Personal + Perspektiven" />
        </Link>
        <button
          className="mobile-menu-btn"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      <aside className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebar-logo">
          <Link href="/#start" onClick={() => setOpen(false)}>
            <img src="/images/logo-2x.png" alt="Becker Personal + Perspektiven" />
          </Link>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="sidebar-section-title">Soziale Netzwerke:</p>
          <div className="sidebar-social">
            <a
              href="https://de-de.facebook.com/beckerpersonalperspektiven/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.xing.com/profile/Sabine_Becker52/cv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xing"
            >
              X
            </a>
            <a
              href="https://de.linkedin.com/in/sabine-becker-b7b980131"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        <div className="sidebar-cert">
          <img
            src="/images/cert-servicequalitaet.png"
            alt="ServiceQualität Deutschland"
          />
        </div>

        <div className="sidebar-legal">
          <Link href="/impressum" onClick={() => setOpen(false)}>
            Impressum
          </Link>
          <Link href="/datenschutz" onClick={() => setOpen(false)}>
            Datenschutz
          </Link>
        </div>
      </aside>
    </>
  );
}
