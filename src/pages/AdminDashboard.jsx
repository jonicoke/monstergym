import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Activity, UserCheck, CreditCard, FileDown, LogOut, Menu, X, ExternalLink } from 'lucide-react'

const SISTEMA_URL = 'http://localhost:8080'

const navItems = [
  { label: 'Dashboard',   icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Clientes',    icon: Users,           path: '/clientes' },
  { label: 'Actividades', icon: Activity,        path: '/actividades' },
  { label: 'Instructores',icon: UserCheck,       path: '/instructores' },
  { label: 'Pagos',       icon: CreditCard,      path: '/pagos' },
  { label: 'Exportar',    icon: FileDown,        path: '/exportar' },
]

export default function AdminDashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('/dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = () => { logout(); navigate('/admin/login') }
  const iframeSrc = `${SISTEMA_URL}${activeSection}`

  return (
    <div className="flex h-screen bg-dark overflow-hidden">

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-16'} bg-surface border-r border-white/5 flex flex-col transition-all duration-300 shrink-0`}>

        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="" className="w-7 h-7 object-cover rounded-full border border-blood/30"
                onError={e => { e.target.style.display = 'none' }} />
              <span className="font-display text-sm text-white tracking-wider leading-none">
                MONSTER<br/><span className="text-primary text-xs">GYM</span>
              </span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white/30 hover:text-white transition-colors ml-auto">
            {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
          {navItems.map(item => {
            const Icon = item.icon
            const active = activeSection === item.path
            return (
              <button key={item.path} onClick={() => setActiveSection(item.path)}
                className={`flex items-center gap-3 px-3 py-2.5 w-full text-left transition-all duration-150 border-l-2
                  ${active ? 'bg-blood/10 text-primary border-blood' : 'text-white/40 hover:text-white hover:bg-white/5 border-transparent'}`}>
                <Icon size={16} className="shrink-0" />
                {sidebarOpen && <span className="font-body text-sm uppercase tracking-widest">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {sidebarOpen && (
          <div className="px-4 pb-2">
            <a href={iframeSrc} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 font-body text-xs text-white/20 hover:text-blood transition-colors py-2 tracking-widest uppercase">
              <ExternalLink size={12} /> Nueva pestaña
            </a>
          </div>
        )}

        <div className="p-4 border-t border-white/5">
          <button onClick={handleLogout}
            className="flex items-center gap-3 text-white/30 hover:text-red-500 transition-colors w-full px-1">
            <LogOut size={16} className="shrink-0" />
            {sidebarOpen && <span className="font-body text-sm uppercase tracking-widest">Salir</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="h-16 bg-surface border-b border-white/5 flex items-center px-6 gap-4 shrink-0">
          <h1 className="font-display text-white text-base tracking-widest">
            {navItems.find(n => n.path === activeSection)?.label ?? 'Admin'}
          </h1>
          <span className="font-body text-white/20 text-xs ml-auto tracking-wide">{SISTEMA_URL}{activeSection}</span>
        </div>
        <iframe key={iframeSrc} src={iframeSrc} className="flex-1 w-full border-0" title="Sistema Monster Gym" />
      </main>
    </div>
  )
}
