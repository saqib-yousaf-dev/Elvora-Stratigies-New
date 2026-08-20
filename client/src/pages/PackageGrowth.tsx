import { Link } from "wouter";
import { CheckCircle, ArrowLeft, MessageSquare, Mail, Linkedin, Phone, Zap } from "lucide-react";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

const FEATURES = [
  { 
    title: "Everything in Professional", 
    desc: "Includes all Professional features: CRM connection, custom industry questions, appointment booking, priority support, and monthly performance review." 
  },
  { 
    title: "600 Conversations per Month", 
    desc: "Covers up to 600 visitor interactions per month — ideal for growing firms with high enquiry volumes. Any extra conversations are billed at £0.50 each." 
  },
  { 
    title: "Advanced Qualification Flows", 
    desc: "Multi-step, logic-driven qualification sequences that adapt based on visitor responses — ensuring only the most relevant leads reach your team." 
  },
  { 
    title: "Dedicated Onboarding Support", 
    desc: "A dedicated onboarding specialist works with you through the entire setup process — from discovery call to go-live — ensuring Pulse is perfectly calibrated for your business." 
  },
  { 
    title: "Quarterly Strategy Review", 
    desc: "Every quarter, we review your Pulse performance data with you and recommend improvements — new questions, updated flows, seasonal adjustments." 
  },
];

const IDEAL_FOR = [
  "Growing firms handling 400+ enquiries per month",
  "Multi-service practices needing complex qualification logic",
  "Businesses scaling rapidly and needing a dedicated onboarding partner",
  "Teams that want quarterly strategic input on their AI performance",
  "Practices where lead quality matters as much as lead volume",
];

export default function PackageGrowth() {
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
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #0ea5e9 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 border border-white/30 rounded-full text-white/90 bg-white/10 backdrop-blur-md shadow-sm">
            Growth Plan Tier
          </span>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            £199 <span className="text-3xl font-normal text-white/80">/ month</span>
          </h1>
          <p className="text-white/80 text-lg mb-6 font-medium">or <strong className="text-white">£2,149 / year</strong> — save 10%</p>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            For growing firms handling higher enquiry volumes — advanced qualification, dedicated onboarding, and quarterly strategic reviews.
          </p>
          <button 
            onClick={openChatbot} 
            className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-9 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] rounded-xl" 
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare size={18} className="transition-transform duration-300 group-hover:rotate-12" /> Ask Pulse About Growth
          </button>
        </div>
      </section>

      {/* What's Included — Bento Grid Style */}
      <section className="py-28 px-6 lg:px-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-widest uppercase mb-3 block text-sky-500">Scaling Power</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Everything in the <span className="text-sky-600">Growth Plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((f, i) => (
              <div 
                key={f.title} 
                className={`group bg-white p-8 border rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)] ${i === 4 ? 'md:col-span-2' : ''}`} 
                style={{ borderTop: "4px solid #0369a1", borderColor: "#e0f2fe" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-600 shadow-sm border border-sky-100">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight transition-colors duration-300 group-hover:text-sky-600" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {/* Ideal For Section */}
      <section className="py-24 px-6 lg:px-10 bg-white border-y" style={{ borderColor: "#e0f2fe" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ideal For Scaling Firms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {IDEAL_FOR.map((item) => (
              <div key={item} className="group flex items-start gap-4 p-6 border bg-slate-50 rounded-2xl transition-all duration-300 hover:bg-amber-50 hover:border-amber-200 hover:shadow-md" style={{ borderLeft: "4px solid #F5A623", borderColor: "#e5e7eb" }}>
                <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle size={20} style={{ color: "#F5A623" }} />
                </div>
                <span className="text-gray-700 text-base font-medium leading-relaxed group-hover:text-amber-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Navigation links */}
      <section className="py-16 px-6 lg:px-10" style={{ background: "#f0f9ff" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-center">
          <Link href="/packages/professional">
            <span className="font-bold text-sm cursor-pointer hover:underline text-sky-600">← Explore Professional Plan</span>
          </Link>
          <Link href="/packages/custom">
            <span className="font-bold text-sm cursor-pointer hover:underline text-sky-600">Explore Custom Plan →</span>
          </Link>
        </div>
      </section>

      {/* Elite Call to Action */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: "#0369a1" }}>
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-sky-200">Scale Without Limits</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to scale your volume?
          </h2>
          <p className="text-white/90 mb-10 text-lg font-medium">Equip your practice with advanced qualification flows and dedicated support.</p>
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