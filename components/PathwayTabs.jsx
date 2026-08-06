"use client";

import { useState } from "react";

const PATHWAYS = [
  {
    id: "ccu",
    number: "01",
    tag: "Industrial-Grade",
    name: "Carbon Capture & Utilisation",
    short: "CCU",
    subtitle: "Industrial Flue Gas",
    color: "var(--orange)",
    bg: "rgba(228,99,58,.1)",
    border: "rgba(228,99,58,.25)",
    icon: <path d="M3 21h18M5 21V7l5 4V7l5 4V3h4v18M9 21v-4M14 21v-3" />,
    body: [
      "For industries operating under mandatory emission limits and carbon pricing frameworks — including steel, cement, and power generation — CCU represents a critical compliance pathway, helping operators reduce verified emissions and avoid carbon tax penalties.",
      "TraceXero's CCU technology integrates directly into existing flue gas streams at the pre-chimney emission point. Flue gas is treated through our catalytic absorption and decomposition process under ambient conditions, breaking CO₂ into solid graphitic carbon and oxygen without requiring additional heat, pressure, or geological storage.",
      "This approach delivers verified emission reductions aligned with regulatory targets, while the captured graphitic carbon enters supply chains for electronics, construction, and water filtration.",
    ],
    outputs: [
      { title: "Cement" },
      { title: "Steel & Metals" },
      { title: "Power Generation" },
      { title: "Chemicals & Refineries" },
      { title: "Fertilizers " },
    ],
    stats: [
      { value: "Ambient", label: "Operating Conditions" },
      { value: "Pre-Chimney", label: "Stack Integration" },
      { value: "Verified", label: "Compliance Pathway" },
    ],
  },
  {
    id: "beccs",
    number: "02",
    tag: "Closed-Loop",
    name: "Bioenergy with Carbon Capture & Storage",
    short: "BECCS",
    subtitle: "Biomass Combustion",
    color: "var(--green)",
    bg: "rgba(95,143,62,.1)",
    border: "rgba(95,143,62,.25)",
    icon: <path d="M12 2L4 8v13h16V8l-8-6zM12 22V12M8 17h8" />,
    body: [
      "BECCS is the preferred solution for voluntary carbon credit markets, where organisations seek verified, high-integrity emission reductions beyond regulatory minimums. TraceXero's BECCS configuration uses biomass as a renewable fuel source, generating on-site energy while our capture system processes the resulting CO₂ output.",
      "This closed-loop approach achieves negative net emissions — a critical distinction in voluntary markets — and supports the generation of premium-grade carbon credits. Organisations gain energy self-sufficiency while contributing to verified global carbon removal and supporting Net-Zero targets at both an organisational and systemic level.",
    ],
    outputs: [
      { title: "Biomass", sub: "Renewable input" },
      { title: "On-Site Energy", sub: "Self-sufficiency" },
      { title: "CO₂ Capture", sub: "Continuous" },
      { title: "Premium Credits", sub: "Voluntary market" },
    ],
    stats: [
      { value: "Net −", label: "Carbon Balance" },
      { value: "100%", label: "Renewable Input" },
      { value: "Premium", label: "Carbon Credits" },
    ],
  },
  {
    id: "dac",
    number: "03",
    tag: "Atmospheric",
    name: "Direct Air Capture",
    short: "DAC",
    subtitle: "Large-Scale Atmosphere",
    color: "#3f7fbf",
    bg: "rgba(63,127,191,.1)",
    border: "rgba(63,127,191,.25)",
    icon: (
      <path d="M12 2v8M12 22v-4M2 12h8M22 12h-4M5 5l5 5M19 5l-5 5M5 19l5-5M19 19l-5-5" />
    ),
    body: [
      "TraceXero's large-scale DAC technology addresses atmospheric pollution comprehensively. Unlike conventional DAC systems that target CO₂ in isolation, our advanced air capture architecture simultaneously filters particulate matter (PM2.5/PM10), CO₂, and other airborne contaminants — processing large volumes of ambient air through a single integrated system.",
    ],
    outputs: [
      { title: "Clean Air", sub: "Returned to atmosphere" },
      { title: "Sequestered C", sub: "Solid graphitic carbon" },
      { title: "Captured PM", sub: "Filtered & contained" },
    ],
    stats: [
      { value: "Multi-Pollutant", label: "PM · CO₂ · VOC" },
      { value: "Integrated", label: "Single System" },
      { value: "Atmospheric", label: "Large-Scale Intake" },
    ],
  },
];

export default function PathwayTabs() {
  const [activeId, setActiveId] = useState("ccu");
  const active = PATHWAYS.find((p) => p.id === activeId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-start">
      {/* Tab buttons */}
      <div className="space-y-3">
        {PATHWAYS.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className="w-full text-left p-4 sm:p-5 rounded-[16px] transition-all duration-500 cursor-pointer"
              style={{
                background: isActive ? p.bg : "var(--card)",
                border: `1px solid ${isActive ? p.border : "var(--line-soft)"}`,
                boxShadow: isActive ? `0 14px 34px -22px ${p.border}` : "none",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: p.bg,
                    border: `1px solid ${p.border}`,
                    color: p.color,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[.14em] uppercase text-muted mb-0.5">
                    Pathway {p.number}
                  </div>
                  <div className="font-display text-[15px] text-ink truncate">
                    {p.name}
                  </div>
                  <div className="text-[11px] tracking-[.06em] uppercase text-muted mt-0.5">
                    {p.short} · {p.subtitle}
                  </div>
                </div>
              </div>
            </button>
          );
        })}

        <div className="paper-card p-5 mt-6">
          <div className="text-[10px] tracking-[.14em] uppercase text-muted mb-2">
            Common Endpoint
          </div>
          <div className="font-display text-base text-ink mb-2">
            Graphitic Carbon + O₂
          </div>
          <p className="text-[12px] leading-[1.7] text-ink-soft font-light">
            All three pathways converge on a single, scalable decomposition
            reaction — yielding solid carbon and clean oxygen.
          </p>
        </div>
      </div>

      {/* Panel */}
      <div className="paper-card p-6 sm:p-9">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <div
              className="text-[11px] tracking-[.14em] uppercase mb-2"
              style={{ color: active.color }}
            >
              Pathway {active.number} / {active.name}
            </div>
            <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] text-ink leading-tight">
              {active.name}{" "}
              <span
                className="text-[0.55em] align-middle"
                style={{ color: active.color }}
              >
                ({active.short})
              </span>
            </h3>
          </div>
          <span
            className="text-[11px] tracking-[.1em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: active.bg,
              border: `1px solid ${active.border}`,
              color: active.color,
            }}
          >
            {active.tag}
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-7">
          {active.outputs.map((o) => (
            <div
              key={o.title}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
              style={{
                background: active.bg,
                border: `1px solid ${active.border}`,
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{ background: active.color }}
              />
              <div>
                <div className="text-[12px] font-medium text-ink leading-tight">
                  {o.title}
                </div>
                {o.sub ? (
                  <div className="text-[10px] tracking-[.06em] uppercase text-muted mt-0.5">
                    {o.sub}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          {active.body.map((p, i) => (
            <p
              key={i}
              className="text-[14px] leading-[1.85] text-ink-soft font-light"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {active.stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl text-center"
              style={{
                background: active.bg,
                border: `1px solid ${active.border}`,
              }}
            >
              <div
                className="font-display text-[17px] sm:text-[18px]"
                style={{ color: active.color }}
              >
                {s.value}
              </div>
              <div className="text-[10px] tracking-[.1em] uppercase text-muted mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
