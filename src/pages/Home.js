import { Link } from "react-router-dom";

import horseImage from "../assets/images/horse.jpg";
import flowerImage from "../assets/images/flower.jpeg";
import dogImage from "../assets/images/dog.jpeg";

function Home() {
  return (
    <div className="Home">
      <div className="block">
        <img
          className="img-horse"
          src={horseImage}
          alt="horse"
          height="550"
          width="550"
        />
        <img
          className="img-flower"
          src={flowerImage}
          alt="flower"
          height="350"
          width="350"
        />
        <img
          className="img-dog"
          src={dogImage}
          alt="dog"
          height="550"
          width="550"
        />
      </div>
    </div>
  );
}

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Home;
