import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LogIn, Eye, EyeOff } from 'lucide-react'

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm]       = useState({ username: '', password: '' })
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const ok = await login(form.username, form.password)
    setLoading(false)
    if (ok) navigate('/admin')
    else setError('Usuario o contraseña incorrectos.')
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">

      {/* Viñeta de fondo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(60,0,0,0.2) 0%, transparent 70%)' }} />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <img
            src="/logo.jpg"
            alt="Monster Gym"
            className="w-20 h-20 object-cover rounded-full border-2 border-blood/50"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="font-display text-white tracking-widest text-center leading-tight">
            MONSTER <span className="text-primary">GYM</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-surface border border-white/5 p-8">
          <h2 className="font-display text-white mb-1 text-xl">Acceso Admin</h2>
          <p className="font-body text-white/30 text-sm mb-8 tracking-wide">
            Panel de gestión del gimnasio
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="font-body text-xs text-white/40 tracking-[0.3em] uppercase block mb-2">Usuario</label>
              <input
                type="text"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                required
                className="w-full bg-dark border border-white/10 text-white font-body px-4 py-3 text-sm focus:outline-none focus:border-blood transition-colors placeholder:text-white/20"
                placeholder="tu usuario"
              />
            </div>

            <div>
              <label className="font-body text-xs text-white/40 tracking-[0.3em] uppercase block mb-2">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full bg-dark border border-white/10 text-white font-body px-4 py-3 pr-10 text-sm focus:outline-none focus:border-blood transition-colors placeholder:text-white/20"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-blood/10 border border-blood/30 text-red-400 font-body text-sm px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blood text-white font-body font-bold py-3 flex items-center justify-center gap-2 hover:bg-red-900 transition-colors disabled:opacity-50 mt-2 uppercase tracking-widest text-sm border border-red-900"
            >
              <LogIn size={16} />
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>

        <a href="/" className="block text-center font-body text-white/20 text-xs mt-6 hover:text-white/50 transition-colors tracking-widest uppercase">
          ← Volver al sitio
        </a>
      </div>
    </div>
  )
}
