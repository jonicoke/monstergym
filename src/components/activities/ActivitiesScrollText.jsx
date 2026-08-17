import "../../styles/assets/activities-scroll-text.css";

const ActivitiesScrollText = ({ activities }) => {
  return (
    <section
      className="activities-scroll"
      style={{ "--count": activities.length }}
    >
      <header className="activities-scroll__header">
        <section className="activities-scroll__content">

          <h3>
            <span aria-hidden="true">
              ENTRENÁ&nbsp;
            </span>

            <span className="sr-only">
              Entrená con nuestras actividades.
            </span>
          </h3>

          <ul aria-hidden="true">
            {activities.map((activity, index) => (
              <li
                key={activity.name}
                style={{
                  "--i": index,
                  "--activity-color": activity.color,
                }}
              >
                {activity.name}.
              </li>
            ))}
          </ul>

        </section>
      </header>
    </section>
  );
};

export default ActivitiesScrollText;