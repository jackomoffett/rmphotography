import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="block">
        <img
          className="img-horse"
          src="horse.jpeg"
          alt="horse"
          height="250"
          width="250"
        />
        <img
          className="img-flower"
          src="flower.jpeg"
          alt="flower"
          height="350"
          width="350"
        />
        <img
          className="img-dog"
          src="dog.jpeg"
          alt="dog"
          height="250"
          width="250"
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
