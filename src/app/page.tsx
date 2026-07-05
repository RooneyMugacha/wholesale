"use client";

import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { id: "electronics", label: "Electronics & Tech",    count: "12,400+", accent: "#3b82f6" },
  { id: "fmcg",        label: "FMCG & Grocery",        count: "8,900+",  accent: "#4ade80" },
  { id: "building",    label: "Building Materials",    count: "6,200+",  accent: "#f97316" },
  { id: "furniture",   label: "Furniture & Décor",      count: "4,500+",  accent: "#a855f7" },
  { id: "clothing",    label: "Clothing & Apparel",    count: "9,100+",  accent: "#06b6d4" },
  { id: "industrial",  label: "Industrial & Tools",    count: "5,300+",  accent: "#eab308" },
  { id: "health",      label: "Health & Pharma",       count: "3,800+",  accent: "#ef4444" },
  { id: "agriculture", label: "Agriculture & Seeds",   count: "2,600+",  accent: "#84cc16" },
];

const stats = [
  { value: "50,000+", label: "Products Listed" },
  { value: "3,200+",  label: "Verified Suppliers" },
  { value: "120+",    label: "Countries Served" },
  { value: "48 hrs",  label: "Avg. Lead Time" },
];

const features = [
  {
    title: "Direct-from-Supplier Logistics",
    body: "Cut out the middlemen with direct factory pricing and real-time lead-time tracking. Regional distribution hubs keep your goods in optimal condition until delivery.",
    stat1: "-22%", label1: "Avg. Costs",
    stat2: "48 hrs", label2: "Fast Ship",
  },
  {
    title: "ISO & Trade Certified",
    body: "Every supplier is verified against ISO standards and industry compliance benchmarks. Trade with confidence knowing every product meets regulatory requirements.",
    stat1: "3,200+", label1: "Suppliers",
    stat2: "100%", label2: "Verified",
  },
  {
    title: "Tiered Volume Pricing",
    body: "Our pricing engine automatically unlocks better rates as your order size grows. Five distinct tiers mean you always get the best available wholesale price.",
    stat1: "Up to 35%", label1: "Savings",
    stat2: "5 Tiers", label2: "Pricing",
  },
];

