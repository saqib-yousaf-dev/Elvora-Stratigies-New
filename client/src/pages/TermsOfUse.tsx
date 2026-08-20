import { ArrowLeft, FileText, Mail, Linkedin, Phone, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

export default function TermsOfUse() {
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
            <FileText size={14} className="text-amber-400" /> Agency Terms &amp; Conditions
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of <span style={{ color: "#F5A623" }}>Use</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before engaging with Elvora Strategies and our AI receptionist services.
          </p>
          <p className="text-xs text-sky-200 mt-6 tracking-widest uppercase font-semibold">Last updated: August 2026</p>
        </div>
      </section>

      {/* Legal Content Container */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] border shadow-xl shadow-sky-900/5 space-y-12 text-gray-700" style={{ borderColor: "#e0f2fe" }}>
          
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing elvorastrategies.com or subscribing to our AI receptionist services ("Pulse"), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              2. Services &amp; Subscriptions
            </h2>
            <p className="leading-relaxed mb-4">
              Elvora Strategies provides custom AI-powered chatbot receptionists billed on monthly or annual subscription tiers (Starter, Professional, Growth, and Custom). 
            </p>
            <ul className="space-y-3">
              {[
                "Each plan includes a specific monthly conversation allowance as outlined in our pricing.",
                "Conversations exceeding monthly allowances are billed at £0.50 per excess conversation.",
                "Subscriptions renew automatically unless cancelled prior to the billing cycle renewal date."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-sky-500 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content, brand assets, software architecture, code frameworks, and proprietary AI conversational flows on this website are the intellectual property of ELVORASTRATEGIES LTD. Unauthorised reproduction or commercial redistribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              4. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              While our AI receptionists are engineered for high accuracy and uptime, Elvora Strategies shall not be held liable for indirect, incidental, or consequential damages resulting from missed leads, third-party API downtime (such as hosting or LLM providers), or miscommunications handled by automated assistant interactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              5. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Manchester, United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#e0f2fe" }}>
              6. Contact Information
            </h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms of Use, contact us at <a href="mailto:info@elvorastrategies.com" className="font-semibold underline text-sky-600">info@elvorastrategies.com</a> or call <a href="tel:+441615150022" className="font-semibold underline text-sky-600">01615 150022</a>.
            </p>
          </section>

        </div>
      </div>

      {/* Elite Call to Action */}
      <section className="relative py-20 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "#1e3a5f" }}>
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-amber-400">Elite Agency Partnership</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to deploy Pulse?
          </h2>
          <button onClick={openChatbot} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ background: "#F5A623", color: "#1a1a1a" }}>
            <FileText size={18} /> Book a Discovery Call
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