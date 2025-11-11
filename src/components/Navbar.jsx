import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Kompetisi', href: '#' },
  { label: 'Lost & Found', href: '#' },
  { label: 'Event', href: '#' },
  { label: 'Forum', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400" />
              <span className="text-lg font-semibold tracking-tight">Younifirst</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className="rounded-full bg-slate-900 text-white text-sm px-4 py-2 shadow hover:shadow-md transition-all"
              >
                Get Started
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 backdrop-blur hover:bg-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/80 backdrop-blur">
              <div className="flex flex-col p-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100/80"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
