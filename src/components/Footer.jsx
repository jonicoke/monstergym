import { Clock3, Instagram, MapPin } from 'lucide-react'
import '../styles/assets/footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand"><a href="#inicio" className="brand-logo"><img src="/logo-corregido.png" alt=""/><span>MONSTER <b>GYM</b></span></a><p>No entrenes para encajar.<br/>Entrená para destacar.</p></div>
      <div><h4>Explorá</h4><a href="#actividades">Actividades</a><a href="#horarios">Horarios</a><a href="#planes">Planes</a></div>
      <div><h4>Encontranos</h4><p><MapPin size={15}/> Av. Ejemplo 4521</p><p><Clock3 size={15}/> Lun-Sab · 10h a 22h</p><a href="https://www.instagram.com/" target="_blank"><Instagram size={15}/> @monstergym</a></div>
      <div className="footer-bottom">© {new Date().getFullYear()} Monster Gym <span>Hecho para superar límites.</span></div>
    </footer>
  )
}