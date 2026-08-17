const ActivitiesHero = ({ activities, currentActivity }) => {
  return (
    <div className="div-actividades">
      {activities.map((activity) => {
        const isActive =
          activity.name.toUpperCase() === currentActivity.toUpperCase()

        return (
          <div
            key={activity.name}
            className={`actividad-item ${isActive ? 'active' : ''}`}
          >
            <p
              className="actividades-hero"
              style={{ color: activity.color }}
            >
              {activity.name}
            </p>

            <span style={{ color: activity.color }} className="actividad-line" />
          </div>
        )
      })}
    </div>
  )
}

export default ActivitiesHero