import Layout from './components/Layout'
import Hero from './components/Hero'

export default function App() {
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Dashboard', desc: 'Ringkas, informatif, dan personal. Lihat jadwal, notifikasi, dan insight harian Anda.', href: '/dashboard' },
            { title: 'Kompetisi', desc: 'Temukan lomba dan kesempatan berprestasi. Filter berdasarkan minat Anda.', href: '/kompetisi' },
            { title: 'Lost & Found', desc: 'Laporkan barang hilang atau temukan pemiliknya dengan cepat.', href: '/lostfound' },
            { title: 'Event', desc: 'Kalendar acara kampus: seminar, workshop, konser, dan lainnya.', href: '/events' },
            { title: 'Forum', desc: 'Ruang diskusi yang sehat untuk berbagi ide, tanya jawab, dan kolaborasi.', href: '/forum' },
            { title: 'Masuk', desc: 'Akses fitur lebih dengan akun Anda.', href: '/login' }
          ].map((card) => (
            <a key={card.title} href={card.href} className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}
