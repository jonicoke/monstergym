import { useEffect, useState } from 'react'
import { activities } from '../data/sitedata'
import '../styles/globals.css'

import '../styles/assets/preloader.css'
import '../styles/assets/EquipmentGallery.css'

import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Experience from '../components/Experience'
import Activities from '../components/activities/Activities'
import Schedule from '../components/Schedule'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  const [skipIntro, setSkipIntro] = useState(false)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSkipIntro(params.has('noIntro'))
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('is-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  return (
    <>

      <main className="site-shell">
        <Navbar />
        <HeroSlider activities={activities} />
        <Experience />
        <Activities activities={activities} />
        <Schedule />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}