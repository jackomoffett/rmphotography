import { Link } from "react-router-dom";

function Home() {
  return <div className="Home">
    <div className="logo">
      <img src="logo.jpg" height="150px" />
    </div>
    <div className="tiles">
      <Link to={'about'}>
        <div className="tile">About me</div>
      </Link>
      <Link to={'portraits'}>
        <div className="tile">Dog/horse portraits</div>
      </Link>
      <Link to={'gallery'}>
        <div className="tile">Gallery of image purchases</div>
      </Link>
      
      
    </div>
  </div>;
}

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Home;
