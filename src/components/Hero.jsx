import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
        >
          Interactive • Tech • Futuristic • Minimalist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 bg-gradient-to-br from-slate-900 via-indigo-900 to-cyan-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Younifirst
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg"
        >
          Satu portal modern untuk aktivitas kampus: pantau dashboard, ikuti kompetisi, temukan barang hilang, jelajahi event, dan berdiskusi di forum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition-all"
          >
            Mulai Jelajah
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur hover:bg-white"
          >
            Lihat Fitur
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pointer-events-none mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {["Dashboard","Kompetisi","Lost & Found","Event","Forum"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/30 bg-white/60 p-4 text-sm font-medium text-slate-700 backdrop-blur">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
