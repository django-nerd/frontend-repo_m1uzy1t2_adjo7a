import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(16,185,129,0.25)_0%,transparent_60%)]"></div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                Zero-Trust Security Platform
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Modern cyber security for the AI era
              </h1>
              <p className="mt-5 max-w-xl text-slate-300">
                Protect identities, data, and infrastructure with a unified, developer-first platform. Real-time threat detection, automated response, and compliance built in.
              </p>
            </motion.div>
            <motion.div className="mt-8 flex flex-wrap items-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400">
                Start Free Trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-emerald-500/30 bg-slate-900/50 px-5 py-3 font-medium text-white backdrop-blur-sm hover:bg-white/5">
                Explore Features
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center text-sm text-slate-300/80 sm:max-w-md">
              <div>
                <div className="text-2xl font-semibold text-white">99.99%</div>
                Uptime SLA
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">24/7</div>
                Monitoring
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">SOC 2</div>
                Type II
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/30 backdrop-blur-xl lg:h-[540px]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-emerald-400/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
