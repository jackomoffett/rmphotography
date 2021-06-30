import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="App-header-logo">
          <p>Rachel Moffett</p> <p>PHOTOGRAPHY</p>
        </div>
        <ul className="App-header-links">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/photography"}>Photography</Link>
          </li>
        </ul>
        {/* <div className="App-header-socials">
          <a href="https://www.facebook.com/RachelMoffettphotography">
            Facebook
          </a>
        </div> */}
      </header>
    </>
  );
};

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Header;
