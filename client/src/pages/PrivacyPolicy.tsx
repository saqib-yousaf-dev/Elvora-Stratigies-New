import {
  ArrowLeft,
  Shield,
  Mail,
  Linkedin,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#f8fbff", minHeight: "100vh" }}>
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
        <Link href="/">
          <span className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 cursor-pointer transition-colors">
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />{" "}
            Back to Home
          </span>
        </Link>
      </nav>

      {/* Elite Hero Section */}
      <section
        className="relative py-24 px-6 lg:px-10 overflow-hidden text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #0369a1 50%, #0284c7 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Shield size={14} className="text-amber-400" /> UK GDPR Compliant
            Governance
          </div>
          <h1
            className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Privacy <span style={{ color: "#F5A623" }}>Policy</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Transparency is core to how we operate. Read how we protect and
            manage personal data across our systems.
          </p>
          <p className="text-xs text-sky-200 mt-6 tracking-widest uppercase font-semibold">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Legal Content Container */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div
          className="bg-white p-10 lg:p-14 rounded-[2.5rem] border shadow-xl shadow-sky-900/5 space-y-12 text-gray-700"
          style={{ borderColor: "#e0f2fe" }}
        >
          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              1. Who We Are
            </h2>
            <p className="leading-relaxed">
              ELVORASTRATEGIES LTD is an AI automation agency based in
              Manchester, UK. We build bespoke AI chatbot receptionists for
              businesses. Our registered office is First Floor, Swan Buildings,
              20 Swan Street, Manchester, M4 5JW. You can contact us at{" "}
              <a
                href="mailto:info@elvorastrategies.com"
                className="font-semibold underline text-sky-600"
              >
                info@elvorastrategies.com
              </a>{" "}
              or{" "}
              <a
                href="tel:+441615150022"
                className="font-semibold underline text-sky-600"
              >
                01615 150022
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              2. What Data We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              We collect data in two distinct contexts:
            </p>
            <div className="space-y-4">
              <div
                className="p-5 bg-slate-50 border rounded-2xl"
                style={{ borderColor: "#e0f2fe" }}
              >
                <p className="font-bold text-gray-900 mb-1">
                  a) Website visitors (elvorastrategies.com)
                </p>
                <p className="text-sm text-gray-600">
                  If you contact us via our chatbot, email, or WhatsApp, we may
                  collect your name, email address, phone number, and the
                  content of your enquiry.
                </p>
              </div>
              <div
                className="p-5 bg-slate-50 border rounded-2xl"
                style={{ borderColor: "#e0f2fe" }}
              >
                <p className="font-bold text-gray-900 mb-1">
                  b) End users of our clients' Pulse AI receptionists
                </p>
                <p className="text-sm text-gray-600">
                  When a visitor interacts with a Pulse AI receptionist deployed
                  on a client's website, we collect information on behalf of
                  that client. This includes contact details, enquiry summaries,
                  and conversation transcripts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              3. How We Use Your Data
            </h2>
            <ul className="space-y-3">
              {[
                "To respond to your enquiry or provide the services you have requested",
                "To deliver qualified leads to our clients on whose websites Pulse is deployed",
                "To improve the performance and accuracy of our AI systems",
                "To comply with legal obligations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-sky-500 flex-shrink-0 mt-1"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-gray-900">
              We do not sell your data or use it for third-party advertising.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              4. Legal Basis for Processing (UK GDPR)
            </h2>
            <p className="mb-4 leading-relaxed">
              We process personal data under the following lawful bases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="p-4 border rounded-xl bg-sky-50/40"
                style={{ borderColor: "#bae6fd" }}
              >
                <p className="font-bold text-sky-900 mb-1 text-sm">
                  Legitimate Interests
                </p>
                <p className="text-xs text-slate-600">
                  To deliver lead capture services to our clients.
                </p>
              </div>
              <div
                className="p-4 border rounded-xl bg-sky-50/40"
                style={{ borderColor: "#bae6fd" }}
              >
                <p className="font-bold text-sky-900 mb-1 text-sm">
                  Contractual Necessity
                </p>
                <p className="text-xs text-slate-600">
                  To fulfil service agreements with clients.
                </p>
              </div>
              <div
                className="p-4 border rounded-xl bg-sky-50/40"
                style={{ borderColor: "#bae6fd" }}
              >
                <p className="font-bold text-sky-900 mb-1 text-sm">Consent</p>
                <p className="text-xs text-slate-600">
                  Where visitors interact with an active Pulse AI assistant.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              5. Data Retention &amp; Security
            </h2>
            <p className="leading-relaxed mb-4">
              Lead data is retained as long as required to fulfil service
              agreements. Daily automated backups are kept on a 14-day rolling
              retention cycle.
            </p>
            <p className="leading-relaxed">
              We employ strict technical measures including HTTPS/SSL encryption
              in transit, encryption at rest for sensitive lead fields, and
              firewall-protected private servers. For full details, visit our{" "}
              <Link href="/data-security">
                <span className="text-sky-600 underline font-semibold cursor-pointer">
                  Data &amp; Security page
                </span>
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b"
              style={{
                fontFamily: "'Playfair Display', serif",
                borderColor: "#e0f2fe",
              }}
            >
              6. Your Data Rights
            </h2>
            <p className="mb-3 leading-relaxed">
              Under UK GDPR, you hold rights to access, correct, erase, or
              restrict processing of your personal data, as well as lodge
              complaints with the ICO (ico.org.uk).
            </p>
            <p className="leading-relaxed">
              To exercise any rights, reach out directly at{" "}
              <a
                href="mailto:info@elvorastrategies.com"
                className="font-semibold underline text-sky-600"
              >
                info@elvorastrategies.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Elite Call to Action */}
      <section
        className="relative py-20 px-6 lg:px-10 overflow-hidden text-center text-white"
        style={{ background: "#1e3a5f" }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-amber-400">
            Compliant Infrastructure
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience Pulse in Action
          </h2>
          <button
            onClick={openChatbot}
            className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <Shield size={18} /> Test Live Demo
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
