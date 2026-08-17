const ActivityCard = ({ activity, index }) => {
  return (
    <article className="activity-card reveal">
      <img src={activity.image} alt={activity.name} />

      <div className="activity-overlay"></div>

      <span className="card-index">
        0{index}
      </span>

      <span className="activity-tag">
        {activity.tag}
      </span>

      <div className="activity-copy">
        <h3>{activity.name}</h3>

        <p>
          {activity.text}
        </p>

        <a href="#">
          CONOCÉ MÁS
          <span>→</span>
        </a>
      </div>
    </article>
  );
};

export default ActivityCard;