const testimonials = [
  {
    quote: "TradeHub cut our procurement costs by 28% in the first quarter alone. The supplier verification system is a game-changer.",
    name: "Sarah K.",
    role: "Head of Procurement, RetailCo",
    avatar: "SK",
  },
  {
    quote: "We sources everything — electronics to packaging — through one platform. The tiered pricing is transparent and genuinely competitive.",
    name: "James O.",
    role: "Supply Chain Director, BuildersPro",
    avatar: "JO",
  },
  {
    quote: "The direct-from-supplier model means we get fresher FMCG stock with fewer handling steps. Our margins have never been better.",
    name: "Amina R.",
    role: "Co-founder, FreshMart Group",
    avatar: "AR",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(10, 26, 18, 0.96)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(74,222,128,0.12)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 32px",
        display: "flex", alignItems: "center",
        height: 68, gap: 48,
      }}>
        {/* Logo */}
        <a id="logo-link" href="#" style={{
          display: "flex", alignItems: "center", gap: 10,
          textDecoration: "none", flexShrink: 0,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #4ade80, #10b981)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}></div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#f0fdf4", letterSpacing: "-0.3px", lineHeight: 1.1 }}>
              TradeHub
            </div>
            <div style={{ fontSize: 9, color: "#4ade80", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
              Wholesale
            </div>
          </div>
        </a>

        {/* Nav Links */}
        <nav style={{ display: "flex", gap: 4, flex: 1 }}>
          {["Market", "Suppliers", "Categories", "Pricing", "Sustainability"].map((item) => (
            <a key={item} href="#" id={`nav-${item.toLowerCase()}`} style={{
              padding: "8px 14px", borderRadius: 8,
              fontSize: 14, fontWeight: 500,
              color: item === "Market" ? "#4ade80" : "rgba(240,253,244,0.6)",
              textDecoration: "none",
              transition: "color 200ms, background 200ms",
              background: item === "Market" ? "rgba(74,222,128,0.08)" : "transparent",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#f0fdf4"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = item === "Market" ? "#4ade80" : "rgba(240,253,244,0.6)"; }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ position: "relative" }}>
            <input
              id="site-search"
              type="search"
              placeholder="Search products..."
              style={{
                padding: "8px 14px 8px 14px",
                borderRadius: 8,
                border: "1px solid rgba(74,222,128,0.2)",
                background: "rgba(255,255,255,0.05)",
                color: "#f0fdf4",
                fontSize: 13,
                outline: "none",
                width: 200,
              }}
            />
          </div>
          <button id="login-btn" style={{
            padding: "8px 18px", borderRadius: 8,
            background: "transparent",
            border: "1px solid rgba(74,222,128,0.3)",
            color: "#a7f3d0", fontWeight: 600, fontSize: 14,
            cursor: "pointer",
          }}>Log in</button>
          <button id="signup-btn" style={{
            padding: "9px 20px", borderRadius: 8,
            background: "linear-gradient(135deg, #4ade80, #22c55e)",
            border: "none", color: "#052e16",
            fontWeight: 700, fontSize: 14, cursor: "pointer",
            boxShadow: "0 2px 12px rgba(74,222,128,0.3)",
            transition: "transform 150ms, box-shadow 150ms",
          }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = "translateY(-1px)";
              b.style.boxShadow = "0 6px 20px rgba(74,222,128,0.45)";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = "";
              b.style.boxShadow = "0 2px 12px rgba(74,222,128,0.3)";
            }}
          >
            Open Trade Account
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #051a0d 0%, #0a2518 40%, #0d3322 100%)",
      padding: "100px 32px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative mesh */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74,222,128,0.06) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(16,185,129,0.05) 0%, transparent 40%)`,
      }} />
      {/* Grid lines overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left column */}
          <div>
            <h1 style={{
              fontSize: 56, fontWeight: 900,
              color: "#f0fdf4",
              lineHeight: 1.1, letterSpacing: "-1.5px",
              marginBottom: 24,
            }}>
              Every wholesale<br />
              category.{" "}
              <span style={{
                background: "linear-gradient(90deg, #4ade80, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>One platform.</span>
            </h1>

            <p style={{
              fontSize: 18, color: "rgba(167,243,208,0.75)",
              lineHeight: 1.7, marginBottom: 40, maxWidth: 480,
            }}>
              Connect with 3,200+ verified suppliers across electronics, FMCG,
              building materials, furniture, apparel and more — at trade prices,
              with direct-to-site delivery.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <button id="hero-create-btn" style={{
                padding: "15px 30px", borderRadius: 10,
                background: "linear-gradient(135deg, #4ade80, #22c55e)",
                border: "none", color: "#052e16",
                fontWeight: 800, fontSize: 15, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 4px 24px rgba(74,222,128,0.35)",
                transition: "all 200ms",
              }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "translateY(-2px)";
                  b.style.boxShadow = "0 8px 32px rgba(74,222,128,0.5)";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "";
                  b.style.boxShadow = "0 4px 24px rgba(74,222,128,0.35)";
                }}
              >
                Create Business Account
              </button>
              <button id="hero-prices-btn" style={{
                padding: "15px 30px", borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "#f0fdf4", fontWeight: 700, fontSize: 15, cursor: "pointer",
                transition: "all 200ms",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; }}
              >
                View Price List
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["ISO Certified", "Secure Payments", "120+ Countries", "24/7 Support"].map(badge => (
                <div key={badge} style={{ fontSize: 13, color: "rgba(167,243,208,0.6)", fontWeight: 500 }}>{badge}</div>
              ))}
            </div>
          </div>

          {/* Right column — stats cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(74,222,128,0.12)",
                borderRadius: 16, padding: "28px 24px",
                backdropFilter: "blur(8px)",
                transition: "border-color 250ms, transform 250ms",
              }}
                onMouseEnter={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.borderColor = "rgba(74,222,128,0.35)";
                  d.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.borderColor = "rgba(74,222,128,0.12)";
                  d.style.transform = "";
                }}
              >
                <div style={{
                  fontSize: 36, fontWeight: 900,
                  color: "#4ade80", letterSpacing: "-1px",
                  lineHeight: 1, marginBottom: 8,
                }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(167,243,208,0.55)", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="categories-section" style={{ background: "#f8faf9", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#10b981",
              letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 10,
            }}>Product Categories</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#052e16", letterSpacing: "-0.8px", lineHeight: 1.2 }}>
              Everything your business needs
            </h2>
          </div>
          <a href="#" id="all-categories-link" style={{
            fontSize: 14, fontWeight: 700, color: "#10b981",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
          }}>Browse all categories &rarr;</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-${cat.id}`}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === cat.id ? "#0d2b1f" : "#ffffff",
                border: `1.5px solid ${hovered === cat.id ? cat.accent : "transparent"}`,
                borderRadius: 14,
                padding: "28px 24px",
                cursor: "pointer", textAlign: "left",
                boxShadow: hovered === cat.id
                  ? `0 8px 32px ${cat.accent}22`
                  : "0 1px 4px rgba(0,0,0,0.06)",
                transition: "all 250ms",
                transform: hovered === cat.id ? "translateY(-4px)" : "none",
              }}
            >
              <div style={{
                fontSize: 15, fontWeight: 700, lineHeight: 1.3,
                color: hovered === cat.id ? "#f0fdf4" : "#052e16",
                marginBottom: 6,
              }}>{cat.label}</div>
              <div style={{
                fontSize: 12, fontWeight: 600,
                color: hovered === cat.id ? cat.accent : "#6b7280",
              }}>{cat.count} SKUs</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section style={{ background: "#0a1a12", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, color: "#4ade80",
            letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 10,
          }}>Why TradeHub</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#f0fdf4", letterSpacing: "-0.8px" }}>
            Built for serious procurement
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(74,222,128,0.1)",
              borderRadius: 16, padding: "32px 28px",
              transition: "border-color 250ms, background 250ms",
            }}
              onMouseEnter={e => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = "rgba(74,222,128,0.3)";
                d.style.background = "rgba(74,222,128,0.04)";
              }}
              onMouseLeave={e => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = "rgba(74,222,128,0.1)";
                d.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f0fdf4", marginBottom: 12, letterSpacing: "-0.3px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(167,243,208,0.6)", lineHeight: 1.75, marginBottom: 24 }}>
                {f.body}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[{ v: f.stat1, l: f.label1 }, { v: f.stat2, l: f.label2 }].map(s => (
                  <div key={s.l} style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 8, padding: "12px 14px",
                  }}>
                    <div style={{ fontSize: 18, fontWeight: 900, color: "#4ade80", letterSpacing: "-0.5px" }}>{s.v}</div>
                    <div style={{ fontSize: 11, color: "rgba(167,243,208,0.45)", fontWeight: 600, marginTop: 2, letterSpacing: "0.3px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Apply for a trade account", body: "Complete a quick business verification. Most accounts are approved within 2 hours." },
    { n: "02", title: "Browse & compare suppliers", body: "Filter by category, MOQ, lead time, and certification. Read verified buyer reviews." },
    { n: "03", title: "Place your wholesale order", body: "Tiered pricing applies automatically. Pay via bank transfer, card, or credit line." },
    { n: "04", title: "Track & receive delivery", body: "Real-time logistics tracking from supplier to your warehouse or project site." },
  ];

  return (
    <section style={{ background: "#ffffff", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#10b981", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 10 }}>
              How it works
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#052e16", letterSpacing: "-0.8px" }}>
              Start buying wholesale in minutes
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
          {steps.map((step, i) => (
            <div key={step.n} style={{ padding: "0 24px", textAlign: "center" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "linear-gradient(135deg, #4ade80, #10b981)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 900, color: "#052e16",
                margin: "0 auto 20px", position: "relative", zIndex: 1,
                boxShadow: "0 0 0 6px #ffffff, 0 0 0 7px rgba(74,222,128,0.2)",
              }}>{step.n}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#052e16", marginBottom: 10, lineHeight: 1.35 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ background: "#f8faf9", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#10b981", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 10 }}>
            Testimonials
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#052e16", letterSpacing: "-0.8px" }}>
            Trusted by procurement teams worldwide
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 16, padding: "28px 24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              transition: "box-shadow 250ms, transform 250ms",
            }}
              onMouseEnter={e => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                d.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                d.style.transform = "";
              }}
            >
              <div style={{ color: "#fbbf24", fontSize: 14, letterSpacing: 2, marginBottom: 14 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, #4ade80, #10b981)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#052e16",
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section style={{ background: "#0a1a12", padding: "80px 32px" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", textAlign: "center",
        background: "linear-gradient(135deg, rgba(74,222,128,0.08) 0%, rgba(16,185,129,0.04) 100%)",
        border: "1px solid rgba(74,222,128,0.2)",
        borderRadius: 24, padding: "64px 48px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 240, height: 240, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.08), transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 180, height: 180, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ fontSize: 13, fontWeight: 700, color: "#4ade80", letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 16 }}>
          Get started today — free
        </div>
        <h2 style={{ fontSize: 42, fontWeight: 900, color: "#f0fdf4", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 18 }}>
          Ready to start buying wholesale?
        </h2>
        <p style={{ fontSize: 17, color: "rgba(167,243,208,0.65)", lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
          Apply for a free business account and unlock exclusive trade pricing
          across all 50,000+ products within minutes.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button id="cta-apply-btn" style={{
            padding: "15px 34px", borderRadius: 10,
            background: "linear-gradient(135deg, #4ade80, #22c55e)",
            border: "none", color: "#052e16", fontWeight: 800, fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 4px 24px rgba(74,222,128,0.4)",
            transition: "all 200ms",
          }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 8px 32px rgba(74,222,128,0.55)"; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = ""; b.style.boxShadow = "0 4px 24px rgba(74,222,128,0.4)"; }}
          >
            Apply for Free
          </button>
          <button id="cta-demo-btn" style={{
            padding: "15px 34px", borderRadius: 10,
            background: "transparent",
            border: "1.5px solid rgba(74,222,128,0.3)",
            color: "#a7f3d0", fontWeight: 700, fontSize: 15, cursor: "pointer",
            transition: "all 200ms",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(74,222,128,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(74,222,128,0.3)"; }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { heading: "Platform", links: ["Marketplace", "Suppliers", "Pricing", "Enterprise", "API Docs"] },
    { heading: "Categories", links: ["Electronics", "FMCG & Grocery", "Building Materials", "Furniture", "Industrial"] },
    { heading: "Company",  links: ["About", "Blog", "Careers", "Press", "Contact"] },
    { heading: "Legal",    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"] },
  ];

  return (
    <footer style={{ background: "#051a0d", borderTop: "1px solid rgba(74,222,128,0.1)", padding: "56px 32px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg, #4ade80, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#f0fdf4" }}>TradeHub</div>
                <div style={{ fontSize: 9, color: "#4ade80", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Wholesale</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(167,243,208,0.45)", lineHeight: 1.75, maxWidth: 280 }}>
              The B2B wholesale marketplace connecting businesses with verified suppliers across every product category.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#4ade80", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 16 }}>
                {col.heading}
              </div>
              {col.links.map(link => (
                <a key={link} href="#" style={{
                  display: "block", fontSize: 13, color: "rgba(167,243,208,0.45)",
                  textDecoration: "none", marginBottom: 10, fontWeight: 500,
                  transition: "color 150ms",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "#a7f3d0"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(167,243,208,0.45)"; }}
                >{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(74,222,128,0.08)",
          padding: "24px 0 0 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 12, color: "rgba(167,243,208,0.3)" }}>
            © 2026 TradeHub Wholesale Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: "rgba(167,243,208,0.3)" }}>
            ISO 9001 Certified &middot; GDPR Compliant &middot; SOC 2 Type II
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Categories />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}