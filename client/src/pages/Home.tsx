/**
 * Elvora Strategies — Pulse Signal redesign
 * Elite SaaS / Agency Presentation with Advanced Bento Grid & Premium Light UI.
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Bot,
  Zap,
  Globe,
  Shield,
  ChevronRight,
  Mail,
  Linkedin,
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Star,
  ChevronDown,
  LineChart,
  Briefcase,
  Home as HomeIcon,
  TrendingUp,
  Heart,
  PieChart,
  Activity,
  Lightbulb,
  Database,
  Lock,
  XCircle,
} from "lucide-react";

// Correct logo path pointing to public/assets
const LOGO_TRANSPARENT = "/assets/elvora_icon_transparent.png";
const ABOUT_VISUAL = "/assets/image-2.png";
const HERO_VIDEO = "/assets/video-1.mp4";

// Opens the Elvora chatbot widget programmatically
function openChatbot() {
  const launcher = document.getElementById("pulse-launcher");
  if (launcher) {
    launcher.click();
  }
}

// 6 Services for the Perfect Bento Box Grid
const SERVICES = [
  {
    icon: Bot,
    title: "AI Chatbot Receptionist",
    desc: "Think of Pulse as your most capable receptionist — permanently at their desk, never off sick. The moment a visitor lands, Pulse is there to guide them.",
    tag: "Core Service",
    color: "sky",
    link: "/services/chatbot",
  },
  {
    icon: Zap,
    title: "Lead Qualification",
    desc: "Pulse doesn't just take a message. It asks the right questions, qualifying each visitor before the chat ends.",
    tag: "Intelligence",
    color: "amber",
    link: "/services/lead-qualification",
  },
  {
    icon: Bot,
    title: "Appointment Booking",
    desc: "Pulse connects to your calendar and books appointments in real time — no back-and-forth, no missed slots.",
    tag: "Scheduling",
    color: "sky",
    link: "/services/appointment-booking",
  },
  {
    icon: Zap,
    title: "CRM & Inbox Sync",
    desc: "Every conversation flows directly into your systems — fully formatted, tagged by enquiry type, and ready to act on.",
    tag: "Integrations",
    color: "amber",
    link: "/services/crm-integration",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    desc: "Pulse speaks over 40 languages fluently. Capture international leads without hiring a massive multilingual support team.",
    tag: "Global Reach",
    color: "sky",
    link: "/services/chatbot",
  },
  {
    icon: LineChart,
    title: "Conversation Analytics",
    desc: "Discover exactly what your market is asking for with real-time sentiment and trending objection tracking.",
    tag: "Insights",
    color: "amber",
    link: "/services/lead-qualification",
  },
];

const INDUSTRIES = [
  { name: "Law Firms", icon: Briefcase },
  { name: "Insurance Brokers", icon: Shield },
  { name: "Estate Agents", icon: HomeIcon },
  { name: "Financial Advisors", icon: TrendingUp },
  { name: "Care Homes", icon: Heart },
  { name: "Accountants", icon: PieChart },
  { name: "Medical Practices", icon: Activity },
  { name: "Consultancies", icon: Lightbulb },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn your business, tone, and goals in a focused 30-minute session.",
  },
  {
    step: "02",
    title: "Custom Build",
    desc: "Your AI receptionist is trained exclusively on your business — no generic scripts.",
  },
  {
    step: "03",
    title: "Integration",
    desc: "We deploy seamlessly to your website and connect to your CRM or inbox.",
  },
  {
    step: "04",
    title: "Go Live",
    desc: "Your AI receptionist starts capturing and qualifying leads from day one.",
  },
];

// Direct Botpress-killer marquee items comparing Elvora's managed service against DIY tools
const TICKER_ITEMS = [
  "Better Than Botpress: 100% Fully Managed",
  "No Botpress Node Builders Required",
  "Beyond Botpress: Bespoke Enterprise Training",
  "Zero DIY Setup (Unlike Botpress)",
  "Dedicated Engineering Support vs Self-Serve",
  "Custom Code & Native CRM Sync",
  "No Drag-and-Drop Limitations",
  "Always On — 24/7",
  "Qualifies Every Visitor",
  "Books Appointments Live",
  "No Generic Templates",
  "Deployed For You in Under 2 Weeks",
];

// ─── Floating Pulse Agent Button ──────────────────────────────────────────────
function FloatingChatbot() {
  return (
    <button
      onClick={openChatbot}
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(245,166,35,0.5)] transition-transform duration-300 hover:scale-110 group border-2 border-white/20"
      style={{
        background: "linear-gradient(135deg, #F5A623 0%, #d97706 100%)",
      }}
      aria-label="Chat with Pulse"
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-amber-400"></div>
      <MessageSquare
        size={26}
        className="text-white relative z-10 group-hover:-rotate-12 transition-transform duration-300"
      />
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-sky-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/">
          <span className="flex items-center gap-3 cursor-pointer group">
            <img
              src={LOGO_TRANSPARENT}
              alt="Elvora Strategies"
              className="h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="font-bold text-xl tracking-tight text-gray-900"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Elvora{" "}
              <span
                className="transition-colors duration-300"
                style={{ color: "#F5A623" }}
              >
                Strategies
              </span>
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-semibold text-gray-700 hover:text-amber-500 transition-colors flex items-center gap-1">
              Services{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}`}
            >
              <div
                className="bg-white/95 backdrop-blur-xl border shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl w-64 p-2 flex flex-col gap-1"
                style={{ borderColor: "#e0f2fe" }}
              >
                {SERVICES.map(s => (
                  <Link key={s.title} href={s.link}>
                    <span className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-xl transition-colors cursor-pointer">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map(l => (
            <a key={l.label} href={l.href}>
              <span className="text-sm font-semibold text-gray-700 hover:text-amber-500 transition-colors cursor-pointer">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openChatbot}
            className="font-bold text-sm px-7 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            Meet Pulse
          </button>
        </div>

        <button
          className="lg:hidden text-gray-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-sky-100 px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
            Services
          </p>
          {SERVICES.map(s => (
            <Link key={s.title} href={s.link}>
              <span
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 font-medium py-2 pl-4 border-b border-gray-50 block cursor-pointer"
              >
                {s.title}
              </span>
            </Link>
          ))}
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mt-4 mb-2">
            Menu
          </p>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              <span className="text-gray-800 font-medium py-2 border-b border-gray-100 block cursor-pointer">
                {l.label}
              </span>
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openChatbot();
            }}
            className="mt-4 font-semibold text-sm px-6 py-3 text-center w-full rounded-xl"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            Meet Pulse
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Mobile Optimized Signal Bar ──────────────────────────────────────────────
function SignalBar() {
  return (
    <section className="pt-[80px] bg-white">
      <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50/40 via-white to-amber-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center justify-center gap-2.5">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase">
              Pulse is live{" "}
              <span className="text-slate-400 font-normal hidden lg:inline">
                — managing instant website lead responses.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a
              href="https://wa.me/447930234660"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1 uppercase tracking-wider"
            >
              <MessageSquare size={13} />{" "}
              <span className="hidden sm:inline">
                WhatsApp: +44 7930 234660
              </span>
              <span className="sm:hidden">WhatsApp Us</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <button
              onClick={openChatbot}
              className="group flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-sky-600 hover:text-amber-500 transition-colors uppercase tracking-wider"
            >
              Test Live Demo{" "}
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f7fcff 0%, #e0f2fe 58%, #fffbeb 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(245,166,35,0.15), transparent 40%), radial-gradient(circle at 40% 60%, rgba(14,165,233,0.15), transparent 40%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          {/* Left Column: Copy */}
          <div className="max-w-3xl relative z-10">
            <div
              className="inline-flex items-center gap-2 border px-4 py-2 mb-8 rounded-full bg-white/50 backdrop-blur-md shadow-sm"
              style={{ borderColor: "#bae6fd" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#0ea5e9" }}
              />
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-slate-600">
                The Fully Managed Alternative to Botpress & DIY Builders
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-950 leading-[1.05] tracking-tight mb-7 drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every visitor deserves a <br className="hidden md:block" />
              <span className="relative inline-block z-10 text-slate-950 mt-2">
                first response.
                <span className="absolute bottom-1 left-0 right-0 h-4 md:h-5 bg-amber-300 opacity-70 rounded-sm -z-10 transform -rotate-1 shadow-sm" />
              </span>
            </h1>

            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
              Stop wrestling with Botpress node editors and messy drag-and-drop
              builders. Elvora builds, deploys, and fully manages your custom AI
              receptionist from end to end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={openChatbot}
                className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] rounded-xl"
                style={{ background: "#F5A623", color: "#1a1a1a" }}
              >
                Try Pulse{" "}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 border-2 font-bold text-sm px-8 py-4 text-slate-700 transition-all duration-300 hover:bg-white hover:border-sky-400 hover:shadow-lg rounded-xl"
                style={{ borderColor: "#bae6fd" }}
              >
                Explore plans{" "}
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                "100% managed by Elvora",
                "No Botpress builders required",
                "Dedicated expert support",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <CheckCircle size={16} style={{ color: "#0ea5e9" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Combined Elite Card */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-amber-300 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(14,165,233,0.18)] transition-transform duration-700 hover:-translate-y-2">
              {/* Upper Section: video-1 with lowered opacity (45%) */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-45"
                  src={HERO_VIDEO}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white drop-shadow-md">
                  <p className="text-xs uppercase tracking-[0.16em] font-bold text-sky-300 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />{" "}
                    Live Preview
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    A better first conversation.
                  </p>
                </div>
              </div>

              {/* Lower Section: image-1.png with higher visibility/translucent overlay */}
              <div
                className="p-6 lg:p-8 relative bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image-1.png')" }}
              >
                {/* Lighter overlay (30% white) to make image-1 pop vibrantly */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-sky-200/60">
                    <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 shadow-inner border border-sky-200">
                      <Bot size={20} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">
                        Pulse
                      </p>
                      <p className="text-[11px] font-medium text-slate-600">
                        Your AI receptionist
                      </p>
                    </div>
                    <span
                      className="ml-auto text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                      style={{ background: "#dcfce7", color: "#15803d" }}
                    >
                      Online
                    </span>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div
                      className="max-w-[88%] p-4 rounded-2xl rounded-tl-sm shadow-md font-medium border border-sky-200 bg-white/95"
                      style={{ color: "#0369a1" }}
                    >
                      Hi, I’m Pulse. How can I help with your enquiry today?
                    </div>
                    <div
                      className="ml-auto max-w-[82%] p-4 rounded-2xl rounded-tr-sm border border-slate-200 shadow-sm font-medium bg-white/95"
                      style={{ color: "#334155" }}
                    >
                      I’d like to understand whether your service is right for
                      me.
                    </div>
                    <div
                      className="max-w-[88%] p-4 rounded-2xl rounded-tl-sm shadow-md font-medium border border-sky-200 bg-white/95"
                      style={{ color: "#0369a1" }}
                    >
                      Of course. I can explain how it works and make sure the
                      right person receives your enquiry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Elite Seamless Data Stream Ticker (Botpress Killer) ─────────────────────
function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="py-5 overflow-hidden bg-white border-y border-sky-100 relative shadow-sm">
      {/* Luxurious Edge Gradient Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-36 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      {/* Unbroken, smooth continuous telemetry stream */}
      <div
        className="flex gap-16 whitespace-nowrap items-center hover:[animation-play-state:paused]"
        style={{
          width: "max-content",
          animation: "marqueeScroll 45s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 group cursor-default select-none"
          >
            <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-800 group-hover:text-amber-500 transition-colors">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_10px_rgba(245,166,35,0.7)] flex-shrink-0 group-hover:scale-125 transition-transform" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServiceCard({ s, index }: { s: (typeof SERVICES)[0]; index: number }) {
  const Icon = s.icon;
  const isBlue = s.color === "sky";

  const spanClass =
    index === 0
      ? "md:col-span-2 lg:col-span-2"
      : index === 3
        ? "md:col-span-2 lg:col-span-2"
        : index === 4
          ? "md:col-span-2 lg:col-span-2"
          : "col-span-1 lg:col-span-1";

  return (
    <Link href={s.link}>
      <div
        className={`group relative flex flex-col h-full bg-white border border-sky-100 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(14,165,233,0.12)] ${spanClass}`}
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${isBlue ? "from-sky-50/50 to-transparent" : "from-amber-50/50 to-transparent"}`}
        />

        <div className="absolute -right-12 -bottom-12 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 group-hover:scale-125 group-hover:-rotate-12 pointer-events-none z-0">
          <Icon size={280} className="text-slate-900" />
        </div>

        <div
          className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2.5"
          style={{
            background: isBlue
              ? "linear-gradient(90deg, #0ea5e9, #7dd3fc)"
              : "linear-gradient(90deg, #F5A623, #fde047)",
          }}
        />

        <div className="p-10 md:p-12 flex-1 flex flex-col relative z-10">
          <div className="flex justify-between items-start mb-10 flex-wrap gap-4">
            <div
              className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg"
              style={{ background: isBlue ? "#e0f2fe" : "#fef3c7" }}
            >
              <Icon
                size={30}
                style={{ color: isBlue ? "#0284c7" : "#d97706" }}
                className="transition-colors duration-300"
              />
            </div>

            <span
              className="text-xs font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-colors duration-300 shadow-sm"
              style={{
                color: isBlue ? "#0ea5e9" : "#d97706",
                borderColor: isBlue ? "#bae6fd" : "#fde68a",
                background: isBlue ? "#f0f9ff" : "#fffbeb",
              }}
            >
              {s.tag}
            </span>
          </div>

          <h3
            className={`font-bold text-gray-900 mb-5 transition-colors duration-300 group-hover:text-gray-700 ${index === 0 || index === 3 || index === 4 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {s.title}
          </h3>

          <p className="text-lg leading-relaxed text-gray-500 mb-12 flex-1 max-w-2xl">
            {s.desc}
          </p>

          <div
            className="mt-auto flex items-center font-bold text-sm md:text-base uppercase tracking-widest transition-all duration-300"
            style={{ color: isBlue ? "#0284c7" : "#d97706" }}
          >
            <span className="relative overflow-hidden flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
              Explore Feature
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:bg-current group-hover:text-white"
                style={{ background: isBlue ? "#e0f2fe" : "#fef3c7" }}
              >
                <ArrowRight size={16} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-end mb-24">
          <div>
            <span className="flex items-center gap-3 text-xs font-black tracking-widest uppercase mb-6 text-sky-500">
              <div className="h-px w-8 bg-sky-500" /> What Pulse Does
            </span>
            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              One AI Receptionist. <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                Every Capability You Need.
                <span className="absolute -bottom-3 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-200" />
              </span>
            </h2>
          </div>
          <div
            className="lg:border-l-4 lg:pl-10"
            style={{ borderColor: "#bae6fd" }}
          >
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] mb-4 text-sky-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Pulse capability map
            </div>
            <p className="text-gray-500 text-xl leading-relaxed">
              Pulse is trained around your business and can take the first
              conversation from question to informed handover. Select a
              capability to dive deeper.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, index) => (
            <ServiceCard key={s.title} s={s} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  return (
    <section
      id="industries"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-sky-50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-amber-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-black tracking-widest uppercase mb-4 text-sky-500">
            Industries We Serve
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built for Businesses That{" "}
            <span className="relative inline-block mt-2 lg:mt-0">
              Can't Miss a Lead
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-500 mt-8 text-lg md:text-xl">
            Pulse is engineered for high-intent, high-value service sectors
            where every delayed response equals lost revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(ind => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="group relative p-8 rounded-3xl bg-white border border-sky-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.1)] cursor-default"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-sky-50 to-transparent pointer-events-none" />

                <div className="absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-[0.05] transition-all duration-700 group-hover:scale-150 group-hover:-rotate-12 pointer-events-none">
                  <Icon size={180} className="text-sky-900" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-600 group-hover:-rotate-6 shadow-sm border border-sky-100 group-hover:border-amber-200">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-sky-800"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {ind.name}
                  </h3>
                  <div className="w-10 h-1 rounded-full bg-sky-200 transition-all duration-500 group-hover:w-full group-hover:bg-amber-400" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-10 lg:p-14 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-sky-100 bg-white shadow-xl shadow-sky-900/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-amber-50/50" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] mb-4 text-sky-600">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              Pulse learns your context
            </div>
            <h3
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Don't see your industry?
            </h3>
            <p className="text-gray-500 max-w-xl text-lg">
              Pulse is built around your services, language and customer journey
              — not a generic industry template.
            </p>
          </div>
          <button
            onClick={openChatbot}
            className="relative z-10 flex-shrink-0 font-bold px-10 py-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] whitespace-nowrap rounded-xl text-slate-900"
            style={{ background: "#F5A623" }}
          >
            Ask Pulse about your industry
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative group">
            <div className="overflow-hidden aspect-[4/3] bg-sky-100 rounded-3xl border border-sky-200 relative shadow-inner">
              <img
                src={ABOUT_VISUAL}
                alt="Elvora Strategies Team"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/40 to-transparent mix-blend-overlay" />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/50">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">
                  AI Models Live
                </span>
              </div>
            </div>

            <div
              className="absolute -bottom-8 -right-8 bg-white shadow-2xl p-8 max-w-xs rounded-2xl z-10 transition-transform duration-500 group-hover:-translate-y-2"
              style={{ borderLeft: "4px solid #F5A623" }}
            >
              <div
                className="text-5xl font-black text-gray-900 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                100%
              </div>
              <div className="text-gray-600 text-sm font-medium leading-relaxed">
                Bespoke — every AI assistant is built and trained exclusively
                for your business.
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-3 block"
              style={{ color: "#0ea5e9" }}
            >
              About Elvora Strategies
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Build AI That Works{" "}
              <span style={{ color: "#F5A623" }}>For Your Business</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Elvora Strategies is an AI automation agency specialising in
              custom AI-powered chatbot receptionists. Every client gets a
              bespoke AI assistant trained specifically on their business — not
              a generic template, not a chatbot that frustrates visitors.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We work with law firms, estate agents, care homes, financial
              advisors, and any business that receives enquiries and wants to
              convert them faster. Based in Manchester and serving businesses
              across the Northwest and beyond, our AI receptionists greet
              visitors, hold genuine consultative conversations, and deliver
              qualified leads directly to you — 24 hours a day, 7 days a week.
            </p>

            <div
              className="rounded-xl p-6 mb-8 flex gap-4 items-start shadow-sm"
              style={{ background: "#e0f2fe", borderLeft: "4px solid #F5A623" }}
            >
              <MessageSquare
                size={22}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "#0ea5e9" }}
              />
              <div>
                <p className="font-bold text-gray-800 text-sm mb-1">
                  Calls are always welcome
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You are always welcome to call us. We use{" "}
                  <strong>Pulse</strong> as our first point of contact because
                  it is trained on our business and can answer most questions
                  immediately, day or night. If you would prefer to speak with
                  our team, call{" "}
                  <a
                    href="tel:+441615150022"
                    className="font-semibold underline"
                    style={{ color: "#0284c7" }}
                  >
                    01615 150022
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openChatbot}
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 transition-all duration-200 hover:scale-105 rounded-xl"
                style={{ background: "#F5A623", color: "#1a1a1a" }}
              >
                Meet Pulse <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    industry: "Law Firm",
    location: "Manchester",
    result: "34 qualified leads in the first 30 days",
    quote:
      "We handle a high volume of sensitive enquiries — redundancy, divorce, employment disputes. Pulse handles every one of them with exactly the right tone. It doesn't rush people. It doesn't sound robotic. And every morning we have a clean list of qualified leads waiting for us.",
    metric: "34",
    metricLabel: "Leads / Month",
  },
  {
    industry: "Estate Agency",
    location: "Northwest England",
    result: "Response time cut from 6 hours to under 2 minutes",
    quote:
      "Property enquiries don't wait. A buyer who doesn't get a response in the first hour will move on to the next listing. Since Pulse went live, every enquiry is handled instantly — and we get a structured lead with everything we need before we even pick up the phone.",
    metric: "< 2min",
    metricLabel: "Response Time",
  },
  {
    industry: "Insurance Broker",
    location: "UK",
    result: "Zero missed enquiries since going live",
    quote:
      "Weekend enquiries used to disappear into a void. Now Pulse handles them the moment they arrive — asks the right questions, understands what cover they're looking for, and has a qualified summary in our inbox by Monday morning. It's transformed how we start the week.",
    metric: "0",
    metricLabel: "Missed Enquiries",
  },
  {
    industry: "Accountancy Practice",
    location: "Manchester",
    result: "Appointment bookings up 40% in 6 weeks",
    quote:
      "We were spending too much time on initial calls that went nowhere. Pulse now handles that first conversation — it understands what the prospect needs, filters out those who aren't a fit, and books discovery calls directly into our calendar. Our conversion rate has improved significantly.",
    metric: "+40%",
    metricLabel: "Bookings",
  },
];

function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-sky-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest uppercase mb-4 block text-sky-500">
            Results That Speak
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real Outcomes for{" "}
            <span className="relative inline-block mt-2">
              Real Businesses
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-500 mt-8 text-lg md:text-xl">
            Every result below is from a real deployment. No client names — just
            the outcomes that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.industry}
              className={`group p-10 bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-3xl relative overflow-hidden ${index % 2 !== 0 ? "md:translate-y-12" : ""}`}
            >
              <div className="absolute -right-8 -top-12 text-sky-50 opacity-40 group-hover:text-amber-50 group-hover:opacity-30 transition-colors duration-500 pointer-events-none">
                <span className="text-[16rem] font-serif leading-none">"</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-10 border-b border-gray-100 pb-6">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-sky-100"
                    style={{ background: "#f0f9ff", color: "#0369a1" }}
                  >
                    {t.industry}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {t.location}
                  </span>
                </div>

                <div className="mb-8">
                  <div
                    className="text-5xl lg:text-6xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 drop-shadow-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.metric}
                  </div>
                  <div className="text-xs font-black tracking-widest uppercase text-amber-500">
                    {t.metricLabel}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg italic mb-8 font-medium">
                  "{t.quote}"
                </p>

                <div
                  className="inline-flex items-center gap-2 text-sm font-bold bg-sky-50 px-5 py-3 rounded-xl border border-sky-100"
                  style={{ color: "#0ea5e9" }}
                >
                  <CheckCircle size={18} /> {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PRICING_TIERS = [
  {
    name: "Starter",
    monthlyPrice: "£99",
    annualPrice: "£1,069",
    annualMonthly: "£89",
    setupFee: "£100",
    period: "/month",
    tagline: "Perfect for solo practitioners and small offices",
    highlight: false,
    packageUrl: "/packages/starter",
    features: [
      "One custom AI receptionist, fully managed",
      "Lead capture to your inbox, 24/7",
      "250 conversations per month",
      "Standard setup & onboarding",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: "£149",
    annualPrice: "£1,609",
    annualMonthly: "£134",
    setupFee: "£100",
    period: "/month",
    tagline: "Ideal for busy practices",
    highlight: true,
    packageUrl: "/packages/professional",
    features: [
      "Everything in Starter",
      "CRM connection",
      "Custom industry-specific questions",
      "Appointment booking integration",
      "400 conversations per month",
      "Priority support",
      "Monthly performance review",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "£199",
    annualPrice: "£2,149",
    annualMonthly: "£179",
    setupFee: "£100",
    period: "/month",
    tagline: "For growing firms handling higher enquiry volumes",
    highlight: false,
    packageUrl: "/packages/growth",
    features: [
      "Everything in Professional",
      "600 conversations per month",
      "Advanced qualification flows",
      "Dedicated onboarding support",
      "Quarterly strategy review",
    ],
  },
  {
    name: "Custom",
    monthlyPrice: "Let's Talk",
    annualPrice: "Let's Talk",
    annualMonthly: "",
    period: "",
    tagline: "Built entirely around your business needs",
    highlight: false,
    isCustom: true,
    packageUrl: "/packages/custom",
    features: [
      "Everything in Growth",
      "Unlimited conversations",
      "Multi-location deployment",
      "Custom integrations & workflows",
      "Dedicated account manager",
      "SLA-backed support",
    ],
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest uppercase mb-4 block text-sky-500">
            Simple, Transparent Pricing
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            One Product. <span className="text-amber-500">Four Tiers.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            Every plan includes a bespoke receptionist trained on your business.
            Start where your enquiry volume is today, then grow when you need
            to.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full inline-flex items-center relative shadow-inner border border-slate-200">
            <button
              onClick={() => setAnnual(false)}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${!annual ? "bg-white text-sky-900 shadow-md" : "text-slate-500 hover:text-slate-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${annual ? "bg-white text-sky-900 shadow-md" : "text-slate-500 hover:text-slate-700"}`}
            >
              Annual
              <span className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-black bg-amber-400 text-slate-900 shadow-sm border border-amber-200 transform rotate-3">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map(tier => {
            const displayPrice = annual
              ? (tier as any).annualMonthly || (tier as any).annualPrice
              : (tier as any).monthlyPrice;
            const isHighlighted = tier.highlight;

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 border transition-all duration-500 hover:-translate-y-2 rounded-3xl h-full ${
                  isHighlighted
                    ? "bg-[#0284c7] border-[#0ea5e9] shadow-[0_20px_50px_rgba(2,132,199,0.25)] z-10"
                    : "bg-white border-sky-100 hover:shadow-xl"
                }`}
                style={{
                  borderTop: isHighlighted
                    ? "4px solid #F5A623"
                    : "4px solid #0ea5e9",
                }}
              >
                {isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-transparent rounded-3xl pointer-events-none" />
                )}

                {isHighlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded-full shadow-lg"
                    style={{ background: "#F5A623", color: "#1a1a1a" }}
                  >
                    <Star size={12} fill="#1a1a1a" /> Most Popular
                  </div>
                )}

                <span
                  className={`text-xs font-black tracking-widest uppercase mb-4 block ${isHighlighted ? "text-sky-200" : "text-sky-500"}`}
                >
                  {tier.name}
                </span>

                <div className="mb-2 flex items-end gap-1 relative z-10">
                  <span
                    className={`text-5xl font-black ${isHighlighted ? "text-white drop-shadow-sm" : "text-slate-900"}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {displayPrice}
                  </span>
                  {!(tier as any).isCustom && (
                    <span
                      className={`text-base mb-2 font-bold ${isHighlighted ? "text-sky-200" : "text-slate-400"}`}
                    >
                      /mo
                    </span>
                  )}
                </div>

                {annual &&
                  !(tier as any).isCustom &&
                  (tier as any).annualMonthly && (
                    <p
                      className={`text-xs font-bold ${isHighlighted ? "text-amber-300" : "text-sky-600"}`}
                    >
                      Billed as {(tier as any).annualPrice}/year
                    </p>
                  )}
                {!(tier as any).isCustom && (
                  <p
                    className={`text-xs font-medium mt-1 ${isHighlighted ? "text-sky-200" : "text-slate-500"}`}
                  >
                    + {(tier as any).setupFee} setup fee
                  </p>
                )}

                <p
                  className={`text-sm mb-10 mt-6 font-medium ${isHighlighted ? "text-sky-100" : "text-slate-600"}`}
                >
                  {tier.tagline}
                </p>

                <ul className="flex flex-col gap-4 mb-10 flex-1 relative z-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: isHighlighted ? "#F5A623" : "#0ea5e9" }}
                      />
                      <span
                        className={`font-medium leading-relaxed ${isHighlighted ? "text-white" : "text-slate-700"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 relative z-10 mt-auto">
                  <button
                    onClick={openChatbot}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-xl shadow-sm ${
                      isHighlighted
                        ? "bg-amber-500 text-slate-900 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]"
                        : "bg-sky-600 text-white hover:shadow-lg"
                    }`}
                  >
                    {(tier as any).isCustom
                      ? "Tell Us What You Need"
                      : "Ask Pulse about this plan"}
                  </button>
                  <Link href={(tier as any).packageUrl}>
                    <span
                      className={`block w-full py-3 text-center text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline transition-colors ${isHighlighted ? "text-amber-300" : "text-sky-600"}`}
                    >
                      Learn More →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <p className="text-gray-600 text-sm mb-2 font-medium">
            Your assistant never stops working — any conversations beyond your
            monthly allowance are billed at{" "}
            <span className="font-bold text-slate-900">£0.50 each</span>.
          </p>
          <p className="text-gray-500 text-sm">
            Every business is different — if your needs sit outside these tiers,{" "}
            <button
              onClick={openChatbot}
              className="underline font-bold transition-colors"
              style={{ color: "#0284c7" }}
            >
              book a demo
            </button>{" "}
            and we'll build a package around you.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Elvora vs. Botpress Comparison Section (Light Elite UI) ─────────────────
function CompetitorComparison() {
  const comparisonRows = [
    {
      feature: "Setup & Architecture",
      botpress: "Self-serve node editors, drag-and-drop complexity",
      elvora: "100% Done-For-You custom engineering & deployment",
    },
    {
      feature: "Training & Knowledge",
      botpress: "Generic templates & manual prompt configuration",
      elvora: "Trained exclusively on your business data, tone, and workflow",
    },
    {
      feature: "Maintenance & Bugs",
      botpress: "You troubleshoot your own webhooks and system downtime",
      elvora: "Fully managed 24/7 monitoring, zero technical overhead",
    },
    {
      feature: "CRM & System Sync",
      botpress: "Requires third-party glue (Zapier) and manual webhook setups",
      elvora: "Native CRM sync and direct inbox delivery built-in",
    },
    {
      feature: "Support",
      botpress: "Community forums or automated ticketing systems",
      elvora: "Dedicated engineering support & direct expert team access",
    },
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-50/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest uppercase mb-4 block text-sky-500">
            The Ultimate Standard
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Elvora Outshines{" "}
            <span className="text-amber-500">Botpress & DIY Builders</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            Stop wasting hours wrestling with drag-and-drop node builders and
            self-serve templates. See how our white-glove managed service
            compares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Competitor / Botpress Column */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                <XCircle size={26} />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-800"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Self-Serve / Botpress
                </h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  The DIY Approach
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-1">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {row.feature}
                  </p>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-sm">
                    <XCircle
                      size={18}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">{row.botpress}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elvora Column */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border-2 border-sky-400 shadow-[0_30px_80px_rgba(14,165,233,0.15)] flex flex-col relative z-10">
            <div className="absolute -top-4 right-8 bg-[#F5A623] text-slate-900 text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              The Clear Winner
            </div>

            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-sky-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100">
                <CheckCircle size={26} />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-sky-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Elvora Strategies
                </h3>
                <p className="text-xs text-sky-500 uppercase tracking-widest font-black">
                  100% Fully Managed
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-1">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-xs font-black text-sky-400 uppercase tracking-wider">
                    {row.feature}
                  </p>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-sky-50/50 border border-sky-100 text-slate-700 text-sm font-medium">
                    <CheckCircle
                      size={18}
                      className="text-[#F5A623] flex-shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">{row.elvora}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-sky-100">
              <button
                onClick={openChatbot}
                className="w-full py-5 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] rounded-xl text-slate-900 bg-[#F5A623]"
              >
                Experience the Elvora Standard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Animated Process & ROI Calculator ───────────────────────────────────────
function useAnimatedNumber(target: number, duration: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

function Process() {
  const [enquiries, setEnquiries] = useState(50);
  const [dealValue, setDealValue] = useState(2500);

  const targetMonthly = Math.round(enquiries * dealValue * 0.3);
  const targetAnnual = targetMonthly * 12;

  const animatedMonthly = useAnimatedNumber(targetMonthly, 800);
  const animatedAnnual = useAnimatedNumber(targetAnnual, 800);

  return (
    <section
      id="process"
      className="py-32 border-y relative overflow-hidden"
      style={{ background: "#f8fbff", borderColor: "#e0f2fe" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-sky-500">
              How It Works
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Discovery to{" "}
              <span style={{ color: "#F5A623" }}>Live in Days</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-12">
              We engineer your business knowledge into a live first-response
              system. A frictionless pipeline that turns ad clicks into fully
              qualified prospects with zero DIY hassle.
            </p>

            <div className="flex flex-col gap-8 mb-10 relative">
              <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-sky-200 hidden sm:block" />

              {PROCESS.map((p, index) => (
                <div
                  key={p.step}
                  className="group relative flex gap-6 items-start transition-all duration-300 hover:translate-x-2 cursor-default"
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shadow-md transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-white"
                    style={{
                      background: "#ffffff",
                      color: "#F5A623",
                      border: "2px solid #Fef3c7",
                    }}
                  >
                    {p.step}
                  </div>
                  <div className="pt-2">
                    <h4
                      className="font-bold text-gray-900 text-xl mb-2 transition-colors duration-300 group-hover:text-amber-600"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-300 to-amber-300 rounded-3xl blur-xl opacity-30 animate-pulse" />

            <div className="relative bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-3xl overflow-hidden">
              <div className="p-8 md:p-10 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Zap size={24} className="text-amber-500" />
                  <h3
                    className="text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Calculate Your Impact
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-10 font-medium">
                  Model the revenue Pulse can recover from your ad traffic.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-bold text-gray-700">
                        Monthly Missed/Delayed Enquiries
                      </label>
                      <span className="text-sm font-bold text-sky-600">
                        {enquiries}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={200}
                      value={enquiries}
                      onChange={e => setEnquiries(Number(e.target.value))}
                      className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-bold text-gray-700">
                        Average Deal Value
                      </label>
                      <span className="text-sm font-bold text-amber-500">
                        £{dealValue.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={10000}
                      step={100}
                      value={dealValue}
                      onChange={e => setDealValue(Number(e.target.value))}
                      className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="p-10 text-center relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-900" />
                <div className="relative z-10">
                  <p className="text-xs font-bold tracking-widest uppercase mb-4 text-sky-400">
                    Potential Monthly Revenue Recovered
                  </p>
                  <p
                    className="text-6xl font-black mb-3 text-white drop-shadow-md flex justify-center items-baseline gap-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="text-4xl text-amber-400">£</span>
                    {animatedMonthly.toLocaleString()}
                  </p>
                  <p className="text-sm font-bold text-amber-400/80 tracking-wide">
                    +£{animatedAnnual.toLocaleString()} per year
                  </p>
                  <p className="text-xs text-slate-400 mt-6 font-medium">
                    Based on a standard 30% closing rate.
                  </p>
                </div>
              </div>

              <button
                onClick={openChatbot}
                className="w-full py-5 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-amber-400"
                style={{ background: "#F5A623", color: "#1a1a1a" }}
              >
                Ask Pulse about your setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── White Labelling ────────────────────────────────────────────────────────────
function WhiteLabelling() {
  return (
    <section
      id="white-labelling"
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest uppercase mb-4 block text-sky-500">
            Partnership Opportunity
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            White Label <span className="text-amber-500">Pulse</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg md:text-xl leading-relaxed">
            Resell Pulse under your own brand. We handle the complex AI
            infrastructure and maintenance. You own the client relationship and
            recurring revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h3
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Partner With Us?
            </h3>

            {[
              {
                title: "Your Branding, Our Technology",
                desc: "Fully white-labelled interface operating under your logo, colors, and messaging.",
              },
              {
                title: "Recurring Revenue Stream",
                desc: "Access wholesale pricing. You set your retail price, we handle 100% of the tech delivery.",
              },
              {
                title: "Zero Technical Overhead",
                desc: "We manage servers, model updates, security, and maintenance. No DIY headaches.",
              },
              {
                title: "Dedicated Partner Support",
                desc: "Direct priority access to our engineering team for custom feature requests.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-sky-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-50 transition-colors duration-300 group-hover:bg-amber-100">
                    <CheckCircle
                      size={20}
                      className="text-sky-500 transition-colors duration-300 group-hover:text-amber-600"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 mb-2 transition-colors duration-300 group-hover:text-amber-600">
                      {feature.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-b from-amber-300 to-sky-300 rounded-3xl blur-lg opacity-30 pointer-events-none" />

            <div className="relative bg-white/60 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-10 overflow-hidden">
              <div className="flex items-center gap-2 mb-8 pb-6 border-b border-slate-200/50">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-bold tracking-widest uppercase text-slate-400">
                  Partner Portal
                </span>
              </div>

              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Perfect For
              </h3>

              <ul className="space-y-5 mb-10 relative z-10">
                {[
                  "Digital agencies expanding service offerings",
                  "Consultancies adding AI automation to their toolkit",
                  "Web design firms offering AI receptionists",
                  "CRM providers integrating AI lead capture",
                  "Industry-specific software platforms",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-700 font-medium flex items-center gap-4 text-base"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0">
                      <ArrowRight size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById("pulse-launcher")?.click()
                }
                className="w-full py-5 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-xl shadow-lg relative z-10"
                style={{ background: "#F5A623", color: "#1a1a1a" }}
              >
                Explore Partnership
              </button>

              <Globe
                size={200}
                className="absolute -right-10 -bottom-10 text-sky-100 opacity-50 z-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Elite FAQ ("We Believe in Pulse" Section with WhatsApp integration) ───────
function FAQ() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-50 via-white to-white pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="bg-white border border-sky-100 rounded-3xl p-10 md:p-16 text-center shadow-[0_20px_60px_rgba(14,165,233,0.08)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 to-amber-400" />

          <div className="w-20 h-20 mx-auto mb-8 bg-sky-50 rounded-2xl p-0.5 transform rotate-3 hover:rotate-6 transition-transform duration-300 shadow-sm border border-sky-100 hover:border-amber-200">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Bot size={36} className="text-sky-500" />
            </div>
          </div>

          <span className="text-xs font-black tracking-widest uppercase mb-4 block text-sky-500">
            Questions? Let's Talk.
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Believe in <span className="text-amber-500">Pulse</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pulse handles everything — from the first conversation to the final
            handoff. If you have questions about how it works, how it
            integrates, or what it can do for your business, talk to us directly
            via chat or WhatsApp.
          </p>

          {/* Dual Action Buttons: Meet Pulse & Direct WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openChatbot}
              className="inline-flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest px-8 py-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] rounded-xl text-slate-900 w-full sm:w-auto"
              style={{ background: "#F5A623" }}
            >
              <MessageSquare size={20} /> Ask Pulse Your Questions
            </button>

            <a
              href="https://wa.me/447930234660"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest px-8 py-5 transition-all duration-300 hover:scale-105 rounded-xl border-2 text-green-700 bg-white w-full sm:w-auto shadow-sm hover:shadow-md"
              style={{ borderColor: "#22c55e" }}
            >
              <MessageSquare size={20} className="text-green-600" /> Chat on
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Premium Data & Security ──────────────────────────────────────────────────
function DataSecurity() {
  return (
    <section
      id="security"
      className="py-32 relative bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest uppercase mb-4 flex items-center justify-center gap-2 text-sky-500">
            <Shield size={16} /> Bank-Grade Security
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Data is <span className="text-amber-500">Safe With Us.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            We take data protection seriously. Here is exactly what we collect,
            how we protect it, and what rights you have. No compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 border border-sky-100 rounded-3xl bg-white shadow-xl shadow-sky-900/5 transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Database size={28} />
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Collect
            </h3>
            <p className="text-gray-500 text-base mb-8">
              When a visitor interacts with Pulse on your website, we capture:
            </p>
            <ul className="flex flex-col gap-5 mb-8">
              {[
                "Name, email, phone number, a short enquiry summary, and the full conversation transcript",
                "Date and time captured",
                "Browser language and display preferences",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm font-medium text-gray-700"
                >
                  <CheckCircle
                    size={20}
                    className="flex-shrink-0 text-sky-500"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-sky-50 flex items-center gap-3">
              <Lock size={16} className="text-gray-400" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                We never store payment details or passwords.
              </p>
            </div>
          </div>

          <div className="p-10 border border-amber-100 rounded-3xl bg-white shadow-xl shadow-amber-900/5 transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Shield size={28} />
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How It's Protected
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                "Encrypted in transit: HTTPS/SSL between visitors, our server, and lead emails",
                "Encrypted at rest: sensitive lead fields are encrypted in our database",
                "Restricted database access: a dedicated, limited-permission database user",
                "Firewall-protected server: the database is not reachable from outside",
                "Hashed login credentials: passwords are scrambled, never stored as text",
                "Daily automated backups, with 14-day rolling retention",
                "24/7 automated monitoring, with downtime alerts",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm font-medium text-gray-700"
                >
                  <Shield size={20} className="flex-shrink-0 text-amber-500" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white border border-sky-100 px-8 py-4 rounded-full shadow-md transition-transform hover:scale-105">
            <Globe size={24} className="text-sky-500" />
            <span className="text-sm md:text-base font-bold text-gray-800 tracking-wide uppercase">
              100% GDPR Compliant & Fully Insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-hidden="true"
      style={{ background: "#ffffff", borderColor: "#fffafa", height: "8px" }}
    ></section>
  );
}

// ─── Renewed Elite Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="pt-20 pb-12 border-t bg-white"
      style={{ borderColor: "#e0f2fe" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_TRANSPARENT}
                alt="Elvora Strategies logo"
                className="h-10 w-auto"
              />
              <span
                className="font-bold text-lg text-gray-900 tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Elvora <span style={{ color: "#F5A623" }}>Strategies</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engineered AI chatbot receptionists capturing and qualifying
              high-intent leads 24/7 for elite service firms.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">
              Navigation
            </p>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Pricing Tiers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">
              Compliance
            </p>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-amber-500 transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use">
                  <span className="hover:text-amber-500 transition-colors cursor-pointer">
                    Terms of Use
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/data-security">
                  <span className="hover:text-amber-500 transition-colors cursor-pointer">
                    Data &amp; Security
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">
              Manchester Office
            </p>
            <address className="not-italic text-sm text-slate-500 leading-relaxed mb-4">
              First Floor, Swan Buildings,
              <br />
              20 Swan Street, Manchester, M4 5JW
            </address>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@elvorastrategies.com"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                aria-label="Email Us"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/447930234660"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/elvora-strategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="tel:+441615150022"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                aria-label="Call Us"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400"
          style={{ borderColor: "#f0e8d8" }}
        >
          <p>© 2026 Elvora Strategies Ltd. All rights reserved.</p>
          <p>Manchester, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Assembly ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SignalBar />
      <Hero />
      <Ticker />
      <Services />
      <Industries />
      <About />
      <Testimonials />
      <Pricing />
      <CompetitorComparison />
      <Process />
      <WhiteLabelling />
      <FAQ />
      <DataSecurity />
      <Contact />
      <Footer />
      {/* 
        FloatingChatbot has been disabled because the Elvora widget.js script 
        in index.html automatically generates its own chat bubble on the screen.
      */}
      {/* <FloatingChatbot /> */}
    </div>
  );
}
