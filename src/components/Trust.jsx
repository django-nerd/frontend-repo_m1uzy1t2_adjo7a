import { motion } from 'framer-motion'

const logos = [
  'Secura',
  'ApexAI',
  'Dataguard',
  'CloudForge',
  'NeuroNet',
  'BlockWave',
]

export default function Trust() {
  return (
    <section id="trust" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium tracking-tight text-slate-300"
          >
            Trusted by engineering teams at fast-growing companies
          </motion.h3>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center text-sm text-slate-200"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
