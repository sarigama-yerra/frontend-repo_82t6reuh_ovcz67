import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100 via-indigo-50 to-white" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Dashboard',
                desc: 'Ringkas, informatif, dan personal. Lihat jadwal, notifikasi, dan insight harian Anda.'
              },
              {
                title: 'Kompetisi',
                desc: 'Temukan lomba dan kesempatan berprestasi. Filter berdasarkan minat Anda.'
              },
              {
                title: 'Lost & Found',
                desc: 'Laporkan barang hilang atau temukan pemiliknya dengan cepat.'
              },
              {
                title: 'Event',
                desc: 'Kalendar acara kampus: seminar, workshop, konser, dan lainnya.'
              },
              {
                title: 'Forum',
                desc: 'Ruang diskusi yang sehat untuk berbagi ide, tanya jawab, dan kolaborasi.'
              },
              {
                title: 'Dan Banyak Lagi',
                desc: 'Ekosistem digital kampus yang terus bertumbuh, dirancang minimalis dan futuristik.'
              }
            ].map((card) => (
              <div key={card.title} className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="border-t border-slate-200/70 py-10">
          <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Younifirst. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
