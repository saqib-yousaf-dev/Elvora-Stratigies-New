/*
 * Elvora Strategies — Blog Post Detail Page
 * Elite Agency Light UI with 3D Transparent Logo & 4-Column Enterprise Footer
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, MessageSquare, Mail, Linkedin, Phone } from "lucide-react";
import { useEffect } from "react";
import { BLOG_POSTS } from "./Blog";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6" style="font-family: \'Playfair Display\', serif">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="text-gray-600 leading-relaxed mb-2 ml-4 list-disc">$1</li>')
    .replace(/(<li[\s\S]+?<\/li>)/g, '<ul class="mb-6 space-y-2">$1</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="text-gray-600 leading-relaxed mb-3 ml-4 list-decimal"><strong class="text-gray-900">$2</strong></li>')
    .replace(/\n\n/g, '</p><p class="text-gray-600 text-lg leading-relaxed mb-6">')
    .replace(/^(?!<[hul])(.+)$/gm, (line) => line.startsWith('<') ? line : `<p class="text-gray-600 text-lg leading-relaxed mb-6">${line}</p>`);
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", post.metaDesc);
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white border rounded-3xl shadow-sm" style={{ borderColor: "#e0f2fe" }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Article not found</h1>
          <Link href="/blog" className="text-sky-600 hover:underline font-bold">← Back to Resource Hub</Link>
        </div>
      </div>
    );
  }

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
        <div className="flex items-center gap-6">
          <Link href="/blog"><span className="text-sm font-semibold text-gray-600 hover:text-sky-600 transition-colors cursor-pointer">Blog</span></Link>
          <button
            onClick={openChatbot}
            className="font-bold text-sm px-6 py-2.5 transition-all duration-300 hover:scale-105 rounded-xl shadow-sm"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            Meet Pulse
          </button>
        </div>
      </nav>

      {/* Elite Hero Section */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 60%, #0369a1 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Resource Hub
          </Link>
          <span className="text-xs font-black tracking-widest uppercase px-3.5 py-1.5 mb-6 inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            {post.category}
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/80 text-sm font-semibold">
            <span className="flex items-center gap-1.5"><Calendar size={15} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto bg-white p-10 lg:p-16 border rounded-[2.5rem] shadow-xl shadow-sky-900/5" style={{ borderColor: "#e0f2fe" }}>
          <p className="text-xl text-sky-900 leading-relaxed mb-10 font-medium border-l-4 pl-6 py-2 bg-sky-50/50 rounded-r-2xl" style={{ borderColor: "#F5A623" }}>
            {post.excerpt}
          </p>
          <div
            className="prose-content text-gray-700"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>
      </article>

      {/* Conversion Banner */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "#0369a1" }}>
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-amber-400">Ready to Upgrade?</span>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to See Pulse in Action?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Book a live demo and see exactly what a bespoke AI receptionist would look like for your business.
          </p>
          <button
            onClick={openChatbot}
            className="inline-flex items-center gap-2 font-bold text-sm px-9 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            style={{ background: "#F5A623", color: "#1a1a1a" }}
          >
            <MessageSquare size={18} /> Book a Live Demo
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