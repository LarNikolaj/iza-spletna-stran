"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Locked() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch('/api/unlock', {
      method: 'POST',
      body: JSON.stringify({ password: value }),
    })
 if (res.ok) {
  window.location.href = '/'
} else {
  setError(true)
}

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono">
        <p className="text-ink text-sm">This site is under construction.</p>
        <input
          type="password"
          value={value}
          onChange={e => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          className="border border-ink bg-transparent px-4 py-2 text-ink outline-none"
        />
        {error && <p className="text-klein text-xs">Wrong password.</p>}
        <button type="submit" className="text-ink text-sm underline text-left">Enter →</button>
      </form>
    </div>
  )
}