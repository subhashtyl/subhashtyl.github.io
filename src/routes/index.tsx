import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/subhash-portrait.jpg";
import {
  ClipboardList, Workflow, AppWindow, Network, Database, LayoutTemplate, Users,
  Mail, Linkedin, MapPin, ArrowRight, CheckCircle2, Briefcase, Code2, PenTool, Rocket,
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
    company: "Sukoon Takaful", role: "Assistant Vice President – IT", location: "Dubai, UAE", period: "September 2021 – Present",
    points: [
      "Manage IIRIS General Insurance, Medical and Finance systems, digital portals, online payments and traffic upload systems.",
      "Translate business needs into functional requirements, coordinate vendor gap analysis, and deliver system enhancements, upgrades and integrations.",
      "Develop and implement customer and intermediary portals, claims portals, dashboards and automation using .NET Core and Oracle.",
      "Support business teams with production issues, quarter-end and year-end processing, and reinsurance closing activities.",
      "Coordinate CBUAE Open Finance, UAE e-Invoicing, partner APIs, payment gateways and AI-enabled automation initiatives.",
    ],
  },
  {
    company: "Orient UNB Takaful (Al Futtaim Group)", role: "Assistant IT Manager", location: "Dubai, UAE", period: "November 2017 – August 2021",
    points: [
      "Managed implementation, integration and support for IIRIS General Insurance, Medical and Finance systems, online portals, payments and quotation management.",
      "Implemented the core medical system and individual medical portal, and enhanced Motor and Marine portals, customer onboarding and tariff configuration.",
      "Developed in-house applications and reports, automated email and SMS alerts, and coordinated application patches and releases.",
      "Supported users, month-end and year-end processing, and reinsurance closing activities while coordinating changes with vendors.",
    ],
  },
  {
    company: "Assuretech Business Solutions Pvt. Ltd.", role: "Senior Software Engineer", location: "Kerala, India", period: "2011 – 2017",
    points: [
      "Developed, supported and implemented IIRIS General Insurance, Medical, Finance and Broker systems, including Motor, Marine, Medical and Non-Motor portals.",
      "Worked as an onsite implementation consultant for insurance clients, resolving code-level issues and managing deployments and version updates.",
      "Built applications and reports using C#, ASP.NET, Web API, JavaScript, Oracle and SAP Crystal Reports, and mentored new team members.",
    ],
  },
];

const roles = [
  "Manage IIRIS core insurance systems across General Insurance, Medical and Finance, alongside digital portals, payments and traffic upload systems.",
  "Lead business requirements, solution design, change requests, integrations, testing and implementation.",
  "Drive key regulatory initiatives, particularly CBUAE Open Finance and UAE e-Invoicing.",
  "Manage API integrations, payment gateway solutions and automation services, including CyberSource-related automation.",
  "Coordinate with business, IT, infrastructure, security, vendors and external partners to deliver projects and resolve dependencies.",
  "Provide technical and functional production support, coordinate application upgrades and patches, and resolve issues across core systems and integrations.",
  "Support digital transformation and process automation to improve insurance operations and customer journeys.",
  "Support quarter-end and year-end processing, reinsurance closings, and reporting needs across business departments.",
];

const expertise = [
  { icon: Briefcase, t: "IT Delivery & Project Coordination", d: "From requirements and scope through vendor follow-up, defect resolution, UAT, release preparation and business acceptance." },
  { icon: Landmark, t: "Regulatory Technology & Open Finance", d: "CBUAE Open Finance data-sharing APIs, near-real-time quotations, consent management, certification and production readiness." },
  { icon: MonitorSmartphone, t: "Digital Insurance Platforms", d: "Online portals and journeys for quotation, purchase, renewal, customer and intermediary workflows and self-service." },
  { icon: Network, t: "API Integration & Interoperability", d: "Internal and partner APIs, payment gateways, data mapping, request/response validation and integration readiness." },
  { icon: ScanText, t: "AI, OCR & Document Processing", d: "Azure AI Document Intelligence, OCR and GPT-based extraction, with use cases assessed for accuracy, business value and integration feasibility." },
  { icon: Database, t: "Core Insurance Systems", d: "IIRIS General Insurance, Medical, Finance and Broker systems — implementation, enhancements, upgrades and day-to-day support." },
  { icon: Workflow, t: "Digital Transformation & Automation", d: "UAE e-Invoicing data capture, document handling, automated notifications and API-enabled data exchange." },
  { icon: ShieldCheck, t: "Quality, Security & Production Readiness", d: "Testing, UAT, defect tracking, VAPT coordination, remediation follow-up and production support." },
];

