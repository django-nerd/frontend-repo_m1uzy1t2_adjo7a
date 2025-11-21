import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_10%,rgba(16,185,129,0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <Trust />
        <Pricing />

        {/* CTA */}
        <section className="relative">
          <div className="relative mx-auto max-w-7xl px-6 pb-24">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 text-center backdrop-blur-xl md:p-12">
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-emerald-400/10" />
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to harden your stack?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                Start a free 14-day trial. No credit card required.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-900 shadow-[0_0_50px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400">
                  Get Started
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-emerald-500/30 bg-slate-950/50 px-6 py-3 font-medium text-white backdrop-blur-sm hover:bg-white/5">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} SentinelGuard. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <a href="#" className="hover:text-white">Status</a>
              <a href="#" className="hover:text-white">Docs</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
