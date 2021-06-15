import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="block">
        <img src="horse2.jpeg" alt="dog" height="450" width="450" />
        <img src="flower.jpeg" alt="dog" height="450" width="450" />
        <img src="dog.jpeg" alt="dog" height="450" width="450" />
      </div>
    </div>
  );
}

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Home;
