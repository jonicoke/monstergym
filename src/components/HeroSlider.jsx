import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { gsap } from 'gsap'

import '../styles/assets/HeroSlider.css'
import ActivitiesHero from './activities/ActivitiesHero'

const SLIDES = [
  {
    image: '/images/boxeo.jpg',
    video: '/videos/hero-boxing.mp4',
    alt: 'Entrenamiento de boxeo',
    activity: 'Boxeo',
  },
  {
  image: '/images/funcional.jpg',
  video: '/videos/hero-funcional.mp4',
  alt: 'Entrenamiento funcional',
  activity: 'Funcional',
},
  {
    image: '/images/calistenia.jpg',
    video: '/videos/hero-calistenia.mp4',
    alt: 'Entrenamiento de calistenia',
    activity: 'Calistenia',
  },

  {
    image: '/images/danza.jpg',
    video: '/videos/hero-danza.mp4',
    alt: 'Clase de danza',
    activity: 'Danza',
  },
  {
    image: '/images/taekwondo.jpg',
    video: '/videos/hero-taekwondo.mp4',
    alt: 'Clase de taekwondo',
    activity: 'Taekwondo',
  },
  // telas
  { 
  image: '/images/telas.jpg',
  video: '/videos/hero-telas.mp4',
  alt: 'Clase de telas',
  activity: 'Telas',
},
  {
    image: '/images/acrobacia.jpg',
    video: '/videos/hero-acrobacia.mp4',
    alt: 'Clase de acrobacia',
    activity: 'Acrobacia',
  }
]

export default function HeroSlider({ activities }) {
  const [current, setCurrent] = useState(0)
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  /*
   * Cambio automático de slide
   */
  useEffect(() => {
  if (!heroVisible) return

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, 5500)

  return () => clearInterval(interval)
}, [heroVisible])
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setHeroVisible(entry.isIntersecting)
    },
    {
      threshold: 0.2,
    }
  )

  if (heroRef.current) {
    observer.observe(heroRef.current)
  }

  return () => observer.disconnect()
}, [])
  /*
   * Animación cuando cambia la imagen
   */
  useEffect(() => {
  if (!videoRef.current) return

  gsap.fromTo(
    videoRef.current,
    {
      scale: 1.08,
      opacity: 0.7,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    }
  )
}, [current])

  /*
   * Parallax suave al hacer scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !videoRef.current) return

      const scrollY = window.scrollY

      if (scrollY <= window.innerHeight) {
        videoRef.current.style.transform =
          `translateY(${scrollY * 0.18}px) scale(1.03)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const slide = SLIDES[current]

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="hero-slider"
    >

      <div className="hero-media">
        <video
          ref={videoRef}
          src={slide.video}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          />
      </div>

      {/* OSCURECIMIENTO */}
      <div className="hero-shade" />

      {/* CONTENIDO */}
      {/* <img className="logo-hero" src="/logo-sinfondo.png" alt="" /> */}
      <div
        ref={contentRef}
        className="hero-content"
      >
        <h1 className="hero-title">
          MONSTER
          <br />
          <em>IS MY HOME.</em>
        </h1>

        <div className="hero-actions">
          {/* <a
            className="btn ghost"
            href="#experiencia"
          >
            <Play
              size={16}
              fill="currentColor"
            />

            CONOCÉ MONSTER
          </a> */}
          <ActivitiesHero
            activities={activities}
            currentActivity={slide.activity}
          />
        </div>
      </div>
    </section>
  )
}