import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

export default function Dashboard() {
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(`${api}/dashboard/summary`)
        const data = await res.json()
        setSummary(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchSummary()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {loading ? (
        <p className="mt-6 text-slate-600">Loading...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {summary && Object.entries(summary).map(([k,v]) => (
            <div key={k} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500 capitalize">{k.replace('_',' ')}</p>
              <p className="text-2xl font-semibold mt-1">{v}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
