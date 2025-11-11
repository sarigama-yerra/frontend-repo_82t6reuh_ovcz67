import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

export default function LostFound() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', location: '', status: 'lost', contact: '' })

  const load = async () => {
    const res = await fetch(`${api}/lostfound`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    await fetch(`${api}/lostfound`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    })
    setForm({ title: '', description: '', location: '', status: 'lost', contact: '' })
    await load()
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24">
      <h1 className="text-3xl font-bold">Lost & Found</h1>

      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-slate-200 rounded-xl p-4">
        {['title','description','location','contact'].map((k) => (
          <input key={k} required={k==='title'} value={form[k]} onChange={(e)=>setForm({...form,[k]:e.target.value})}
            placeholder={k.charAt(0).toUpperCase()+k.slice(1)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        ))}
        <select value={form.status} onChange={(e)=>setForm({...form,status:e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2">
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <button className="md:col-span-2 rounded-lg bg-slate-900 text-white px-4 py-2">Tambah</button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it)=> (
          <div key={it.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${it.status==='found' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{it.status}</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">{it.description}</p>
            <p className="text-xs text-slate-500 mt-2">Lokasi: {it.location}</p>
            {it.contact && <p className="text-xs text-slate-500">Kontak: {it.contact}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
