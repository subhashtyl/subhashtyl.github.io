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
      { name: "description", content: "Assistant Vice President in Dubai leading insurance digital platforms, CBUAE Open Finance, UAE e-Invoicing, API integration and AI-enabled automation." },
      { property: "og:title", content: "Subhash Thaliyil — Portfolio" },
      { property: "og:description", content: "Insurance IT • Regulatory Technology • API Integration • AI & Intelligent Automation. Dubai, UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "subhashthaliyil@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/subhash-thaliyil-a41a22b4";

const roles = [
  "Manage digital insurance portals and applications across General and Medical Insurance.",
  "Lead business requirements, solution design, change requests, integrations, testing and implementation.",
  "Drive key regulatory initiatives, particularly CBUAE Open Finance and UAE e-Invoicing.",
  "Manage API integrations, payment gateway solutions and automation services, including CyberSource-related automation.",
  "Coordinate with business, IT, infrastructure, security, vendors and external partners to deliver projects and resolve dependencies.",
  "Provide production support and technical / functional issue resolution for online platforms and integrations.",
  "Support digital transformation and process automation to improve insurance operations and customer journeys.",
];

const expertise = [
  { icon: Briefcase, t: "IT Delivery & Project Coordination", d: "From requirements and scope through vendor follow-up, defect resolution, UAT, release preparation and business acceptance." },
  { icon: Landmark, t: "Regulatory Technology & Open Finance", d: "CBUAE Open Finance data-sharing APIs, near-real-time quotations, consent management, certification and production readiness." },
  { icon: MonitorSmartphone, t: "Digital Insurance Platforms", d: "Online portals and journeys for quotation, purchase, renewal, customer and intermediary workflows and self-service." },
  { icon: Network, t: "API Integration & Interoperability", d: "Internal and partner APIs, payment gateways, data mapping, request/response validation and integration readiness." },
  { icon: ScanText, t: "AI, OCR & Document Processing", d: "AI-enabled extraction with Azure AI Document Intelligence, OCR and GPT-based approaches to reduce manual data entry." },
  { icon: Sparkles, t: "AI Solution Evaluation & Adoption", d: "Assessing AI use cases for business value, accuracy, integration feasibility, limitations and cost." },
  { icon: Workflow, t: "Digital Transformation & Automation", d: "UAE e-Invoicing data capture, document handling, automated notifications and API-enabled data exchange." },
  { icon: ShieldCheck, t: "Quality, Security & Production Readiness", d: "Testing, UAT, defect tracking, VAPT coordination, remediation follow-up and production support." },
];

const skills = [
  { icon: Briefcase, t: "Business & Delivery", items: ["IT Delivery & Project Coordination", "Requirements Analysis", "Stakeholder & Vendor Management", "Change Request Management", "Solution Design", "UAT & Release Readiness"] },
  { icon: Landmark, t: "Insurance & Regulatory", items: ["General & Medical Insurance Platforms", "UAE Insurance Regulatory Change", "CBUAE Open Finance", "Data-Sharing APIs & Consent", "UAE e-Invoicing"] },
  { icon: Code2, t: "Technology & Integration", items: ["API Integration & Partner Connectivity", "Payment Gateways (CyberSource)", "Oracle SQL & Data Analysis", "Production Support & Troubleshooting", "VAPT Coordination"] },
  { icon: Sparkles, t: "AI & Automation", items: ["Generative AI & GPT-Based Use Cases", "Azure AI Document Intelligence", "OCR & Intelligent Document Processing", "Workflow Automation", "Prototyping & UI/UX Flows"] },
];

const projectWork = [
  { icon: MonitorSmartphone, t: "Online Portals — Easy Buy for Insurance", d: "Quotation, purchase and renewal journeys for customers and intermediaries, built for easy self-service buying." },
  { icon: Landmark, t: "Open Finance for Insurance", d: "CBUAE Open Finance data-sharing APIs, consent management, near-real-time quotations and production certification." },
  { icon: Network, t: "API Integrations — Partners & Aggregators", d: "Partner, aggregator and comparison-channel connectivity with validated request and response flows." },
  { icon: CreditCard, t: "Payment Gateway Integrations", d: "Secure online payment flows and gateway automation, including CyberSource-related services." },
  { icon: Sparkles, t: "AI Feature Integrations into Insurance", d: "Document intelligence, OCR and GPT-based capabilities embedded into insurance workflows." },
  { icon: ReceiptText, t: "UAE e-Invoicing Digital Enablement", d: "Invoice data capture, issuance workflows and compliance-ready digital enablement." },
  { icon: BarChart3, t: "Report Automations", d: "Scheduled and event-driven report generation that replaces manual reporting effort." },
  { icon: Database, t: "Data Analysis", d: "Oracle SQL analysis, reconciliation and insight extraction across insurance platforms." },
  { icon: Workflow, t: "Solutioning & System Integration", d: "Solution design, prototyping and end-to-end integration across vendors, partners and internal teams." },
];

const scope = [
  ["Scope", "General & Medical Insurance"],
  ["Channels", "Customer, intermediary, partner and aggregator"],
  ["Regulatory", "CBUAE Open Finance and UAE e-Invoicing"],
  ["Delivery", "Solutioning through production support"],
];


const steps = ["Understand the Requirement", "Simplify the Process", "Design & Prototype", "Define the Integration", "Test & Secure", "Deliver & Release", "Support & Improve"];

const nav = [["About", "about"], ["Roles", "roles"], ["Expertise", "expertise"], ["Skills", "skills"], ["Work", "work"], ["Approach", "approach"], ["Contact", "contact"]];

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
          <a href="#top" className="font-display text-lg font-semibold text-primary">Subhash Thaliyil</a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition hover:text-primary">{l}</a>)}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="animate-rise [animation-delay:150ms] md:order-2"><Portrait /></div>
        <div className="animate-rise md:order-1">
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Dubai, UAE</p>
          <h1 className="mt-4 text-5xl font-semibold text-primary md:text-6xl">Subhash Thaliyil</h1>
          <p className="mt-3 text-xl font-medium">Assistant Vice President</p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">Insurance IT • Digital Transformation • Regulatory Technology</p>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">Translating business and regulatory requirements into secure, practical technology solutions — across digital insurance platforms, API integration and AI-enabled automation.</p>
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
            <p>Insurance IT and digital transformation professional coordinating end-to-end technology delivery across regulatory initiatives, digital insurance platforms, API integrations and process automation.</p>
            <p>I work across business teams, IT, compliance, technology vendors and external partners to turn business and regulatory requirements into practical solutions — from requirements definition and solution coordination through development, integration, testing, UAT and production readiness.</p>
            <p>My focus areas include UAE insurance technology, CBUAE Open Finance, customer and intermediary digital journeys, and the practical application of AI-enabled document processing and intelligent automation — aligning regulatory obligations, operational needs and technology to deliver secure, efficient, customer-centric insurance solutions.</p>
          </div>
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
            <div className="space-y-2">
              {["Open Finance for Insurance", "Online Portals for Insurance", "UAE e-Invoicing Digital Enablement", "Payment Gateway & CyberSource Automation", "AI-Enabled Document Processing"].map((p) => (
                <p key={p} className="font-display text-lg font-semibold text-primary">{p}</p>
              ))}
            </div>
            <p className="mt-6 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-primary">Role: Delivery, Functional & Solution Coordination</p>
            <p className="mt-6 text-muted-foreground">Leading the design, integration and implementation of an end-to-end insurance digital ecosystem across General and Medical Insurance — meeting CBUAE and UAE regulatory requirements while improving customer and intermediary journeys.</p>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2 md:col-span-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{h}</div>
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
