import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent } from "react";
import {
  ClipboardList, Workflow, AppWindow, Network, Database, LayoutTemplate, Users,
  Mail, Linkedin, MapPin, Camera, ArrowRight, CheckCircle2, Briefcase, Code2, PenTool, Rocket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhash Thaliyil — Business Applications & Digital Solutions" },
      { name: "description", content: "Assistant Vice President in Dubai bridging business requirements and technology to design practical, scalable digital solutions." },
      { property: "og:title", content: "Subhash Thaliyil — Portfolio" },
      { property: "og:description", content: "Business Applications • Digital Solutions • System Integration. Dubai, UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "subhashthaliyil@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/subhash-thaliyil-a41a22b4";

const expertise = [
  { icon: ClipboardList, t: "Business Requirement Analysis", d: "Capturing needs and translating them into clear functional requirements." },
  { icon: Workflow, t: "Solution & Process Design", d: "Designing streamlined processes and practical solution approaches." },
  { icon: AppWindow, t: "Digital Application Development", d: "Guiding enhancements and new digital applications end to end." },
  { icon: Network, t: "System Integration", d: "Defining integrations between platforms, partners and channels." },
  { icon: Database, t: "Application & Database Analysis", d: "Analysing application behaviour and data to validate outcomes." },
  { icon: LayoutTemplate, t: "UI/UX & Functional Prototyping", d: "Visualising journeys and screens before development begins." },
  { icon: Users, t: "Stakeholder & Vendor Coordination", d: "Aligning business, technical teams and vendors on scope and delivery." },
];

const skills = [
  { icon: Briefcase, t: "Business & Functional", items: ["Requirement Gathering", "Business Process Analysis", "Functional Specification", "Change Request Documentation", "Business Rules & Validations", "User Journey Design", "UAT Support"] },
  { icon: Code2, t: "Technology", items: ["Oracle SQL", "System Integration", "API Integration", "Data Analysis", "Application Troubleshooting", "Backend Validation", "Web Applications"] },
  { icon: PenTool, t: "Digital Solution Design", items: ["Functional Prototyping", "UI/UX Flow Design", "Form & Dashboard Design", "Process Flowcharts", "Workflow Design"] },
  { icon: Rocket, t: "Delivery", items: ["Stakeholder Coordination", "Vendor Coordination", "Scope Clarification", "Solution Review", "Implementation Support"] },
];

const highlights = ["Customer Data Capture", "Customer & Channel Partner Journeys", "Validation & Submission", "Review Workflows", "OTP Validation", "Digital Integration", "System Integration Architecture", "Status & Error Handling"];

const steps = ["Understand the Business", "Simplify the Process", "Prototype the Solution", "Define the Integration", "Validate the Data", "Coordinate Development", "Support Implementation"];

const nav = [["About", "about"], ["Expertise", "expertise"], ["Skills", "skills"], ["Work", "work"], ["Approach", "approach"], ["Contact", "contact"]];

function SectionHead({ k, t }: { k: string; t: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
      <h2 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">{t}</h2>
    </div>
  );
}

function Portrait() {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => { setSrc(localStorage.getItem("portrait")); }, []);
  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { const v = r.result as string; setSrc(v); try { localStorage.setItem("portrait", v); } catch {} };
    r.readAsDataURL(f);
  };
  return (
    <label className="group relative mx-auto block aspect-[4/5] w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border border-border bg-secondary shadow-[var(--shadow-soft)]">
      {src ? (
        <img src={src} alt="Subhash Thaliyil" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background font-display text-3xl font-semibold text-primary">ST</div>
          <span className="flex items-center gap-2 text-sm"><Camera className="h-4 w-4" /> Upload your photo</span>
        </div>
      )}
      {src && <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs text-primary opacity-0 transition group-hover:opacity-100">Change photo</span>}
      <input type="file" accept="image/*" className="sr-only" onChange={onFile} />
    </label>
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
        <div className="animate-rise">
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Dubai, UAE</p>
          <h1 className="mt-4 text-5xl font-semibold text-primary md:text-6xl">Subhash Thaliyil</h1>
          <p className="mt-3 text-xl font-medium">Assistant Vice President</p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">Business Applications • Digital Solutions • System Integration</p>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">Bridging business requirements and technology to design practical, scalable digital solutions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">View My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-accent">Contact Me</a>
          </div>
        </div>
        <div className="animate-rise [animation-delay:150ms]"><Portrait /></div>
      </section>

      <section id="about" className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead k="About Me" t="Turning requirements into working solutions" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Technology and business applications professional focused on converting business requirements into practical digital solutions.</p>
            <p>My role involves working across business requirement analysis, solution design, application enhancements, system integrations, process automation, vendor coordination, prototypes, testing and implementation support.</p>
            <p>I work closely with business stakeholders, technical teams and external vendors to translate operational requirements into clear functional specifications and implementable solutions.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead k="Expertise" t="Areas of focus" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: I, t, d }) => (
            <div key={t} className="card-soft p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></div>
              <h3 className="mt-5 font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-muted py-20">
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

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead k="Featured Project" t="Insurance digital ecosystem" />
        <div className="card-soft grid gap-10 p-8 hover:translate-y-0 md:grid-cols-5 md:p-10">
          <div className="md:col-span-2">
            <div className="space-y-2">
              {["Open Finance for Insurance", "Online Portals for Insurance", "UAE e-Invoicing Digital Enablement"].map((p) => (
                <p key={p} className="font-display text-lg font-semibold text-primary">{p}</p>
              ))}
            </div>
            <p className="mt-6 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-primary">Role: Functional / Solution Coordination</p>
            <p className="mt-6 text-muted-foreground">Supporting the design and implementation of an end-to-end Insurance ecosystem and related integrations and regulatory requirements.</p>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2 md:col-span-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{h}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-muted py-20">
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
