import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/subhash-portrait.jpg";
import {
  ArrowRight, ArrowUpRight, BarChart3, Briefcase, CreditCard, Database,
  Landmark, Linkedin, Mail, MapPin, Menu, MonitorSmartphone, Network,
  ReceiptText, ScanText, ShieldCheck, Sparkles, Workflow, X,
  Search, SlidersHorizontal, PenTool, Rocket, Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhash Thaliyil — Insurance IT & Digital Transformation" },
      { name: "description", content: "Subhash Thaliyil, Assistant Vice President – IT in Dubai. Insurance platforms, core systems, digital transformation, regulatory technology and AI-enabled automation." },
      { property: "og:title", content: "Subhash Thaliyil — Insurance Technology Portfolio" },
      { property: "og:description", content: "Insurance IT, digital transformation and regulatory technology. Explore Subhash Thaliyil’s expertise, skills and digital insurance delivery experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "subhashthaliyil@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/subhash-thaliyil-a41a22b4";

const responsibilities = [
  "Manage digital portals and core applications across General and Medical Insurance.",
  "Lead requirements, solution design, change requests, testing, UAT and implementation.",
  "Coordinate business, IT, compliance, infrastructure, security, vendors and partners to resolve delivery dependencies.",
  "Coordinate L3/L4 production support and technical and functional issue resolution.",
  "Develop management reports and custom dashboards to support operations and decision-making.",
];

const expertise = [
  { icon: MonitorSmartphone, title: "Digital insurance platforms", description: "Customer and intermediary journeys, portal design and partner quotation workflows." },
  { icon: Database, title: "Core insurance systems management", description: "IIRIS General Insurance, Medical and Finance systems: stable operations, enhancements and financial closing." },
  { icon: Landmark, title: "Regulatory technology", description: "CBUAE Open Finance, consent management, AML compliance and UAE e-Invoicing." },
  { icon: Network, title: "APIs & payment services", description: "Partner connectivity, data mapping, request and response validation, and payment gateway management." },
  { icon: ScanText, title: "AI-enabled automation", description: "Intelligent document processing, data extraction, form pre-fill, validation and workflow automation." },
  { icon: ShieldCheck, title: "IT delivery & readiness", description: "Scope definition, vendor follow-up, defect resolution, business acceptance and security remediation." },
];

const skills = [
  { icon: Briefcase, title: "Business & delivery", items: ["Requirements analysis & solution design", "Project & change request coordination", "Stakeholder & vendor management", "UAT & release readiness"] },
  { icon: Landmark, title: "Insurance & regulatory", items: ["General & Medical insurance platforms", "UAE insurance regulatory change", "Open Finance data-sharing APIs & consent", "UAE e-Invoicing"] },
  { icon: Network, title: "Technology & integration", items: ["API integration & partner connectivity", "CyberSource payment gateways", "Oracle SQL & data analysis", "Troubleshooting & VAPT coordination"] },
  { icon: Sparkles, title: "AI & automation", items: ["Generative AI & GPT-based use cases", "Azure AI Document Intelligence", "Workflow & report automation", "Prototyping & UI/UX flows"] },
];

const work = [
  { icon: MonitorSmartphone, title: "Online insurance portals", description: "Easy-buy quotation, purchase, renewal and self-service journeys for customers and intermediaries." },
  { icon: Landmark, title: "Open Finance for insurance", description: "Data-sharing APIs, consent management, near-real-time quotations and production certification." },
  { icon: Network, title: "Partner & aggregator integrations", description: "Connectivity with partners, aggregators and comparison channels, with validated request and response flows." },
  { icon: CreditCard, title: "Payment gateway integrations", description: "Secure online payments and gateway automation, including CyberSource services." },
  { icon: Sparkles, title: "AI integrations in insurance", description: "Document intelligence and GPT-based capabilities embedded into insurance journeys and operations." },
  { icon: ReceiptText, title: "UAE e-Invoicing enablement", description: "Invoice data capture, issuance workflows and compliance-ready digital processes." },
  { icon: BarChart3, title: "Reporting & data analysis", description: "Scheduled and event-driven reports that reduce manual effort, with Oracle SQL analysis and reconciliation." },
  { icon: Workflow, title: "Solution design & system integration", description: "Prototyping and end-to-end integration across internal teams, technology vendors and external partners." },
];

const steps = ["Understand the requirement", "Simplify the process", "Design & prototype", "Define the integration", "Test & secure", "Deliver & release", "Support & improve"];
const coreSystems = [
  { icon: Landmark, title: "Month-end & year-end closing", description: "Coordinate closing activities, system validations and new-period setup." },
  { icon: BarChart3, title: "Reconciliation & reporting", description: "Use Oracle SQL for data analysis, reconciliation and automated reporting." },
  { icon: Database, title: "System enhancements", description: "Manage system changes, upgrades and patches with vendors." },
  { icon: Wrench, title: "Production support", description: "Coordinate L3/L4 support and resolve system and data-related issues." },
  { icon: Rocket, title: "Testing & releases", description: "Manage testing, UAT and production deployments." },
];
const stepIcons = [Search, SlidersHorizontal, PenTool, Network, ShieldCheck, Rocket, Wrench];
const nav = [["Profile", "profile"], ["Expertise", "expertise"], ["Skills", "skills"], ["Selected work", "work"], ["Contact", "contact"]];

function SectionHead({ title }: { title: string }) {
  return <div className="mb-12 self-start"><span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-sm bg-primary" /><h2 className="text-2xl font-semibold leading-snug md:text-3xl">{title}</h2></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Button asChild variant="ghost" className="gap-3 px-0 hover:bg-transparent"><a href="#top" aria-label="Subhash Thaliyil — back to top"><span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary font-display text-sm font-semibold text-primary-foreground shadow-soft ring-2 ring-background">ST</span><span className="text-sm font-semibold">Subhash Thaliyil</span></a></Button>
          <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">{nav.map(([label, id]) => <Button asChild variant="ghost" size="sm" key={id}><a href={`#${id}`}>{label}</a></Button>)}</nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="grid grid-cols-2 gap-1 border-t border-border px-5 py-3 lg:hidden">{nav.map(([label, id]) => <Button asChild variant="ghost" key={id} className="justify-start"><a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a></Button>)}</nav>}
      </header>

      <main>
        <section id="top" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-24 lg:px-8">
            <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full border border-border bg-muted shadow-soft md:order-2 md:w-full md:max-w-xs lg:max-w-sm"><img src={portrait} alt="Subhash Thaliyil in a navy suit" width={900} height={900} fetchPriority="high" className="h-full w-full object-cover" /></div>
            <div className="md:order-1">
              <p className="mb-5 flex items-center gap-2 text-xs font-medium text-muted-foreground"><MapPin className="size-3.5 text-primary" /> Dubai, UAE</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">Subhash Thaliyil</h1>
              <p className="mt-5 text-xl font-medium text-primary md:text-2xl">Assistant Vice President – IT</p>
              <p className="mt-4 max-w-xl border-l-2 border-primary/30 pl-4 text-sm font-medium leading-7">Insurance IT | Digital Transformation | Regulatory Technology</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">Driving practical technology solutions and digital transformation across insurance operations, customer journeys, API integrations and regulatory initiatives, with a focus on AI-enabled automation, operational efficiency and customer experience.</p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4"><Button asChild size="lg" className="w-full sm:w-auto"><a href="#work">View selected work <ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><a href={`mailto:${EMAIL}`}>Get in touch <Mail /></a></Button></div>
            </div>
          </div>
        </section>

        <section id="profile" className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-0"><SectionHead title="Professional profile" /><div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">I coordinate end-to-end technology delivery across digital insurance platforms, core systems, integrations and automation. Working with business, IT, compliance, vendors and external partners, I turn operational and regulatory requirements into practical solutions—from design and development to implementation and production readiness.</p>
            <h3 className="mt-12 text-base font-semibold">Delivery experience</h3>
            <ul className="mt-6 grid gap-x-16 gap-y-6 md:grid-cols-2">{responsibilities.map((point) => <li key={point} className="flex items-start gap-3 text-base leading-8 text-muted-foreground"><span className="mt-4 h-px w-3 shrink-0 bg-primary" /><span>{point}</span></li>)}</ul>
          </div></div>
        </section>

        <section id="expertise" className="border-y border-border bg-muted"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8"><SectionHead title="Areas of expertise" />
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">{expertise.map(({ icon: Icon, title, description }) => <article key={title} className="flex items-start gap-5 border-t border-border pt-8"><span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-background text-primary"><Icon aria-hidden="true" className="size-5" /></span><div className="min-w-0"><h3 className="text-lg font-semibold leading-snug">{title}</h3><p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p></div></article>)}</div>
        </div></section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8"><SectionHead title="Core skills" />
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">{skills.map(({ icon: Icon, title, items }) => <div key={title} className="border-t border-border pt-7"><div className="flex items-center gap-3"><Icon aria-hidden="true" className="size-5 shrink-0 text-primary" /><h3 className="text-lg font-semibold">{title}</h3></div><ul className="mt-6 divide-y divide-border">{items.map(item => <li key={item} className="flex items-start gap-3 py-3 text-base leading-7 text-muted-foreground"><span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-primary/50" /><span>{item}</span></li>)}</ul></div>)}</div>
        </section>

        <section id="work" className="border-y border-border bg-muted"><div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8"><SectionHead title="Selected work" />
          <div className="mb-8 max-w-3xl space-y-4"><h3 className="text-xl font-semibold leading-snug md:text-2xl">Insurance digital ecosystem</h3><p className="text-base leading-7 text-muted-foreground">Designing, integrating and implementing digital services across General and Medical Insurance to meet CBUAE and UAE regulatory requirements and improve customer, intermediary and partner journeys.</p></div>
          <div className="grid gap-4 md:grid-cols-2">{work.map(({ icon: Icon, title, description }) => <article key={title} className="card-soft border-t-2 border-t-primary/30 px-5 py-4 md:px-6 md:py-5"><div className="flex items-center justify-between gap-3"><h3 className="text-base font-semibold leading-snug">{title}</h3><Icon className="size-4 shrink-0 text-primary" /></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div>
          <div className="mt-12 border-t border-border pt-10 md:mt-14 md:pt-12">
            <div className="max-w-3xl"><div className="mb-5 flex size-11 items-center justify-center rounded-md bg-background text-primary"><Database aria-hidden="true" className="size-5" /></div><h3 className="text-xl font-semibold leading-snug md:text-2xl">Core Insurance Systems Management</h3><p className="mt-5 text-base leading-8 text-muted-foreground">Managing IIRIS General Insurance, Medical and Finance systems to ensure smooth operations, system stability and timely month-end and year-end closing.</p></div>
            <h4 className="mt-10 text-base font-semibold">Key responsibilities</h4>
            <ul className="mt-5 grid gap-x-16 gap-y-6 md:grid-cols-2">{coreSystems.map(({ icon: Icon, title, description }) => <li key={title} className="flex items-start gap-4 border-t border-border pt-5"><Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" /><div className="min-w-0"><h5 className="text-base font-semibold leading-7">{title}</h5><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{description}</p></div></li>)}</ul>
          </div>
        </div></section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8"><SectionHead title="Working approach" /><ol className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{steps.map((step, i) => {
          const Icon = stepIcons[i] ?? Workflow;
          return <li key={step} className="flex items-center gap-5 border-t border-border pt-6"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary"><Icon aria-hidden="true" className="size-5" /></span><p className="flex-1 text-base font-medium leading-relaxed">{step}</p>{i < steps.length - 1 && <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />}</li>;
        })}</ol></section>

        <section id="contact" className="border-t border-border bg-muted"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-24 lg:px-8"><div><SectionHead title="Contact" /><p className="text-base text-muted-foreground">Subhash Thaliyil · Dubai, UAE</p></div><div className="min-w-0"><Button asChild variant="ghost" className="h-auto w-full justify-start gap-4 rounded-none border-b border-border px-0 py-6 text-left hover:bg-accent hover:text-accent-foreground"><a href={`mailto:${EMAIL}`}><Mail className="text-primary" /><span className="min-w-0 flex-1"><span className="block text-xs text-muted-foreground">Email</span><span className="mt-1 block whitespace-normal break-all">{EMAIL}</span></span><ArrowUpRight /></a></Button><Button asChild variant="ghost" className="h-auto w-full justify-start gap-4 rounded-none border-b border-border px-0 py-6 hover:bg-accent hover:text-accent-foreground"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin className="text-primary" /><span className="flex-1 text-left"><span className="block text-xs text-muted-foreground">LinkedIn</span><span className="mt-1 block">Subhash Thaliyil</span></span><ArrowUpRight /></a></Button></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground lg:px-8"><span>© 2026 Subhash Thaliyil</span><Button asChild variant="ghost" size="sm"><a href="#top">Back to top <ArrowUpRight className="size-3" /></a></Button></div></footer>
    </div>
  );
}
