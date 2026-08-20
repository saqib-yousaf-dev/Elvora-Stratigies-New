/*
 * Elvora Strategies — Blog / Resources Page
 * Elite Agency Light UI with 3D Transparent Logo & 4-Column Enterprise Footer
 */
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Mail, Linkedin, Phone } from "lucide-react";
import { useEffect } from "react";

const LOGO = "/assets/elvora_icon_transparent.png";

function openChatbot() {
  const el = document.getElementById("pulse-launcher");
  if (el) el.click();
}

export const BLOG_POSTS = [
  {
    slug: "ai-chatbot-for-law-firms-uk",
    title: "Why Every UK Law Firm Needs an AI Chatbot Receptionist in 2026",
    metaTitle: "AI Chatbot for Law Firms UK | Elvora Strategies",
    metaDesc: "Discover how AI chatbot receptionists are helping UK law firms capture more leads, respond faster, and never miss a client enquiry — 24 hours a day.",
    category: "Law Firms",
    date: "July 2026",
    readTime: "5 min read",
    excerpt: "Law firms across the UK are losing potential clients every day — not because of their service, but because no one answers the phone at 9pm on a Tuesday. An AI chatbot receptionist changes that.",
    content: `
## The Problem Every Law Firm Recognises

A prospective client searches "family solicitor Manchester" at 10pm. They find your website. They read your services page. They want to get in touch — but your office is closed, your contact form feels impersonal, and they don't want to leave a voicemail.

So they click back and try the next firm on Google.

This happens hundreds of times a year at law firms across the UK. The enquiry was there. The intent was there. The only thing missing was someone — or something — to respond.

## What an AI Chatbot Receptionist Does Differently

An AI chatbot receptionist built by Elvora Strategies isn't a generic pop-up asking "Can I help you?" It's a bespoke AI assistant trained specifically on your firm — your practice areas, your tone, your intake questions.

When a visitor lands on your site at any hour, Pulse:

- **Greets them** in your firm's voice — professional, reassuring, and specific to your practice areas
- **Qualifies the enquiry** — asking the right questions to understand whether this is a family matter, a commercial dispute, a conveyancing enquiry, or something else entirely
- **Captures their details** — name, email, phone number, and a summary of their matter
- **Delivers the lead** directly to your inbox or CRM, ready for a follow-up call the next morning

No generic scripts. No frustrating FAQ loops. A genuine, consultative conversation that makes the prospect feel heard — and keeps them on your site.

## The Numbers That Matter for Law Firms

Law firms that have deployed AI chatbot receptionists typically see:

- **34+ qualified leads per month** captured outside office hours
- **Response time under 2 minutes** — versus the industry average of 6+ hours for email enquiries
- **Zero missed weekend enquiries** — a consistent pain point for smaller practices

For a firm that converts even 10% of those additional leads, the return on investment is immediate.

## Why "AI Chatbot for Law Firms UK" Is a Different Brief

A law firm chatbot isn't the same as a retail chatbot. It needs to understand legal terminology without giving legal advice. It needs to be empathetic — many enquiries involve sensitive personal circumstances. And it needs to comply with SRA guidelines around client communication and data handling.

At Elvora Strategies, every AI receptionist we build for a law firm is trained with these constraints built in. The bot knows what it can and cannot say. It captures what you need. And it hands off to your team at exactly the right moment.

## Getting Started

If your firm receives more than 20 enquiries per month and you don't have a 24/7 response solution in place, you are leaving revenue on the table. Book a demo with Elvora Strategies and see Pulse in action — a live AI receptionist trained on a real law firm brief, ready to show you exactly what yours would look like.
    `,
  },
  {
    slug: "ai-receptionist-small-business-manchester",
    title: "AI Receptionist for Small Business: How Manchester Firms Are Winning More Clients",
    metaTitle: "AI Receptionist for Small Business Manchester | Elvora Strategies",
    metaDesc: "Small businesses in Manchester are using AI receptionists to compete with larger firms — capturing leads 24/7 without hiring extra staff. Here's how it works.",
    category: "Small Business",
    date: "July 2026",
    readTime: "4 min read",
    excerpt: "You don't need a team of receptionists to respond like a large firm. Manchester's fastest-growing small businesses are using AI to punch above their weight — and it's working.",
    content: `
## The Small Business Receptionist Problem

Running a small business in Manchester means wearing a lot of hats. You're the owner, the service provider, the salesperson, and often — the receptionist. Every time your phone rings while you're with a client, you're choosing between the person in front of you and the potential client trying to reach you.

That's not a sustainable way to grow.

## How an AI Receptionist Levels the Playing Field

Large firms have dedicated reception teams, 24/7 call centres, and CRM systems that capture every enquiry automatically. Small businesses in Manchester now have access to exactly the same capability — through an AI receptionist built specifically for their business.

Elvora Strategies builds AI receptionists that:

- **Answer instantly** — no hold music, no voicemail, no missed opportunity
- **Sound like your business** — trained on your services, your tone, and your specific intake process
- **Qualify prospects** — so when you do pick up the phone, you're speaking to someone who already wants what you offer
- **Work 24/7** — including evenings, weekends, and bank holidays when your competitors' phones go unanswered

## Real Results from Northwest England Businesses

Businesses across the Northwest that have deployed Elvora's AI receptionists have reported:

- Appointment bookings up **40% within 6 weeks** of going live
- Weekend enquiries — previously lost entirely — now captured and followed up on Monday morning
- Prospects arriving on calls **already qualified**, reducing time wasted on unsuitable enquiries

## Who Benefits Most?

The AI receptionist for small business model works particularly well for:

- **Estate agents** handling property enquiries outside office hours
- **Insurance brokers** whose clients often research and enquire in the evenings
- **Accountants** who receive a surge of enquiries at tax season and need to capture every one
- **Financial advisors** whose clients value discretion and immediate response
- **Care homes** handling sensitive family enquiries that need a warm, professional first response

## The Manchester Advantage

Manchester's business community is competitive. The firms that respond fastest win the most clients. An AI receptionist doesn't just help you respond faster — it makes you the most responsive business in your category, every single day.

Book a demo with Elvora Strategies and see what a bespoke AI receptionist would look like for your Manchester business.
    `,
  },
  {
    slug: "lead-capture-chatbot-northwest-england",
    title: "Lead Capture Chatbot for Northwest England Businesses: The Complete Guide",
    metaTitle: "Lead Capture Chatbot Northwest England | Elvora Strategies",
    metaDesc: "A complete guide to lead capture chatbots for businesses in Northwest England — what they do, how they work, and why they outperform contact forms and phone lines.",
    category: "Lead Generation",
    date: "August 2026",
    readTime: "6 min read",
    excerpt: "Contact forms convert at 1–3%. Phone lines go unanswered. A lead capture chatbot changes the equation entirely — here's everything Northwest England businesses need to know.",
    content: `
## Why Traditional Lead Capture Is Broken

Most business websites have the same lead capture setup: a contact form, a phone number, and maybe an email address. The problem is that none of these work particularly well.

- **Contact forms** convert at 1–3% and take hours to respond to
- **Phone lines** go unanswered outside business hours — which is when many prospects do their research
- **Email** feels slow and impersonal to a prospect who wants an answer now

For businesses in Northwest England competing for clients in a busy market, this is a significant problem. The enquiry arrives. Nobody responds quickly enough. The prospect moves on.

## What a Lead Capture Chatbot Does Instead

A lead capture chatbot built by Elvora Strategies sits on your website and does something fundamentally different: it has a conversation.

Not a scripted FAQ loop. Not a "press 1 for sales" experience. A genuine, intelligent conversation that:

1. **Greets the visitor** in your business's voice within seconds of them landing on your site
2. **Understands their need** through natural conversation — no forms, no dropdowns
3. **Qualifies the lead** by asking the questions your team would ask
4. **Captures their contact details** — name, email, phone — naturally within the conversation
5. **Delivers a complete lead summary** to your inbox or CRM, ready for follow-up

## The Conversion Difference

Where a contact form converts at 1–3%, a well-designed AI chatbot typically converts at 15–25% of engaged visitors. The reason is simple: people respond to conversation. They feel heard. They get immediate value. And they're far more likely to leave their details when they've already had a positive interaction.

For a business receiving 500 website visitors per month, the difference between a 2% contact form conversion rate and a 20% chatbot conversion rate is the difference between 10 leads and 100 leads — from the same traffic.

## Industries Seeing the Biggest Impact in the Northwest

Across Northwest England, the industries seeing the most significant results from lead capture chatbots are:

**Law Firms** — capturing out-of-hours enquiries that previously went to competitors. AI chatbot for law firms UK is one of the fastest-growing use cases in the legal sector.

**Estate Agents** — handling property enquiries 24/7, qualifying buyers and vendors before the first call.

**Insurance Brokers** — capturing evening and weekend enquiries when clients research their options.

**Accountants** — managing the surge of enquiries around self-assessment deadlines without missing a single one.

**Care Homes** — providing a warm, immediate response to families making sensitive enquiries about care provision.

## How Elvora Strategies Builds Your Chatbot

Every lead capture chatbot we build is bespoke. We don't use templates. We don't deploy generic scripts. We spend time understanding your business, your clients, and your intake process — and we build an AI receptionist that reflects all of that.

The process takes under two weeks from brief to live deployment. And once it's live, it works every hour of every day — capturing leads, qualifying prospects, and delivering them to you ready for follow-up.

If you're a business in Northwest England that receives enquiries and wants to convert more of them, book a demo with Elvora Strategies. See Pulse in action and understand exactly what a bespoke lead capture chatbot would do for your business.
    `,
  },
];

