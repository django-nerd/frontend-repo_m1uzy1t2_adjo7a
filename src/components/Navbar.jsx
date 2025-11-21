import { useState } from 'react'
import { Shield, Menu, X, Lock, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#trust', label: 'Trust' },
  ]

  return (
    <div className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-slate-900/60 px-5 py-3 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10"
              >
                <Shield className="h-5 w-5 text-emerald-400" />
              </motion.span>
              <span className="pointer-events-none absolute -inset-1 rounded-lg bg-emerald-400/15 blur-xl"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide text-white">SentinelGuard</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/70">Cyber Security SaaS</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
            >
              <Lock className="h-4 w-4" /> Get Started
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-300 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl px-6 md:hidden"
          >
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-4 backdrop-blur-xl">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
                  >
                    <Cpu className="h-4 w-4 text-emerald-400" /> {l.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-900 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400"
                >
                  <Lock className="h-4 w-4" /> Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