const skills = [
  { icon: Briefcase, t: "Business & Delivery", items: ["IT Delivery & Project Coordination", "Requirements Analysis", "Stakeholder & Vendor Management", "Change Request Management", "Solution Design", "UAT & Release Readiness"] },
  { icon: Landmark, t: "Insurance & Regulatory", items: ["IIRIS General, Medical, Finance & Broker Systems", "Motor, Marine & Medical Portals", "Reinsurance & Period-End Support", "CBUAE Open Finance & Consent APIs", "UAE e-Invoicing"] },
  { icon: Code2, t: "Technology & Integration", items: ["C#, ASP.NET Core, MVC & Web API", "JavaScript, jQuery, HTML & JSON", "Oracle SQL, PL/SQL, Toad & Oracle Developer", "REST APIs & CyberSource Payments", "Crystal Reports, Microsoft Reports & QlikView", "Excel & Data Analysis", "Production Support, Releases & VAPT Coordination"] },
  { icon: Sparkles, t: "AI & Automation", items: ["Generative AI & GPT-Based Use Cases", "Azure AI Document Intelligence", "OCR & Intelligent Document Processing", "Workflow Automation", "Prototyping & UI/UX Flows"] },
];

const projectWork = [
  { icon: Database, t: "Core Insurance System Implementation & Support", d: "IIRIS General Insurance, Medical, Finance and Broker systems, including enhancements, upgrades and reinsurance closing support." },
  { icon: MonitorSmartphone, t: "Online Portals — Easy Buy for Insurance", d: "Quotation, purchase and renewal journeys for customers and intermediaries, built for easy self-service buying." },
  { icon: Landmark, t: "Open Finance for Insurance", d: "CBUAE Open Finance data-sharing APIs, consent management, near-real-time quotations and production certification." },
  { icon: Network, t: "API Integrations — Partners & Aggregators", d: "Partner, aggregator and comparison-channel connectivity with validated request and response flows." },
  { icon: CreditCard, t: "Payment Gateway Integrations", d: "Secure online payment flows and gateway automation, including CyberSource-related services." },
  { icon: Sparkles, t: "AI Feature Integrations into Insurance", d: "Document intelligence, OCR and GPT-based capabilities embedded into insurance workflows." },
  { icon: ReceiptText, t: "UAE e-Invoicing Digital Enablement", d: "Invoice data capture, issuance workflows and compliance-ready digital enablement." },
  { icon: BarChart3, t: "Report Automations", d: "Operational reports and dashboards using Crystal Reports, Microsoft Reports and QlikView, with automated email and SMS notifications." },
  { icon: Database, t: "Data Analysis", d: "Oracle SQL analysis, reconciliation and insight extraction across insurance platforms." },
  { icon: Workflow, t: "Solutioning & System Integration", d: "Solution design, prototyping and end-to-end integration across vendors, partners and internal teams." },
];

const scope = [
  ["Scope", "General Insurance, Medical, Finance & Broker Systems"],
  ["Channels", "Customer, intermediary, partner and aggregator"],
  ["Regulatory", "CBUAE Open Finance and UAE e-Invoicing"],
  ["Delivery", "Solutioning through production support"],
];

