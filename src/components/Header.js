import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <p className="App-header-logo">Rachel Moffett Photography</p>
        <ul className="App-header-links">
          <li>
            <HeaderLink page="home" />
          </li>
          <li>
            <HeaderLink page="about" />
          </li>
          <li>
            <HeaderLink page="contact" />
          </li>
        </ul>
      </header>
    </>
  );
};

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Header;
