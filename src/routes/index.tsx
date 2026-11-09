import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/subhash-portrait.jpg";
import {
  Workflow, Network, Database,
  Mail, Linkedin, MapPin, ArrowRight, ArrowUpRight, Menu, X, Briefcase, Code2,
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

const nav = [["Profile", "about"], ["Experience", "experience"], ["Expertise", "expertise"], ["Skills", "skills"], ["Selected work", "work"], ["Contact", "contact"]];

function SectionHead({ k, t }: { k: string; t: string }) {
  return <div className="mb-10 flex items-start gap-5"><span className="mt-2 font-mono text-xs text-primary">{k}</span><h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t}</h2></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#top" aria-label="Subhash Thaliyil — back to top" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground">ST</span><span className="text-sm font-semibold">Subhash Thaliyil</span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">{nav.map(([label, id]) => <Button asChild variant="ghost" size="sm" key={id}><a href={`#${id}`}>{label}</a></Button>)}</nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="grid grid-cols-2 gap-1 border-t border-border px-5 py-3 lg:hidden">{nav.map(([label, id]) => <Button asChild variant="ghost" key={id} className="justify-start"><a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a></Button>)}</nav>}
      </header>

      <main>
        <section id="top" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 md:grid-cols-[1.3fr_1fr] md:gap-12 md:py-16 lg:px-8">
            <div className="mx-auto aspect-square w-44 overflow-hidden rounded-full border border-border bg-muted md:order-2 md:w-full md:max-w-xs"><img src={portrait} alt="Subhash Thaliyil in a navy suit" width={900} height={900} fetchPriority="high" className="h-full w-full object-cover" /></div>
            <div className="md:order-1">
              <p className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Dubai, UAE</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">Subhash<br className="hidden md:block" /> Thaliyil</h1>
              <p className="mt-5 text-lg font-medium">Assistant Vice President – IT</p>
              <p className="mt-1 text-base text-primary">Sukoon Takaful</p>
              <p className="mt-4 text-sm font-medium text-foreground">Insurance IT | Digital Transformation | Regulatory Technology</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Driving practical technology solutions and digital transformation across insurance operations, customer journeys, API integrations and regulatory initiatives, with a focus on AI-enabled automation, operational efficiency and customer experience.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#experience">Explore experience <ArrowRight /></a></Button><Button asChild size="lg" variant="outline"><a href={`mailto:${EMAIL}`}>Get in touch <Mail /></a></Button></div>
            </div>
          </div>
          <div className="border-t border-border bg-muted"><div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-5 text-xs font-medium text-muted-foreground lg:px-8"><span>Insurance technology</span><span>Digital transformation</span><span>Regulatory enablement</span><span>Systems & integration</span></div></div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3 lg:px-8">
          <SectionHead k="01" t="Professional profile" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2">
            <p>I am an insurance IT and digital transformation professional with experience in the UAE and India. As Assistant Vice President – IT at Sukoon Takaful, I coordinate technology delivery across core insurance systems, digital platforms, integrations and automation.</p>
            <p>I work with business teams, IT, compliance, vendors and external partners to turn business and regulatory requirements into practical solutions—from requirements and solution design through testing, implementation and production support.</p>
          </div>
        </section>

        <section id="experience" className="border-y border-border bg-muted">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8"><SectionHead k="02" t="Career experience" />
            <div className="divide-y divide-border">{experience.map(({ company, role, location, period, points }, i) => <article key={company} className="grid gap-6 py-9 first:pt-0 last:pb-0 md:grid-cols-[1fr_1.7fr] md:gap-14">
              <div><p className="font-mono text-xs text-muted-foreground">{period}</p><h3 className="mt-4 text-xl font-semibold">{company}</h3><p className="mt-2 text-sm font-medium text-primary">{role}</p><p className="mt-2 text-xs text-muted-foreground">{location}</p>{i === 0 && <span className="mt-4 inline-flex items-center gap-2 text-xs text-primary"><span className="size-1.5 rounded-full bg-primary" /> Current role</span>}</div>
              <ul className="space-y-3">{points.map(point => <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2.5 h-px w-3 shrink-0 bg-primary" /><span>{point}</span></li>)}</ul>
            </article>)}</div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-6xl px-6 py-16 lg:px-8"><SectionHead k="03" t="Areas of expertise" />
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{expertise.map(({ icon: Icon, t, d }) => <article key={t} className="border-t border-border py-7"><Icon className="mb-5 size-5 text-primary" /><h3 className="text-base font-semibold">{t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p></article>)}</div>
        </section>

        <section id="skills" className="border-y border-border bg-muted"><div className="mx-auto max-w-6xl px-6 py-16 lg:px-8"><SectionHead k="04" t="Technical & professional skills" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{skills.map(({ icon: Icon, t, items }) => <div key={t}><div className="flex items-start gap-2"><Icon className="mt-0.5 size-4 shrink-0 text-primary" /><h3 className="text-sm font-semibold">{t}</h3></div><ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="text-sm leading-relaxed text-muted-foreground">{item}</li>)}</ul></div>)}</div>
        </div></section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-16 lg:px-8"><SectionHead k="05" t="Selected work" />
          <p className="mb-9 max-w-2xl text-base leading-relaxed text-muted-foreground">Designing and integrating digital services across General and Medical Insurance, with a focus on customer journeys, partner connectivity and regulatory requirements.</p>
          <div className="grid gap-4 sm:grid-cols-2">{projectWork.map(({ icon: Icon, t, d }, i) => <article key={t} className="card-soft flex gap-5 p-6"><span className="mt-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-4"><h3 className="text-base font-semibold">{t}</h3><Icon className="mt-0.5 size-4 shrink-0 text-primary" /></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p></div></article>)}</div>
        </section>

        <section id="approach" className="border-y border-border bg-muted"><div className="mx-auto max-w-6xl px-6 py-16 lg:px-8"><SectionHead k="06" t="From requirements to delivery" /><ol className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">{steps.map((step, i) => <li key={step} className="border-t border-border pt-4"><span className="font-mono text-xs text-primary">0{i + 1}</span><p className="mt-3 text-sm font-medium leading-relaxed">{step}</p></li>)}</ol></div></section>

        <section id="contact" className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 lg:px-8"><div><SectionHead k="07" t="Let’s connect" /><p className="text-sm text-muted-foreground">Subhash Thaliyil · Dubai, UAE</p></div><div className="min-w-0"><Button asChild variant="ghost" className="h-auto w-full justify-start gap-4 rounded-none border-b border-border px-0 py-5 text-left"><a href={`mailto:${EMAIL}`}><Mail className="text-primary" /><span className="min-w-0 flex-1"><span className="block text-xs text-muted-foreground">Email</span><span className="mt-1 block whitespace-normal break-all">{EMAIL}</span></span><ArrowUpRight /></a></Button><Button asChild variant="ghost" className="h-auto w-full justify-start gap-4 rounded-none border-b border-border px-0 py-5"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin className="text-primary" /><span className="flex-1 text-left"><span className="block text-xs text-muted-foreground">LinkedIn</span><span className="mt-1 block">Subhash Thaliyil</span></span><ArrowUpRight /></a></Button></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-muted-foreground lg:px-8"><span>© 2026 Subhash Thaliyil</span><a href="#top" aria-label="Back to top" className="flex items-center gap-2 hover:text-primary">Back to top <ArrowUpRight className="size-3" /></a></div></footer>
    </div>
  );
}
