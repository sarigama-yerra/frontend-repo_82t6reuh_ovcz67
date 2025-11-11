import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100 via-indigo-50 to-white" />
      <Navbar />
      <main className="relative z-10 pt-24">
        {children}
      </main>
      <footer className="relative z-10 border-t border-slate-200/70 py-10 mt-16">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Younifirst. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
