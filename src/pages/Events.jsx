import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

export default function Events() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', link: '' })

  const load = async () => {
    const res = await fetch(`${api}/events`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    await fetch(`${api}/events`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    })
    setForm({ title: '', description: '', date: '', location: '', link: '' })
    await load()
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24">
      <h1 className="text-3xl font-bold">Event</h1>

      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-slate-200 rounded-xl p-4">
        {['title','description','date','location','link'].map((k) => (
          <input key={k} required={k==='title'} value={form[k]} onChange={(e)=>setForm({...form,[k]:e.target.value})}
            placeholder={k.charAt(0).toUpperCase()+k.slice(1)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        ))}
        <button className="md:col-span-2 rounded-lg bg-slate-900 text-white px-4 py-2">Tambah</button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it)=> (
          <div key={it.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs text-slate-500">{it.location}</p>
            <h3 className="text-lg font-semibold mt-1">{it.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{it.description}</p>
            {it.link && <a className="text-sm text-indigo-600 mt-2 inline-block" href={it.link} target="_blank">Link</a>}
          </div>
        ))}
      </div>
    </div>
  )
}
