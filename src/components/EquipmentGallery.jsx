import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { equipmentVideos } from '../data/sitedata.js'

export default function EquipmentGallery() {
  const stageRef = useRef(null)

  useEffect(() => {
    const slides = gsap.utils.toArray(stageRef.current.querySelectorAll('.equipment-slide'))
    if (!slides.length) return

    const tl = gsap.timeline({ repeat: -1 })

    slides.forEach((slide, i) => {
      tl.fromTo(slide,
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1.15, duration: 2 },
        i * 3
      ).to(slide, { opacity: 0, duration: 1 }, i * 3 + 2.5)
    })

    return () => tl.kill()
  }, [])

  return (
    <section id="equipo" className="equipment">
      <div className="equipment-card reveal">
        <div className="equipment-stage" ref={stageRef}>
          {equipmentVideos.map((video) => (
            <video key={video.src} className="equipment-slide" src={video.src} alt={video.alt} 
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}