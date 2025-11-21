import { ShieldCheck, Activity, KeyRound, Server, Fingerprint, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: 'Runtime Protection',
    desc: 'Agentless protection for containers, VMs, and serverless with policy-as-code.',
  },
  {
    icon: Activity,
    title: 'Threat Detection',
    desc: 'Real-time anomaly detection powered by AI with adaptive baselining.',
  },
  { icon: KeyRound, title: 'Identity Security', desc: 'Just-in-time access, secrets scanning, and SSO integrations.' },
  { icon: Server, title: 'Cloud Posture', desc: 'Continuous misconfiguration scanning across AWS, GCP, and Azure.' },
  { icon: Fingerprint, title: 'Zero Trust', desc: 'Per-request verification with device and network signals.' },
  { icon: Cloud, title: 'Data Security', desc: 'Tokenization and DLP with granular field-level controls.' },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(16,185,129,0.12)_0%,transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to secure at scale</h2>
          <p className="mt-3 text-slate-300">Built for modern teams shipping fast with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20">
                  <f.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
              <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 -translate-y-1/2 bg-gradient-to-b from-emerald-500/10 to-transparent blur-2xl" />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