const outcomes = [
  "Faster quotation, purchase and renewal journeys",
  "Less manual data entry through document automation",
  "Regulatory initiatives delivered to CBUAE and UAE timelines",
  "Stable integrations with ongoing production support",
];

const tech = ["IIRIS Core Insurance", "C# / ASP.NET Core", "Oracle / PL/SQL", "Crystal Reports / QlikView", "CBUAE Open Finance APIs", "REST API Integration", "CyberSource Payments", "Azure AI Document Intelligence", "UAE e-Invoicing"];




const steps = ["Understand the Requirement", "Simplify the Process", "Design & Prototype", "Define the Integration", "Test & Secure", "Deliver & Release", "Support & Improve"];

const nav = [["About", "about"], ["Experience", "experience"], ["Roles", "roles"], ["Expertise", "expertise"], ["Skills", "skills"], ["Work", "work"], ["Approach", "approach"], ["Contact", "contact"]];

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
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">Turning business and regulatory requirements into practical technology solutions — across core insurance systems, digital platforms, API integration and AI-enabled automation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">View My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-accent">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead k="About Me" t="Turning requirements into working solutions" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>I am an insurance IT professional with experience in the UAE and India, spanning software development, core system implementation, business analysis and digital transformation. I currently work as Assistant Vice President – IT at Sukoon Takaful in Dubai.</p>
            <p>My background includes hands-on work with IIRIS General Insurance, Medical, Finance and Broker systems, customer and intermediary portals, payments, reporting and reinsurance closing support. I work with business teams and technology vendors from requirements and solution design through testing, implementation and production support.</p>
            <p>Alongside core system delivery, I coordinate CBUAE Open Finance, UAE e-Invoicing, partner integrations and AI-enabled document processing to improve insurance operations and customer journeys.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHead k="Professional Experience" t="Insurance technology across the UAE & India" />
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

      <section id="roles" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead k="Roles & Responsibilities" t="What I own today" />
        <div className="grid gap-4 md:grid-cols-2">
          {roles.map((x) => (
            <div key={x} className="card-soft flex items-start gap-4 p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-sm text-muted-foreground">{x}</p></div>
          ))}
        </div>
      </section>

      <section id="expertise" className="bg-muted py-20"><div className="mx-auto max-w-6xl px-6">
        <SectionHead k="Core Areas of Responsibility" t="Areas of expertise" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <SectionHead k="Core Skills" t="What I bring" />
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
        <SectionHead k="Featured Project" t="Insurance digital ecosystem" />
        <div className="card-soft grid gap-10 p-8 hover:translate-y-0 md:grid-cols-5 md:p-10">
          <div className="md:col-span-2">
            <p className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-primary">Role: Delivery, Functional & Solution Coordination</p>
            <p className="mt-6 text-muted-foreground">Implementing and supporting core insurance systems alongside digital portals, payments, reporting and partner integrations — connecting General Insurance, Medical and Finance operations with regulatory initiatives and better customer journeys.</p>
            <ul className="mt-8 space-y-4 border-t border-border pt-6">
              {scope.map(([k, v]) => (
                <li key={k}><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</p><p className="mt-1 text-sm text-primary">{v}</p></li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{o}</li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technology</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tech.map((x) => <span key={x} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary">{x}</span>)}
              </div>
            </div>
          </div>


          <div className="grid content-start gap-3 sm:grid-cols-2 md:col-span-3">
            {projectWork.map(({ icon: I, t, d }, i) => (
              <div key={t} className={`rounded-xl border border-border bg-muted p-5 ${projectWork.length % 2 === 1 && i === projectWork.length - 1 ? "sm:col-span-2" : ""}`}>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-primary"><I className="h-4 w-4" /></span>
                  <h3 className="font-display text-sm font-semibold leading-snug text-primary">{t}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

        </div>
      </div></section>

      <section id="approach" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead k="Working Approach" t="How I deliver" />
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
            <Mail className="h-6 w-6 text-primary" /><div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium text-primary">{EMAIL}</p></div>
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
