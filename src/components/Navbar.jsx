import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import '../styles/assets/Navbar.css'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const close = () => setMenu(false)

  return (
    <nav className="topbar">
      <a href="#inicio" className="brand" aria-label="Monster Gym inicio">
        <img className="brand-logo" src="/logo-corregido.png" alt="" /><span>MONSTER <b>GYM</b></span>
      </a>
      <div className={`navlinks ${menu ? 'open' : ''}`}>
        <a onClick={close} href="#experiencia">SOBRE NOSOTROS</a><a onClick={close} href="#actividades">Actividades</a>
        <a onClick={close} href="#horarios">Horarios</a><a onClick={close} href="#planes">Planes</a>
        <a onClick={close} href="#contacto" className="nav-cta">Entrená ya <ArrowRight size={16}/></a>
      </div>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Abrir menú">{menu ? <X/> : <Menu/>}</button>
    </nav>
  )
}