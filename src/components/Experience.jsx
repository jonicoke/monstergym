import { Dumbbell, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import '../styles/assets/Experience.css'

export default function Experience() {
  return (
    <section id="experiencia" className="manifest section-pad">
      <div className="manifest-copy reveal">
        <span className="kicker">MONSTER GYM IS MY HOME</span>
        <h2>NO ES SOLO<br/>ENTRENAR.<br/><i>ES CAMBIAR.</i></h2>
      </div>
      <div className="manifest-side reveal">
        <p>Diseñamos un espacio donde la energía se contagia. Equipamiento de nivel, coaches que te conocen por tu nombre y una comunidad que empuja con vos.</p>
        <div className="benefit-grid">
          <div><Dumbbell/><b>Entrenamientos diarios</b><span>Nunca vas a estar sin entrenar.</span></div>
          <div><ShieldCheck/><b>Coaches profesionales</b><span>Atención y técnica en cada sesión.</span></div>
          <div><Zap/><b>Energía 24/7</b><span>Un ambiente que te pide un poco más.</span></div>
          <div><Sparkles/><b>Tu comunidad</b><span>Acá nadie entrena completamente solo.</span></div>
        </div>
      </div>
    </section>
  )
}