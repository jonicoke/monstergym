import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { classes, days, activities } from '../data/siteData'
import '../styles/assets/Schedule.css'

export default function Schedule() {
  const [day, setDay] = useState('Lunes')

  return (
    <section
      id="horarios"
      className="schedule section-pad"
    >
      <div className="section-head reveal">
        <div>
          <span className="kicker">
            Tu semana, a tu ritmo
          </span>

          <h2>
            NUESTROS
            <br />
            HORARIOS.
          </h2>
        </div>

        <p>
          Elegí el momento. Nosotros ponemos la energía.
        </p>
      </div>


      <div className="day-tabs">
        {days.map((dayName) => (
          <button
            key={dayName}
            className={day === dayName ? 'active' : ''}
            onClick={() => setDay(dayName)}
          >
            {dayName.slice(0, 3)}
          </button>
        ))}
      </div>


      <div className="class-list">
        {classes[day].map(
          ({ time, activity, teacher }) => {

            const activityInfo =
              activities.find(
                (item) => item.name === activity
              )

            return (
              <div
                className="class-row"
                key={`${day}-${time}-${activity}`}
              >

                <div className="class-time">
                  <span>DESDE</span>

                  <strong>
                    {time}
                  </strong>
                </div>


                <div className="class-info">

                  <span
                    className="class-dot"
                    style={{
                      backgroundColor:
                        activityInfo?.color ||
                        'var(--red)',
                    }}
                  />

                  <div>
                    <h3>
                      {activity}
                    </h3>

                    <small>
                      {teacher}
                    </small>
                  </div>

                </div>


                <a
                  href="#contacto"
                  className="class-reserve"
                >
                  Reservar
                  <ArrowRight size={16} />
                </a>

              </div>
            )
          }
        )}
      </div>
    </section>
  )
}