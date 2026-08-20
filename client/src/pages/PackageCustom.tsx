import { Link } from "wouter";
import { CheckCircle, ArrowLeft, MessageSquare, Building2, Globe, Zap, Shield, Mail, Linkedin, Phone } from "lucide-react";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

const FEATURES = [
  { title: "Everything in Growth", desc: "Includes all Growth features: advanced qualification flows, dedicated onboarding support, quarterly strategy reviews, and priority support." },
  { title: "Unlimited Conversations", desc: "No monthly cap. Pulse handles every visitor interaction — however many arrive — without any overage charges." },
  { title: "Multi-Location Deployment", desc: "Deploy Pulse across multiple websites, offices, or brands from a single account. Each location gets its own trained assistant." },
  { title: "Custom Integrations & Workflows", desc: "We build bespoke integrations with your existing systems — your CRM, your practice management software, your internal tools. If it has an API, we can connect it." },
  { title: "Dedicated Account Manager", desc: "A named account manager who knows your business, monitors your performance, and proactively suggests improvements — not a support ticket queue." },
  { title: "SLA-Backed Support", desc: "Formal service level agreement with guaranteed response and resolution times. Enterprise-grade reliability for businesses that can't afford downtime." },
];

const USE_CASES = [
  { icon: Building2, title: "Multi-Site Businesses", desc: "Law firms, estate agencies, or care home groups with multiple locations — each site gets its own trained Pulse assistant." },
  { icon: Globe, title: "Complex Integrations", desc: "Businesses with bespoke CRM systems, practice management software, or internal workflows that need custom API connections." },
  { icon: Zap, title: "High-Volume Practices", desc: "Firms receiving hundreds of enquiries per week who need unlimited capacity and dedicated performance management." },
  { icon: Shield, title: "Regulated Industries", desc: "Highly regulated sectors (financial services, legal, healthcare) requiring bespoke compliance flows and data handling agreements." },
];

export default function PackageCustom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Elite Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b px-6 lg:px-10 py-4 flex items-center justify-between shadow-sm" style={{ borderColor: "#e0f2fe" }}>
        <Link href="/">
          <span className="flex items-center gap-3 cursor-pointer group">
            <img src={LOGO} alt="Elvora Strategies" className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
            <span className="font-bold text-xl text-gray-900 tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Elvora <span style={{ color: "#F5A623" }}>Strategies</span>
            </span>
          </span>
        </Link>
        <Link href="/#pricing">
          <span className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 cursor-pointer transition-colors">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> All Plans
          </span>
        </Link>
      </nav>

      {/* Elite Hero Section */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0369a1 50%, #0284c7 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 border border-white/30 rounded-full text-white/90 bg-white/10 backdrop-blur-md shadow-sm">
            Custom Enterprise Tier
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Built Around <span style={{ color: "#F5A623" }}>Your Business</span>
          </h1>
          <p className="text-white/80 text-lg mb-6 font-medium">Pricing tailored to your exact requirements</p>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            For businesses that need more than a standard plan — unlimited conversations, multi-location deployment, custom integrations, and a dedicated account manager.
          </p>
          <button 
            onClick={openChatbot} 
            className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-9 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] rounded-xl" 
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare size={18} className="transition-transform duration-300 group-hover:rotate-12" /> Start the Conversation
          </button>
        </div>
      </section>

      {/* What's Included — Bento Grid Style */}
      <section className="py-28 px-6 lg:px-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-widest uppercase mb-3 block text-sky-500">Enterprise Capabilities</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Everything in the <span className="text-sky-600">Custom Plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((f) => (
              <div 
                key={f.title} 
                className="group bg-white p-8 border rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]" 
                style={{ borderTop: "4px solid #F5A623", borderColor: "#e0f2fe" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-amber-100">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight transition-colors duration-300 group-hover:text-amber-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 lg:px-10 bg-white border-y" style={{ borderColor: "#e0f2fe" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Designed For Complex Deployments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon;
              return (
                <div key={uc.title} className="group p-8 border bg-slate-50 rounded-[2rem] transition-all duration-300 hover:bg-sky-50 hover:border-sky-200 hover:shadow-md" style={{ borderLeft: "4px solid #0ea5e9", borderColor: "#e5e7eb" }}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{uc.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plan Navigation links */}
      <section className="py-16 px-6 lg:px-10" style={{ background: "#f0f9ff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/packages/growth">
            <span className="font-bold text-sm cursor-pointer hover:underline text-sky-600">← Explore Growth Plan</span>
          </Link>
        </div>
      </section>

      {/* Elite Call to Action */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: "#1e3a5f" }}>
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-amber-400">Tailored Architecture</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's build something bespoke.
          </h2>
          <p className="text-white/80 mb-10 text-lg font-medium">Tell us what you need and we'll have a tailored proposal to you within 48 hours.</p>
          <button
            onClick={openChatbot}
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-9 py-4 rounded-xl shadow-2xl transition-transform hover:scale-105"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare size={18} /> Start the Conversation
          </button>
        </div>
      </section>

      {/* Elite 4-Column Footer */}
      <footer className="pt-20 pb-12 border-t bg-white" style={{ borderColor: "#e0f2fe" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={LOGO} alt="Elvora Strategies logo" className="h-10 w-auto" />
                <span className="font-bold text-lg text-gray-900 tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Elvora <span style={{ color: "#F5A623" }}>Strategies</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Engineered AI chatbot receptionists capturing and qualifying high-intent leads 24/7 for elite service firms.
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">Navigation</p>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li><Link href="/#services"><span className="hover:text-amber-500 transition-colors cursor-pointer">Capabilities</span></Link></li>
                <li><Link href="/#industries"><span className="hover:text-amber-500 transition-colors cursor-pointer">Industries</span></Link></li>
                <li><Link href="/#pricing"><span className="hover:text-amber-500 transition-colors cursor-pointer">Pricing Tiers</span></Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">Compliance</p>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li><Link href="/privacy-policy"><span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy Policy</span></Link></li>
                <li><Link href="/terms-of-use"><span className="hover:text-amber-500 transition-colors cursor-pointer">Terms of Use</span></Link></li>
                <li><Link href="/data-security"><span className="hover:text-amber-500 transition-colors cursor-pointer">Data &amp; Security</span></Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-5">Manchester Office</p>
              <address className="not-italic text-sm text-slate-500 leading-relaxed mb-4">
                First Floor, Swan Buildings,<br /> 20 Swan Street, Manchester, M4 5JW
              </address>
              <div className="flex items-center gap-3">
                <a href="mailto:info@elvorastrategies.com" className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"><Mail size={16} /></a>
                <a href="https://www.linkedin.com/company/elvora-strategies" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"><Linkedin size={16} /></a>
                <a href="tel:+441615150022" className="w-9 h-9 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"><Phone size={16} /></a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400" style={{ borderColor: "#f0e8d8" }}>
            <p>© 2026 Elvora Strategies Ltd. All rights reserved.</p>
            <p>Manchester, United Kingdom</p>
          </div>
        </div>
      </footer>
    </div>
  );
}