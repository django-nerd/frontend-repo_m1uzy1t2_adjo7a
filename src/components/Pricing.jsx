import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For small teams and trials',
    features: ['Up to 5 services', 'Shared cloud', 'Email support'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    tagline: 'For startups scaling securely',
    features: ['Unlimited services', 'Dedicated cloud', 'SAML SSO', 'Priority support'],
    cta: 'Choose Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Security and compliance at scale',
    features: ['Private cloud', 'On-prem options', 'Custom SLAs', 'SOC2 & ISO 27001'],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(16,185,129,0.12)_0%,transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, predictable pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Upgrade as you grow.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-xl ${
                t.highlighted
                  ? 'border-emerald-400/40 bg-slate-900/60 shadow-[0_0_80px_rgba(16,185,129,0.25)]'
                  : 'border-emerald-500/20 bg-slate-900/50'
              }`}
            >
              {t.highlighted && (
                <span className="absolute right-4 top-4 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                  Popular
                </span>
              )}
              <div>
                <div className="text-sm text-slate-300">{t.name}</div>
                <div className="mt-2 text-4xl font-semibold text-white">{t.price}<span className="text-base font-normal text-slate-400">/mo</span></div>
                <div className="mt-1 text-sm text-slate-400">{t.tagline}</div>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${
                t.highlighted
                  ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400'
                  : 'border border-emerald-500/30 text-white hover:bg-white/5'
              }`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
