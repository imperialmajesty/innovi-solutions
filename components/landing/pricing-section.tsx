"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Website Design & Build",
    price: "from R25,000",
    unit: "per project",
    description:
      "A custom marketing site or web app engineered around your brand and your funnel — fast, accessible, and built to convert. Launched on infrastructure we set up and own.",
  },
  {
    name: "Maintenance & Support",
    price: "from R2,500",
    unit: "per month",
    description:
      "Keep what we ship — or what you already run — healthy: monitoring, updates, security patching, backups, and a real person to call. Cancel anytime.",
  },
  {
    name: "Automation Systems",
    price: "from R18,000",
    unit: "per project",
    description:
      "Replace repetitive manual work with reliable, observable automation — data moved, tasks triggered, and handoffs removed across the tools you already use.",
  },
  {
    name: "AI Agents",
    price: "from R35,000",
    unit: "per project + usage",
    description:
      "Purpose-built agents that handle queries, read documents, and monitor systems — escalating to a human only when it matters. Grounded in your data, governed by your rules.",
  },
  {
    name: "Information Systems & Problem Solving",
    price: "from R40,000",
    unit: "per engagement",
    description:
      "Bring the tangle — spreadsheets held together with email, processes no one fully owns. We diagnose the real problem, design the system that resolves it, and build it end to end.",
  },
  {
    name: "Workflow Design",
    price: "from R12,000",
    unit: "per engagement",
    description:
      "Before a line of code: we map how work actually flows through your business, find the friction, and design the leaner process — the blueprint every good system starts from.",
  },
  {
    name: "Database Engineering",
    price: "from R22,000",
    unit: "per project",
    description:
      "Schemas, migrations, and data models built for integrity and scale, plus pipelines and warehousing that turn scattered sources into one trusted layer.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Services &amp; Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Scoped Work,
            <br />
            <span className="text-stroke">Fixed Quotes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every engagement is scoped in a discovery session and quoted up front — no open meters,
            no surprises. Starting prices below are indicative (ZAR; USD/EUR on request); your final
            quote is priced against your actual scope. Larger builds can be phased and billed by
            milestone.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {services.map((service, idx) => (
            <div key={service.name} className="bg-background p-8 lg:p-10 flex flex-col group">
              <span className="font-mono text-xs text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mt-3 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              <div className="flex items-baseline gap-2 pt-6 border-t border-foreground/10">
                <span className="font-display text-2xl text-foreground">{service.price}</span>
                <span className="text-sm text-muted-foreground">· {service.unit}</span>
              </div>
            </div>
          ))}

          {/* Closing CTA card */}
          <div className="bg-foreground text-background p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-background/50 uppercase tracking-widest">
                Not sure which?
              </span>
              <h3 className="font-display text-2xl lg:text-3xl mt-3 mb-4">
                Book a discovery call
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                We&apos;ll tell you the shortest path and roughly what it costs before you commit to
                anything.
              </p>
            </div>
            <a
              href="/book"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium group"
            >
              Book a Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All figures are indicative starting points — your final quote is fixed after a discovery
          session.
        </p>
      </div>
    </section>
  );
}