export default function Blog() {
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
        <div className="flex items-center gap-6">
          <Link href="/"><span className="text-sm font-semibold text-gray-600 hover:text-sky-600 transition-colors cursor-pointer">Home</span></Link>
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
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 60%, #0369a1 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 border border-white/30 rounded-full text-white/90 bg-white/10 backdrop-blur-md">
            Resource Hub &amp; Insights
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Insights on AI Automation <br /><span style={{ color: "#F5A623" }}>for UK Business</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical guides on AI chatbots, lead capture, and automation — written for law firms, estate agents, accountants, and businesses across the UK.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-h-full flex flex-col group h-full" style={{ borderColor: "#e0f2fe", borderTop: "4px solid #F5A623" }}>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full border" style={{ background: "#f0f9ff", color: "#0369a1", borderColor: "#bae6fd" }}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors leading-snug flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "#f0f9ff" }}>
                      <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                        <span className="flex items-center gap-1"><Calendar size={13} />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Call to Action */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden text-center text-white" style={{ background: "#1e3a5f" }}>
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block text-amber-400">Transform Your Enquiries</span>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to experience Pulse live?
          </h2>
          <button onClick={openChatbot} className="inline-flex items-center gap-2 font-bold text-sm px-9 py-4 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ background: "#F5A623", color: "#1a1a1a" }}>
            Chat with Pulse Now
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