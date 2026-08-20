import { Link } from "wouter";
import { CheckCircle, ArrowLeft, MessageSquare, Calendar, CalendarCheck, Clock, Zap, ArrowRight } from "lucide-react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

const FEATURES = [
  { 
    icon: CalendarCheck,
    title: "Real-Time Calendar Sync", 
    desc: "Pulse connects directly to your team's existing calendar. It only offers slots that are actually available, eliminating double-bookings and manual checking." 
  },
  { 
    icon: Zap,
    title: "Frictionless Scheduling", 
    desc: "No redirecting to external booking pages or clunky forms. Visitors pick their preferred time right inside the chat window while their intent is highest." 
  },
  { 
    icon: Clock,
    title: "Zero Back-and-Forth", 
    desc: "Stop playing email tennis. A prospect who decides at 11 PM that they want to speak with you can have their slot locked in before midnight." 
  },
  { 
    icon: Calendar,
    title: "Automated Handoff", 
    desc: "Once a meeting is booked, Pulse automatically captures the prospect's details, qualifies their needs, and attaches a clean summary to the calendar invite." 
  },
];

const IDEAL_FOR = [
  "Consultancies and agencies driving high-intent ad traffic",
  "Legal and financial practices requiring discovery calls",
  "Sales teams focused on increasing their demo booking rate",
  "Any business tired of losing leads to slow email scheduling",
];

export default function ServiceAppointmentBooking() {
  return (
    <div className="min-h-screen" style={{ background: "#f8fbff" }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b px-6 lg:px-10 py-4 flex items-center justify-between transition-all duration-300 hover:shadow-sm" style={{ borderColor: "#e0f2fe" }}>
        <Link href="/">
          <span className="flex items-center gap-3 cursor-pointer group">
            <img src={LOGO} alt="Elvora Strategies" className="h-9 w-auto transition-transform duration-500 group-hover:scale-105" />
            <span className="font-black text-xl text-gray-900 uppercase tracking-widest transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Elvora <span className="transition-colors duration-300" style={{ color: "#F5A623" }}>Strategies</span>
            </span>
          </span>
        </Link>
        <Link href="/#services">
          <span className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 cursor-pointer transition-colors">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> All Services
          </span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)" }}>
        {/* Animated background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full animate-pulse" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 border border-white/30 rounded-full text-white/90 bg-white/10 backdrop-blur-sm">
            Scheduling
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Automated <br/><span style={{ color: "#F5A623" }}>Appointment Booking</span>
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Convert ad traffic directly into booked meetings. Pulse connects to your calendar and schedules qualified prospects in real time.
          </p>
          <button onClick={openChatbot} className="group relative inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] overflow-hidden rounded-sm" style={{ background: "#F5A623", color: "#1a1a1a" }}>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              <CalendarCheck size={18} className="transition-transform duration-300 group-hover:scale-110" /> Book a Demo with Pulse
            </span>
          </button>
        </div>
      </section>

      {/* Deep Dive / Features */}
      <section className="py-28 px-6 lg:px-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Strike while the <span className="relative inline-block text-sky-600">intent is high.<span className="absolute -bottom-1 left-0 right-0 h-1 bg-sky-400 opacity-60 rounded-full" /></span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              When you pay to acquire a visitor, a static contact form isn't enough. Pulse secures the meeting before they have a chance to look at your competitors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group bg-white p-8 border rounded-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] cursor-default" style={{ borderTop: "3px solid #0ea5e9", borderColor: "#e0f2fe" }}>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md" style={{ background: "#e0f2fe" }}>
                      <Icon size={26} style={{ color: "#0284c7" }} className="transition-colors duration-300 group-hover:text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight transition-colors duration-300 group-hover:text-sky-600">{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{f.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-6 lg:px-10 bg-white border-y" style={{ borderColor: "#e0f2fe" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Who needs Automated Scheduling?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {IDEAL_FOR.map((item) => (
              <div key={item} className="group flex items-center gap-4 p-6 border bg-gray-50 rounded-r-lg transition-all duration-300 hover:bg-sky-50 hover:border-sky-200 hover:shadow-sm" style={{ borderLeft: "4px solid #0ea5e9", borderColor: "#e5e7eb" }}>
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <CheckCircle size={20} style={{ color: "#0ea5e9" }} />
                </div>
                <span className="text-gray-700 text-sm font-medium leading-relaxed transition-colors duration-300 group-hover:text-sky-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: "#0ea5e9" }}>
        {/* Abstract background rings */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 border-[40px] border-white/5 rounded-full" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 border-[30px] border-white/5 rounded-full" />

        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase mb-5 block text-sky-200">Fill Your Calendar</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stop losing leads to email tennis.
          </h2>
          <p className="text-white/90 mb-12 text-lg font-medium">Let Pulse handle your scheduling and wake up to a calendar full of qualified meetings.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={openChatbot}
              className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-sm"
              style={{ background: "#F5A623", color: "#1a1a1a" }}
            >
              <MessageSquare size={18} className="transition-transform duration-300 group-hover:-translate-y-1" /> See How It Books
            </button>
            <Link href="/#pricing">
              <span className="group inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-[#0ea5e9] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer rounded-sm">
                View Pricing <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t bg-white" style={{ borderColor: "#e0f2fe" }}>
        <p className="text-gray-400 text-sm font-medium tracking-wide">© {new Date().getFullYear()} Elvora Strategies. All rights reserved.</p>
      </footer>
    </div>
  );
}