import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { gsap } from 'gsap'

import '../styles/assets/heroslider.css'
import ActivitiesHero from './activities/ActivitiesHero'

const SLIDES = [
  { image: '/images/boxeo.jpg', video: '/videos/hero-boxing.mp4', alt: 'Entrenamiento de boxeo', activity: 'Boxeo' },
  { image: '/images/funcional.jpg', video: '/videos/hero-funcional.mp4', alt: 'Entrenamiento funcional', activity: 'Funcional' },
  { image: '/images/calistenia.jpg', video: '/videos/hero-calistenia.mp4', alt: 'Entrenamiento de calistenia', activity: 'Calistenia' },
  { image: '/images/danza.jpg', video: '/videos/hero-danza.mp4', alt: 'Clase de danza', activity: 'Danza' },
  { image: '/images/taekwondo.jpg', video: '/videos/hero-taekwondo.mp4', alt: 'Clase de taekwondo', activity: 'Taekwondo' },
  { image: '/images/telas.jpg', video: '/videos/hero-telas.mp4', alt: 'Clase de telas', activity: 'Telas' },
  { image: '/images/acrobacia.jpg', video: '/videos/hero-acrobacia.mp4', alt: 'Clase de acrobacia', activity: 'Acrobacia' },
]

export default function HeroSlider({ activities }) {
  const [current, setCurrent] = useState(0)
  const [heroVisible, setHeroVisible] = useState(false)
  const [activeLayer, setActiveLayer] = useState('A')

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const videoARef = useRef(null)
  const videoBRef = useRef(null)

  useEffect(() => {
    if (!heroVisible) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [heroVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const slide = SLIDES[current]
    const activeRef = activeLayer === 'A' ? videoARef : videoBRef
    const inactiveRef = activeLayer === 'A' ? videoBRef : videoARef

    const inactiveVideo = inactiveRef.current
    if (!inactiveVideo) return

    let cancelled = false

    const handleCanPlay = () => {
      if (cancelled) return
      inactiveVideo.play().catch(() => {})

      gsap.to(inactiveRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      gsap.to(activeRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' })

      setActiveLayer(activeLayer === 'A' ? 'B' : 'A')
      inactiveVideo.removeEventListener('canplay', handleCanPlay)
    }

    inactiveVideo.src = slide.video
    inactiveVideo.load()
    inactiveVideo.addEventListener('canplay', handleCanPlay)

    return () => {
      cancelled = true
      inactiveVideo.removeEventListener('canplay', handleCanPlay)
    }
  }, [current])

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      if (scrollY <= window.innerHeight) {
        const el = document.querySelector('.hero-media')
        if (el) el.style.transform = `translateY(${scrollY * 0.18}px) scale(1.03)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const slide = SLIDES[current]

  return (
    <section ref={heroRef} id="inicio" className="hero-slider">
      <div className="hero-media">
        <video
          ref={videoARef}
          className="hero-video-layer"
          style={{ opacity: activeLayer === 'A' ? 1 : 0 }}
          src={SLIDES[0].video}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        />
        <video
          ref={videoBRef}
          className="hero-video-layer"
          style={{ opacity: activeLayer === 'B' ? 1 : 0 }}
          muted
          playsInline
          loop
          preload="auto"
        />
      </div>

      <div className="hero-shade" />

      <div ref={contentRef} className="hero-content">
        <h1 className="hero-title">
          MONSTER
          <br />
          <em>IS MY HOME.</em>
        </h1>

        <div className="hero-actions">
          <ActivitiesHero activities={activities} currentActivity={slide.activity} />
        </div>
      </div>
    </section>
  )
}