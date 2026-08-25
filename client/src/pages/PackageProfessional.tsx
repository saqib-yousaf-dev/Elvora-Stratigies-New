import { Link } from "wouter";
import {
  CheckCircle,
  ArrowLeft,
  MessageSquare,
  Star,
  Mail,
  Linkedin,
  Phone,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

const FEATURES = [
  {
    title: "Everything in Starter",
    desc: "Includes all Starter features: one custom AI receptionist, 24/7 lead capture, standard setup & onboarding, and email support.",
  },
  {
    title: "CRM Connection",
    desc: "Every lead Pulse captures flows directly into your CRM — fully formatted, tagged by enquiry type, and ready to act on. No manual data entry.",
  },
  {
    title: "Custom Industry-Specific Questions",
    desc: "Pulse asks the questions that matter for your specific industry — qualifying leads against your exact criteria before the conversation ends.",
  },
  {
    title: "Appointment Booking Integration",
    desc: "Pulse connects to your calendar and books appointments in real time. A client who decides at 10pm can book their discovery call before they close the tab.",
  },
  {
    title: "400 Conversations per Month",
    desc: "Covers up to 400 visitor interactions per month. Any conversations beyond your allowance are billed at £0.50 each — your assistant never stops.",
  },
  {
    title: "Priority Support",
    desc: "Jump the queue. Priority email support means your queries are handled first, with faster response times from the Elvora Strategies team.",
  },
  {
    title: "Monthly Performance Review",
    desc: "A monthly summary of your Pulse performance — conversations handled, leads captured, and recommendations for improvement.",
  },
];

const IDEAL_FOR = [
  "Busy law firms and solicitors handling sensitive enquiries",
  "Estate agents and property practices with high enquiry volumes",
  "Insurance brokers needing precise lead qualification",
  "Financial advisors and accountants requiring CRM integration",
  "Any practice that wants full automation from conversation to CRM",
];

export default function PackageProfessional() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Elite Navbar */}
      <nav
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b px-6 lg:px-10 py-4 flex items-center justify-between shadow-sm"
        style={{ borderColor: "#e0f2fe" }}
      >
        <Link href="/">
          <span className="flex items-center gap-3 cursor-pointer group">
            <img
              src={LOGO}
              alt="Elvora Strategies"
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="font-bold text-xl text-gray-900 tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Elvora <span style={{ color: "#F5A623" }}>Strategies</span>
            </span>
          </span>
        </Link>
        <Link href="/#pricing">
          <span className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 cursor-pointer transition-colors">
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />{" "}
            All Plans
          </span>
        </Link>
      </nav>

      {/* Elite Hero Section */}
      <section
        className="relative py-24 px-6 lg:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase rounded-full shadow-md"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <Star size={12} fill="#1a1a1a" /> Most Popular Tier
          </div>
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-white/70">
            Professional Plan
          </span>
          <h1
            className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            £149{" "}
            <span className="text-3xl font-normal text-white/80">/ month</span>
          </h1>
          <p className="text-white/80 text-lg mb-6 font-medium">
            or <strong className="text-white">£1,609 / year</strong> — save 10%
          </p>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Ideal for busy practices that need CRM integration, live appointment
            booking, and industry-specific qualification — fully automated.
          </p>
          <button
            onClick={openChatbot}
            className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-9 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] rounded-xl"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />{" "}
            Ask Pulse About Professional
          </button>
        </div>
      </section>

      {/* What's Included — Bento Grid Style */}
      <section className="py-28 px-6 lg:px-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-widest uppercase mb-3 block text-sky-500">
              Advanced Capabilities
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Everything in the{" "}
              <span className="text-sky-600">Professional Plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`group bg-white p-8 border rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)] ${i === 6 ? "md:col-span-2" : ""}`}
                style={{
                  borderTop: "4px solid #0284c7",
                  borderColor: "#e0f2fe",
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-600 shadow-sm border border-sky-100">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-gray-900 mb-3 text-xl tracking-tight transition-colors duration-300 group-hover:text-sky-600"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section
        className="py-24 px-6 lg:px-10 bg-white border-y"
        style={{ borderColor: "#e0f2fe" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ideal For Busy Practices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {IDEAL_FOR.map(item => (
              <div
                key={item}
                className="group flex items-start gap-4 p-6 border bg-slate-50 rounded-2xl transition-all duration-300 hover:bg-amber-50 hover:border-amber-200 hover:shadow-md"
                style={{
                  borderLeft: "4px solid #F5A623",
                  borderColor: "#e5e7eb",
                }}
              >
                <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle size={20} style={{ color: "#F5A623" }} />
                </div>
                <span className="text-gray-700 text-base font-medium leading-relaxed group-hover:text-amber-900">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Navigation links */}
      <section
        className="py-16 px-6 lg:px-10"
        style={{ background: "#f0f9ff" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-center">
          <Link href="/packages/starter">
            <span className="font-bold text-sm cursor-pointer hover:underline text-sky-600">
              ← Explore Starter Plan
            </span>
          </Link>
          <Link href="/packages/growth">
            <span className="font-bold text-sm cursor-pointer hover:underline text-sky-600">
              Explore Growth Plan →
            </span>
          </Link>
        </div>
      </section>

      {/* Elite Call to Action */}
      <section
        className="relative py-28 px-6 lg:px-10 overflow-hidden"
        style={{ background: "#0284c7" }}
      >
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-sky-200">
            Automate Your Intake
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to upgrade your workflow?
          </h2>
          <p className="text-white/90 mb-10 text-lg font-medium">
            Your fully integrated AI receptionist can be live and syncing to
            your CRM in under 2 weeks.
          </p>
          <button
            onClick={openChatbot}
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-9 py-4 rounded-xl shadow-2xl transition-transform hover:scale-105"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare size={18} /> Book a Discovery Call
          </button>
        </div>
      </section>

      {/* Elite 4-Column Footer */}
      <footer
        className="pt-20 pb-12 border-t bg-white"
        style={{ borderColor: "#e0f2fe" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO}
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
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">
                Navigation
              </p>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li>
                  <Link href="/#services">
                    <span className="hover:text-amber-500 transition-colors cursor-pointer">
                      Capabilities
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/#industries">
                    <span className="hover:text-amber-500 transition-colors cursor-pointer">
                      Industries
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing">
                    <span className="hover:text-amber-500 transition-colors cursor-pointer">
                      Pricing Tiers
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
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
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">
                Manchester Office
              </p>
              <address className="not-italic text-sm text-slate-500 leading-relaxed mb-4">
                First Floor, Swan Buildings,
                <br /> 20 Swan Street, Manchester, M4 5JW
              </address>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:info@elvorastrategies.com"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/elvora-strategies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="tel:+441615150022"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </div>
          <div
            className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400"
            style={{ borderColor: "#f0e8d8" }}
          >
            <p>© 2026 Elvora Strategies Ltd. All rights reserved.</p>
            <p>Manchester, United Kingdom</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
