import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

export default function Forum() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', content: '', author: '' })
  const [selected, setSelected] = useState(null)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const loadPosts = async () => {
    const res = await fetch(`${api}/forum/posts`)
    const data = await res.json()
    setPosts(data)
  }

  const loadComments = async (postId) => {
    const res = await fetch(`${api}/forum/posts/${postId}/comments`)
    const data = await res.json()
    setComments(data)
  }

  useEffect(() => { loadPosts() }, [])

  const submitPost = async (e) => {
    e.preventDefault()
    await fetch(`${api}/forum/posts`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    setForm({ title: '', content: '', author: '' })
    await loadPosts()
  }

  const submitComment = async (e) => {
    e.preventDefault()
    if (!selected) return
    await fetch(`${api}/forum/comments`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ post_id: selected.id, content: comment }) })
    setComment('')
    await loadComments(selected.id)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24">
      <h1 className="text-3xl font-bold">Forum</h1>

      <form onSubmit={submitPost} className="mt-6 grid grid-cols-1 gap-3 bg-white border border-slate-200 rounded-xl p-4">
        <input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} placeholder="Judul" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        <textarea value={form.content} onChange={(e)=>setForm({...form,content:e.target.value})} placeholder="Konten" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        <input value={form.author} onChange={(e)=>setForm({...form,author:e.target.value})} placeholder="Penulis (opsional)" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Buat Post</button>
      </form>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Postingan</h2>
          <div className="space-y-3">
            {posts.map((p)=> (
              <div key={p.id} onClick={()=>{setSelected(p); loadComments(p.id)}} className={`rounded-xl border cursor-pointer ${selected?.id===p.id? 'border-slate-900' : 'border-slate-200'} bg-white p-4`}>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{p.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Komentar</h2>
          {selected ? (
            <div className="space-y-3">
              <form onSubmit={submitComment} className="flex gap-2">
                <input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Tulis komentar..." className="flex-1 rounded-lg border border-slate-300 px-3 py-2" />
                <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Kirim</button>
              </form>
              <div className="space-y-2">
                {comments.map((c)=> (
                  <div key={c.id} className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-sm">{c.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-slate-600">Pilih postingan untuk melihat komentar.</p>
          )}
        </div>
      </div>
    </div>
  )
}
