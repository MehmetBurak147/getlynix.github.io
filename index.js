// Project: Lynix — Apple-style single-page landing (React + Tailwind + Framer Motion)
// - Single-file React component (default export)
// - Full-page vertical sections (Apple.com-like), scroll-snap, cinematic animations
// - Each feature has its own "page" (section) but it's single-page — menu scrolls to sections
// - No external icon CDN (inline SVGs)
// USAGE:
// 1) Create React app (Vite or CRA). Example with Vite:
//    npm create vite@latest lynix-site -- --template react
//    cd lynix-site
//    npm install
// 2) Install framer-motion and Tailwind CSS
//    npm install framer-motion
//    Follow Tailwind setup: https://tailwindcss.com/docs/guides/vite
//    Make sure `index.css` includes: @tailwind base; @tailwind components; @tailwind utilities;
// 3) Replace src/App.jsx with this file's contents and put your assets into /public/assets/
// 4) Start dev server: npm run dev

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const LOGO = '/assets/lynix_logo_round_1024.png'
const HERO_BG = '/assets/hero_blur.png'

// Inline SVG icons
const IconDownload = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M16.88 11.37A4 4 0 0 0 9 10.13 5.5 5.5 0 0 0 7.5 21h8a4.5 4.5 0 0 0 1.38-8.63z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconAI = ({ className='w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.2 5.7L7.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.8 5.7L16.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconApp = ({ className='w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8 8h8M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'ai', title: 'AI' },
  { id: 'apps', title: 'Apps' },
  { id: 'design', title: 'Design' },
  { id: 'performance', title: 'Performance' },
  { id: 'download', title: 'Download' },
  { id: 'community', title: 'Community' }
]

