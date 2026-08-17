import ActivityCard from "./ActivityCard";
import ActivitiesScrollText from "./ActivitiesScrollText";
import EquipmentGallery from "../EquipmentGallery";
import "../../styles/assets/activities.css";

const Activities = ({ activities }) => {
  return (
    <section id="actividades" className="activities">
      <EquipmentGallery />
      <ActivitiesScrollText activities={activities} />
    </section>
  );
};

export default Activities;