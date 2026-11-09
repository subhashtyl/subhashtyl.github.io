import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/subhash-portrait.jpg";
import {
  Workflow, Network, Database,
  Mail, Linkedin, MapPin, ArrowRight, CheckCircle2, Briefcase, Code2,
  Landmark, ScanText, Sparkles, ShieldCheck, MonitorSmartphone,
  CreditCard, ReceiptText, BarChart3,

} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhash Thaliyil — Insurance IT & Digital Transformation" },
      { name: "description", content: "Subhash Thaliyil, Assistant Vice President – IT at Sukoon Takaful in Dubai. Experience in IIRIS core insurance systems, digital platforms, regulatory technology, API integration and AI-enabled automation." },
      { property: "og:title", content: "Subhash Thaliyil — Portfolio" },
      { property: "og:description", content: "Assistant Vice President – IT at Sukoon Takaful. Core insurance systems, digital transformation, regulatory technology and intelligent automation across the UAE and India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "subhashthaliyil@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/subhash-thaliyil-a41a22b4";

const experience = [
  {
    "company": "Sukoon Takaful",
    "role": "Assistant Vice President – IT",
    "location": "Dubai, UAE",
    "period": "September 2021 – Present",
    "points": [
      "Manage IIRIS General Insurance, Medical and Finance systems, digital portals, quotation workflows and online payments.",
      "Lead requirements, solution design, change requests, vendor coordination, testing and implementation.",
      "Coordinate CBUAE Open Finance, consent management, AML compliance and UAE e-Invoicing initiatives.",
      "Deliver partner integrations, CyberSource payment services and AI-enabled document and workflow automation.",
      "Coordinate L3/L4 technical and functional support, application upgrades, security remediation and production releases.",
      "Develop reports and dashboards; support quarter-end, year-end and reinsurance closing activities."
    ]
  },
  {
    "company": "Orient UNB Takaful (Al Futtaim Group)",
    "role": "Assistant IT Manager",
    "location": "Dubai, UAE",
    "period": "November 2017 – August 2021",
    "points": [
      "Implemented and supported IIRIS General Insurance, Medical and Finance systems and online insurance portals.",
      "Delivered the core medical system and individual medical portal; enhanced Motor and Marine journeys, onboarding and tariff configuration.",
      "Built in-house applications, reports and automated email and SMS alerts; coordinated vendor patches and releases.",
      "Supported users, period-end processing and reinsurance closing activities."
    ]
  },
  {
    "company": "Assuretech Business Solutions Pvt. Ltd.",
    "role": "Senior Software Engineer",
    "location": "Kerala, India",
    "period": "2011 – 2017",
    "points": [
      "Developed and implemented IIRIS General Insurance, Medical, Finance and Broker systems and related online portals.",
      "Provided onsite implementation support, resolved code-level issues and managed deployments and version updates.",
      "Built applications and reports using C#, ASP.NET, Web API, JavaScript, Oracle and Crystal Reports; mentored new team members."
    ]
  }
];


const expertise = [
  { icon: MonitorSmartphone, t: "Digital Insurance Platforms", d: "Customer and intermediary portals for quotation, purchase, renewal and self-service, including partner quotation workflows." },
  { icon: Database, t: "Core Insurance Systems", d: "IIRIS General Insurance, Medical, Finance and Broker systems: implementation, enhancements, upgrades and support." },
  { icon: Landmark, t: "Regulatory Technology", d: "CBUAE Open Finance and consent management, AML compliance and UAE e-Invoicing, from requirements to implementation." },
  { icon: Network, t: "APIs & Payments", d: "Partner and aggregator connectivity, data mapping, integration validation and secure payment gateway services." },
  { icon: ScanText, t: "AI & Process Automation", d: "Document reading, GPT-based data extraction, form pre-fill, validation and automated insurance workflows." },
  { icon: ShieldCheck, t: "IT Delivery & Production Support", d: "Requirements, vendor coordination, UAT, releases, VAPT remediation and L3/L4 technical and functional support." }
];

const skills = [
  { icon: Briefcase, t: "Business & Delivery", items: ["Requirements analysis & solution design", "Project & change coordination", "Stakeholder & vendor management", "UAT & release readiness"] },
  { icon: Landmark, t: "Insurance & Regulatory", items: ["IIRIS: General, Medical, Finance & Broker", "Motor, Marine & Medical portals", "Open Finance, consent & AML compliance", "UAE e-Invoicing", "Reinsurance & period-end support"] },
  { icon: Code2, t: "Development & Integration", items: ["C#, ASP.NET Core, MVC & Web API", "JavaScript, jQuery, HTML & JSON", "Oracle SQL & PL/SQL", "REST APIs & CyberSource", "Crystal Reports, Microsoft Reports & QlikView"] },
  { icon: Sparkles, t: "AI, Data & Automation", items: ["Azure AI Document Intelligence", "Generative AI & GPT-based extraction", "Workflow & report automation", "Excel, data analysis & reconciliation", "Prototyping & UI/UX flows"] }
];

const projectWork = [
  { icon: MonitorSmartphone, t: "Online Insurance Portals", d: "Self-service quotation, purchase and renewal for customers and intermediaries." },
  { icon: Landmark, t: "Open Finance for Insurance", d: "Data-sharing APIs, consent management, near-real-time quotations and certification coordination." },
  { icon: Network, t: "Partner & Aggregator Integrations", d: "Connectivity with partners and comparison channels, with validated data flows." },
  { icon: CreditCard, t: "Payment Gateway Integrations", d: "Secure online payments and gateway automation, including CyberSource services." },
  { icon: Sparkles, t: "AI-Enabled Insurance Workflows", d: "Document intelligence, data extraction, form pre-fill and validation within insurance journeys." },
  { icon: ReceiptText, t: "UAE e-Invoicing", d: "Invoice data capture, issuance workflows and compliance-ready digital processes." },
  { icon: BarChart3, t: "Reporting & Data Analysis", d: "Scheduled and event-driven reports, management dashboards, Oracle SQL analysis and reconciliation." },
  { icon: Workflow, t: "Solution Design & System Integration", d: "Prototyping and end-to-end integration across internal teams, vendors and external partners." }
];







const steps = ["Understand the Requirement", "Simplify the Process", "Design & Prototype", "Define the Integration", "Test & Secure", "Deliver & Release", "Support & Improve"];

const nav = [["About", "about"], ["Experience", "experience"], ["Expertise", "expertise"], ["Skills", "skills"], ["Work", "work"], ["Approach", "approach"], ["Contact", "contact"]];

function SectionHead({ k, t }: { k: string; t: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
      <h2 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">{t}</h2>
    </div>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="h-full w-full overflow-hidden rounded-full border border-border shadow-[var(--shadow-soft)]">
        <img src={portrait} alt="Subhash Thaliyil" width={900} height={900} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="shrink-0 font-display text-lg font-semibold text-primary">Subhash Thaliyil</a>
          <nav className="hidden gap-3 text-xs text-muted-foreground md:flex lg:gap-7 lg:text-sm">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition hover:text-primary">{l}</a>)}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="animate-rise [animation-delay:150ms] md:order-2"><Portrait /></div>
        <div className="animate-rise md:order-1">
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Dubai, UAE</p>
          <h1 className="mt-4 text-5xl font-semibold text-primary md:text-6xl">Subhash Thaliyil</h1>
          <p className="mt-3 text-xl font-medium">Assistant Vice President – IT</p>
          <p className="mt-1 text-base font-medium text-muted-foreground">Sukoon Takaful</p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">Insurance IT • Digital Transformation • Regulatory Technology</p>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">Practical technology solutions for insurance operations, digital journeys and regulatory change.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">View My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-accent">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead k="Profile" t="Insurance IT & digital transformation" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>I am an insurance IT and digital transformation professional with experience in the UAE and India. As Assistant Vice President – IT at Sukoon Takaful, I coordinate technology delivery across core insurance systems, digital platforms, integrations and automation.</p>
            <p>I work with business teams, IT, compliance, vendors and external partners to turn business and regulatory requirements into practical solutions—from requirements and solution design through testing, implementation and production support.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHead k="Career History" t="Professional experience" />
        <div className="divide-y divide-border">
          {experience.map(({ company, role, location, period, points }) => (
            <article key={company} className="grid gap-5 py-8 first:pt-0 md:grid-cols-3 md:gap-10">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{period}</p>
                <h3 className="mt-3 text-lg font-semibold text-primary">{company}</h3>
                <p className="mt-2 font-medium">{role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{location}</p>
              </div>
              <ul className="space-y-3 md:col-span-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>


      <section id="expertise" className="bg-muted py-20"><div className="mx-auto max-w-6xl px-6">
        <SectionHead k="Focus Areas" t="Areas of expertise" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map(({ icon: I, t, d }) => (
            <div key={t} className="card-soft p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></div>
              <h3 className="mt-5 font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section id="skills" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead k="Capabilities" t="Technical & professional skills" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: I, t, items }) => (
              <div key={t} className="card-soft p-6">
                <div className="flex items-center gap-3"><I className="h-5 w-5 text-primary" /><h3 className="font-semibold text-primary">{t}</h3></div>
                <ul className="mt-5 space-y-2.5">
                  {items.map((s) => <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-muted py-20"><div className="mx-auto max-w-6xl px-6">
        <SectionHead k="Selected Work" t="Insurance digital ecosystem" />
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">Designing and integrating digital services across General and Medical Insurance, with a focus on customer journeys, partner connectivity and regulatory requirements.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectWork.map(({ icon: I, t, d }) => (
            <article key={t} className="card-soft p-6">
              <I className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div></section>

      <section id="approach" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead k="Working Approach" t="From requirements to delivery" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map((s, i) => (
              <li key={s} className="relative">
                <div className="card-soft h-full p-5">
                  <span className="font-display text-2xl font-semibold text-muted-foreground/50">0{i + 1}</span>
                  <p className="mt-3 text-sm font-medium text-primary">{s}</p>
                </div>
                {i < steps.length - 1 && <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground lg:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">Let's connect</h2>
        <p className="mt-4 flex items-center justify-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> Subhash Thaliyil · Dubai, UAE</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${EMAIL}`} className="card-soft flex items-center gap-4 p-6 text-left">
            <Mail className="h-6 w-6 text-primary" /><div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium break-all text-primary">{EMAIL}</p></div>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="card-soft flex items-center gap-4 p-6 text-left">
            <Linkedin className="h-6 w-6 text-primary" /><div><p className="text-xs text-muted-foreground">LinkedIn</p><p className="font-medium text-primary">subhash-thaliyil</p></div>
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 Subhash Thaliyil</footer>
    </div>
  );
}