export default function App(){
  const containerRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#07050b] via-[#090617] to-[#040412] font-sans" style={{"--accent":"#7C4DFF"}}>
      {/* Nav bar */}
      <nav className="fixed top-4 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Lynix" className="w-10 h-10 rounded-full shadow-md" />
            <div className="hidden sm:block">
              <div className="font-semibold">Lynix</div>
              <div className="text-xs text-slate-300">Smarter. Faster.</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 backdrop-blur bg-white/5 rounded-xl p-2">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="px-3 py-2 text-slate-200 hover:text-white">{s.title}</button>
            ))}
            <button onClick={() => scrollTo('download')} className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black font-semibold">Get Lynix</button>
          </div>
          <div className="md:hidden">
            <button className="p-2 bg-white/5 rounded-lg">Menu</button>
          </div>
        </div>
      </nav>

      {/* Scroll container with snap */}
      <main ref={containerRef} className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
        {/* HERO */}
        <section id="hero" className="snap-start min-h-screen flex items-center" style={{background:'radial-gradient(ellipse at 10% 10%, rgba(124,77,255,0.12), transparent), radial-gradient(ellipse at 90% 80%, rgba(182,147,255,0.06), transparent)'}}>
          <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x:-40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.8 }}>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Lynix — AI-powered Android, reimagined</h1>
              <p className="mt-6 text-slate-300 max-w-xl text-lg">A LineageOS-based operating system with deep on-device AI, dynamic Material You themes, and cinematic performance. Built for privacy-first users and power enthusiasts.</p>

              <div className="mt-8 flex gap-4">
                <button onClick={() => scrollTo('download')} className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black px-6 py-3 rounded-full font-semibold shadow-xl"> 
                  <IconDownload/> Download Lynix
                </button>
                <button onClick={() => scrollTo('ai')} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5">Explore AI</button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
                <div className="p-4 rounded-xl bg-white/3 backdrop-blur-sm">
                  <div className="text-sm font-semibold">Adaptive Themes</div>
                  <div className="text-xs text-slate-300 mt-2">Colors match your wallpaper and mood.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/3 backdrop-blur-sm">
                  <div className="text-sm font-semibold">On-device AI</div>
                  <div className="text-xs text-slate-300 mt-2">Privacy-first local models.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/3 backdrop-blur-sm">
                  <div className="text-sm font-semibold">Optimized</div>
                  <div className="text-xs text-slate-300 mt-2">Fast boot, low memory footprint.</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.8 }} className="relative">
              <div className="w-[340px] h-[720px] rounded-3xl bg-gradient-to-b from-white/6 to-white/3 p-6 shadow-2xl border border-white/6">
                <img src={LOGO} className="w-14 h-14 rounded-full" alt="logo" />
                <div className="mt-8 h-5 bg-white/4 rounded-full w-full" />
                <div className="mt-6 bg-gradient-to-b from-white/5 to-transparent rounded-xl h-[420px]" />
                <div className="mt-6 flex gap-3">
                  <div className="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black font-semibold">AI Assistant</div>
                  <div className="flex-1 py-2 text-center rounded-lg bg-white/5">Playground</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Section */}
        <section id="ai" className="snap-start min-h-screen flex items-center bg-gradient-to-b from-[#05040a] to-[#020205]">
          <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x:-30, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <h2 className="text-4xl font-bold">Lynix Intelligence</h2>
              <p className="mt-4 text-slate-300 max-w-xl">A tightly integrated AI suite that lives on your device. Privacy-first, fast, and context-aware.</p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-white/4 backdrop-blur-sm">
                  <div className="font-semibold">AI Keyboard</div>
                  <div className="text-slate-300 text-sm mt-1">Contextual completions, smart rewrites, and privacy-friendly suggestions powered locally.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/4 backdrop-blur-sm">
                  <div className="font-semibold">AI ChatBot</div>
                  <div className="text-slate-300 text-sm mt-1">A system assistant that can control settings, summarize messages and keep encrypted memories.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/4 backdrop-blur-sm">
                  <div className="font-semibold">AI Playground</div>
                  <div className="text-slate-300 text-sm mt-1">Generate images, try prompt presets, and use safe-mode filtering. On-device previews and cloud upscale.</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black font-semibold">Try AI Demo</button>
                <button className="px-5 py-3 rounded-full bg-white/5">Read the docs</button>
              </div>
            </motion.div>

            <motion.div initial={{ scale:0.98, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              {/* Mock AI playground card */}
              <div className="rounded-2xl bg-white/5 p-6 shadow-2xl">
                <div className="h-12 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[#B693FF]" />
                  <div>
                    <div className="font-semibold">AI Playground</div>
                    <div className="text-xs text-slate-300">Text → Image • Edit • Upscale</div>
                  </div>
                </div>
                <div className="mt-4 bg-black/30 h-64 rounded-lg flex items-center justify-center"> 
                  <div className="text-slate-400">Preview (on-device)</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black">Generate</button>
                  <button className="flex-1 px-4 py-2 rounded-lg bg-white/5">Upload</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* APPS */}
        <section id="apps" className="snap-start min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <motion.div initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-4xl font-bold">System Apps</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">Built-in apps designed for Lynix — clean interfaces, privacy-first features and integrations with Lynix Intelligence.</p>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[#B693FF]"><IconApp/></div>
                    <div>
                      <div className="font-semibold">Lynix Messages</div>
                      <div className="text-slate-300 text-sm">Encrypted threads, smart replies and attachments.</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#7CE6C7]"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.21.43 2.39.92 3.5a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.59 6.59l1.27-1.27a2 2 0 0 1 2.11-.45c1.11.49 2.29.8 3.5.92A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <div>
                      <div className="font-semibold">Lynix Calls</div>
                      <div className="text-slate-300 text-sm">Clear calls, spam protection and transcriptions.</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#FFD166] to-[#FFEEAA]"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M20.5 3l-5 2-5-2-6 2v15l6-2 5 2 5-2 5 2V5l-5-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <div>
                      <div className="font-semibold">Lynix Maps</div>
                      <div className="text-slate-300 text-sm">Offline maps, privacy routing and lightweight navigation.</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* DESIGN */}
        <section id="design" className="snap-start min-h-screen flex items-center bg-gradient-to-b from-[#04030a] to-[#020205]">
          <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x:-30, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-4xl font-bold">Design & Theme</h2>
              <p className="mt-4 text-slate-300 max-w-xl">Material You-inspired dynamic theming, smooth 120fps animations and consistent iconography across the system.</p>

              <ul className="mt-6 list-disc list-inside text-slate-300">
                <li>Dynamic accent extraction from wallpapers</li>
                <li>Adaptive layouts for one-handed use</li>
                <li>Depth, blur and motion for a premium feel</li>
              </ul>
            </motion.div>

            <motion.div initial={{ scale:0.98, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <div className="rounded-2xl bg-white/5 p-6 shadow-2xl">
                <div className="h-64 bg-gradient-to-b from-[#7C4DFF]/6 to-transparent rounded-lg flex items-center justify-center">Preview area</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PERFORMANCE */}
        <section id="performance" className="snap-start min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <motion.div initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-4xl font-bold">Performance & Security</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">Optimized kernel tuning, memory policies, SELinux enforcing and verified-boot support. We balance visual richness with battery and speed.</p>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/4">
                  <div className="font-semibold">Kernel & I/O</div>
                  <div className="text-slate-300 text-sm mt-1">Optimized schedulers, f2fs tuning.</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/4">
                  <div className="font-semibold">Memory</div>
                  <div className="text-slate-300 text-sm mt-1">zram, low-ram profiles and smart background killing.</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/4">
                  <div className="font-semibold">Security</div>
                  <div className="text-slate-300 text-sm mt-1">Keystore attestation, verified boot, encrypted models.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="snap-start min-h-screen flex items-center bg-gradient-to-b from-[#03030a] to-[#020205]">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <motion.div initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-4xl font-bold">Download Lynix</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">Choose your device, follow installation instructions and verify checksum.</p>

              <div className="mt-6 bg-gradient-to-r from-[var(--accent)]/10 to-[#B693FF]/8 p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <select className="bg-white/5 rounded-lg p-3 text-black">
                    <option>Pixel 6 — Lynix v0.1 (Beta)</option>
                    <option>Redmi Note 12 — Lynix v0.1 (Beta)</option>
                    <option>OnePlus 9 — Lynix v0.1 (Beta)</option>
                  </select>
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#B693FF] text-black font-semibold inline-flex items-center gap-2"><IconDownload/> Download</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="snap-start min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-4xl font-bold">Community & Contribute</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">Join Discord, Telegram or our GitHub. Contribute to device ports, themes and AI modules.</p>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <a className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm block" href="#">Discord</a>
                <a className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm block" href="#">GitHub</a>
                <a className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm block" href="#">Telegram</a>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 text-slate-400 text-center">© {new Date().getFullYear()} Lynix Project — Built with ❤️</footer>
      </main>
    </div>
  )
}
