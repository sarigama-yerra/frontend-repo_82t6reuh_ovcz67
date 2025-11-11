import { useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

export default function Login() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const url = mode === 'login' ? `${api}/auth/login` : `${api}/auth/register`
      const body = mode === 'login' ? { email: form.email, password: form.password } : { name: form.name, email: form.email, password: form.password }
      const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal')
      setMessage(mode === 'login' ? `Selamat datang, ${data.user.name}` : 'Registrasi berhasil, silakan login')
    } catch (e) {
      setMessage(e.message)
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 pb-24">
      <h1 className="text-3xl font-bold mt-2">{mode === 'login' ? 'Masuk' : 'Daftar'}</h1>
      <p className="text-slate-600 mt-2">Akses fitur Younifirst dengan akun Anda.</p>

      <form onSubmit={submit} className="mt-6 space-y-3 bg-white border border-slate-200 rounded-xl p-4">
        {mode === 'register' && (
          <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Nama Lengkap" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        )}
        <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        <input value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} placeholder="Password" type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        <button className="w-full rounded-lg bg-slate-900 text-white px-4 py-2">{mode === 'login' ? 'Masuk' : 'Daftar'}</button>
        <p className="text-sm text-slate-600">
          {mode === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'}{' '}
          <button type="button" className="text-indigo-600" onClick={()=> setMode(mode==='login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Daftar' : 'Masuk'}
          </button>
        </p>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  )
}
