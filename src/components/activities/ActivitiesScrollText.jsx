import { useEffect, useRef, useState } from "react";
import "../../styles/assets/activities-scroll-text.css";

const ActivitiesScrollText = ({ activities }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const handleClick = (index) => {
  if (index === current) {
    const activity = activities[index];

    window.dispatchEvent(
      new CustomEvent("select-plan", { detail: { planName: activity.name } })
    );

    requestAnimationFrame(() => {
      document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
    });
    return;
  }
  setCurrent(index);
};

  useEffect(() => {
    const activity = activities[current];
    if (!activity?.video2 || !videoRef.current) return;

    videoRef.current.src = activity.video2;
    videoRef.current.load();
    videoRef.current.play().catch(() => {});
  }, [current, activities]);

  return (
    <section className="activities-scroll" style={{ "--count": activities.length }}>
      <div className="activities-scroll__bg">
        <video
          ref={videoRef}
          className="activities-video-layer"
          src={activities[0]?.video2}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        />
        <div className="activities-scroll__shade" />
      </div>

      <header className="activities-scroll__header">
        <section className="activities-scroll__content">
          <h3>
            <span aria-hidden="true">ENTRENÁ&nbsp;</span>
            <span className="sr-only">Entrená con nuestras actividades.</span>
          </h3>

          <ul>
            {activities.map((activity, index) => (
              <li
                key={activity.name}
                className={index === current ? "is-active" : ""}
                style={{ "--activity-color": activity.color }}
                onClick={() => handleClick(index)}
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