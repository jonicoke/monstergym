import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { plans } from '../data/sitedata'
import '../styles/assets/Pricing.css'

export default function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const [visibleCards, setVisibleCards] = useState(3)

  const plansWindowRef = useRef(null)
  const plansTrackRef = useRef(null)

  const maxIndex = Math.max(
    0,
    plans.length - visibleCards
  )

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  const handlePrevious = () => {
    if (!canGoPrevious) return

    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    if (!canGoNext) return

    setCurrentIndex((prev) => prev + 1)
  }

  useEffect(() => {
    const windowElement = plansWindowRef.current
    const trackElement = plansTrackRef.current

    if (!windowElement || !trackElement) return

    const updateCarousel = () => {
      const windowWidth =
        windowElement.getBoundingClientRect().width

      let cards
      let gap

      if (windowWidth <= 600) {
        cards = 1
        gap = 0
      } else if (windowWidth <= 900) {
        cards = 2
        gap = 15
      } else {
        cards = 3
        gap = 20
      }

      setVisibleCards((prev) => {
        if (prev !== cards) {
          return cards
        }

        return prev
      })

      const cardWidth =
        (windowWidth - gap * (cards - 0)) / cards

      trackElement.style.setProperty(
        '--card-width',
        `${cardWidth}px`
      )

      trackElement.style.setProperty(
        '--card-gap',
        `${gap}px`
      )

      const safeIndex = Math.min(
        currentIndex,
        Math.max(0, plans.length - cards)
      )

      const offset =
        safeIndex * (cardWidth + gap)

      trackElement.style.transform =
        `translate3d(-${offset}px, 0, 0)`
    }

    updateCarousel()

    const resizeObserver =
      new ResizeObserver(updateCarousel)

    resizeObserver.observe(windowElement)

    window.addEventListener(
      'resize',
      updateCarousel
    )

    return () => {
      resizeObserver.disconnect()

      window.removeEventListener(
        'resize',
        updateCarousel
      )
    }
  }, [currentIndex, plans.length])

  /*
   * Si cambiamos de desktop → mobile y el índice
   * actual ya no existe, lo corregimos.
   */
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(
        prev,
        Math.max(0, plans.length - visibleCards)
      )
    )
  }, [visibleCards])

  return (
    <section
      id="planes"
      className="pricing section-pad"
    >
      <div className="center-head reveal">
        <span className="kicker">
          Invertí en un
        </span>

        <h2>
          ÚNICO PLAN.
        </h2>

        <p>
          Empezá cuando quieras.
        </p>
      </div>

      <div className="pricing-carousel">

        <button
          type="button"
          className="pricing-arrow pricing-arrow--prev"
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          aria-label="Planes anteriores"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          ref={plansWindowRef}
          className="plans-window"
        >
          <div
            ref={plansTrackRef}
            className="plans"
          >
            {plans.map((p) => {
              const isFeatured =
                hoveredPlan === p.name

              return (
                <article
                  key={p.name}
                  className={`plan ${
                    isFeatured ? 'featured' : ''
                  }`}
                  onMouseEnter={() =>
                    setHoveredPlan(p.name)
                  }
                  onMouseLeave={() =>
                    setHoveredPlan(null)
                  }
                >
                  {isFeatured && (
                    <span className="popular">
                      MENSUALIDAD
                    </span>
                  )}

                  <h3>{p.name}</h3>

                  <p>
                    {p.note}
                  </p>

                  <div className="price">
                    <sup>$</sup>
                    {p.price}
                    <small>/mes</small>
                  </div>

                  <div className="price-class">
                    ${p.priceClass}
                    <small>/clase</small>
                  </div>

                  <ul>
                    {p.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className={`btn ${
                      isFeatured
                        ? 'primary'
                        : 'outline'
                    }`}
                  >
                    Elegir plan
                    <ArrowRight size={17} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>

        <button
          type="button"
          className="pricing-arrow pricing-arrow--next"
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Siguientes planes"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="pricing-counter">
        <div className="pricing-counter-line">
          <div
            style={{
              width: `${
                maxIndex === 0
                  ? 100
                  : ((currentIndex + 1) /
                      (maxIndex + 1)) *
                    100
              }%`,
            }}
          />
        </div>
      </div>
    </section>
  )
}