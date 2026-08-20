import { CheckCircle, Shield, ArrowLeft, Database, Lock, Server, Mail, Linkedin, Phone, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

const PROTECTION_POINTS = [
  { title: "Encrypted in transit", desc: "HTTPS/SSL between website visitors, our dedicated server, and lead notification emails." },
  { title: "Encrypted at rest", desc: "Sensitive lead fields (name, email, phone) are securely encrypted within our database." },
  { title: "Restricted database access", desc: "A dedicated, limited-permission database user profile — never open to public administrative privileges." },
  { title: "Firewall-protected server", desc: "Only essential ports are open; the core database is completely isolated from outside access." },
  { title: "Hashed login credentials", desc: "Passwords are heavily scrambled and securely hashed, never stored as readable text." },
  { title: "Daily automated backups", desc: "14-day rolling retention configured so data is fully protected against accidental loss." },
  { title: "24/7 automated monitoring", desc: "Real-time system alerts are triggered instantly if any performance anomaly occurs." },
];

export default function DataSecurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#f8fbff", minHeight: "100vh" }}>
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
        <Link href="/">
          <span className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 cursor-pointer transition-colors">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Home
          </span>
        </Link>
      </nav>

      {/* Elite Hero Section */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0369a1 50%, #0284c7 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Shield size={14} className="text-amber-400" /> Bank-Grade Security Standards
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Data is <span style={{ color: "#F5A623" }}>Safe With Us.</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We take data protection seriously. Here is exactly what we collect, how we protect it, and what rigorous safeguards are in place.
          </p>
          <p className="text-xs text-sky-200 mt-6 tracking-widest uppercase font-semibold">Last updated: August 2026</p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        
        {/* What We Collect Card */}
        <section className="bg-white p-10 lg:p-14 rounded-[2.5rem] border shadow-xl shadow-sky-900/5 mb-16 relative overflow-hidden" style={{ borderColor: "#e0f2fe" }}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-bl-full -z-0 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Database size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Collect
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              When a visitor interacts with Pulse on your website, we collect the information needed to deliver a qualified lead to your business. The exact data captured is configured per client and may vary depending on your industry, workflow, and requirements. This typically includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Visitor contact details — such as name, email address, and phone number",
                "Enquiry information — a structured summary of the visitor's needs and intent",
                "Conversation transcript — the full record of the interaction between the visitor and Pulse",
                "Contextual data — date, time, browser language, and display preferences",
                "Custom fields configured for your business (case type, property details, budget)"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 border rounded-2xl" style={{ borderColor: "#e0f2fe" }}>
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-sky-500" />
                  <span className="text-gray-700 text-sm leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl border flex items-center gap-4 bg-sky-50/50" style={{ borderColor: "#bae6fd" }}>
              <Lock size={20} className="text-sky-600 flex-shrink-0" />
              <p className="text-sm text-sky-900 font-bold">We never store payment card details or visitor passwords.</p>
            </div>
          </div>
        </section>

        {/* How It's Protected Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-widest uppercase mb-3 block text-sky-500">Defensive Architecture</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              How It Is Protected
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROTECTION_POINTS.map((item, i) => (
              <div key={i} className="bg-white p-8 border rounded-3xl shadow-sm hover:shadow-md transition-all group" style={{ borderTop: "4px solid #0284c7", borderColor: "#e0f2fe" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Stack */}
        <section className="bg-white p-10 lg:p-14 rounded-[2.5rem] border shadow-xl shadow-sky-900/5 mb-16" style={{ borderColor: "#e0f2fe" }}>
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <Server size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Enterprise Infrastructure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Hosted on private, dedicated servers — not shared third-party chatbot platforms.",
              "Advanced AI intelligence powered directly by Claude from Anthropic.",
              "Reliable data architecture powered by PostgreSQL, an industry-standard database.",
              "Load-tested robustly to handle multiple simultaneous high-intent conversations."
            ].map((infra, idx) => (
              <div key={idx} className="p-5 border bg-slate-50 rounded-2xl flex items-start gap-3" style={{ borderColor: "#e0f2fe" }}>
                <CheckCircle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{infra}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance & Governance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 border rounded-3xl shadow-sm" style={{ borderLeft: "4px solid #F5A623", borderColor: "#e0f2fe" }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Comprehensive Insurance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Elvora Strategies is fully backed by Professional Indemnity Insurance, Cyber &amp; Data Insurance, and Legal Protection Insurance.
            </p>
          </div>
          <div className="bg-white p-8 border rounded-3xl shadow-sm" style={{ borderLeft: "4px solid #0ea5e9", borderColor: "#e0f2fe" }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Your Data, Your Control</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data is never shared between clients, and deletion or data access is available on request at any time.
            </p>
          </div>
        </div>

        {/* Contact Box */}
        <section className="bg-gradient-to-r from-sky-500 to-sky-700 text-white p-10 lg:p-14 rounded-[2.5rem] text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Questions or Data Requests?
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 text-base">
            To request data deletion, access your records, or ask any security-related question, contact our compliance team directly.
          </p>
          <a href="mailto:info@elvorastrategies.com" className="inline-block font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ background: "#F5A623", color: "#1a1a1a" }}>
            info@elvorastrategies.com
          </a>
        </section>

      </div>

      {/* Elite Call to Action Banner */}
      <section className="relative py-20 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "#1e3a5f" }}>
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-amber-400">Secure Deployment</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to secure your lead pipeline?
          </h2>
          <button onClick={openChatbot} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ background: "#F5A623", color: "#1a1a1a" }}>
            <MessageSquare size={18} /> Test Pulse Security Live
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