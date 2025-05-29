import "./content.css";
import Episodes from "./episodes/Episodes";
import Podcasts from "./podcasts/Podcasts";

const Content = () => {

  return (
    <div className="content">
      <Podcasts />
      <Episodes />
    </div>
  );

}
export default Content;
