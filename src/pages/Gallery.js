import img01 from "../assets/images/photography/1.jpg";
import img02 from "../assets/images/photography/2.jpg";
import img03 from "../assets/images/photography/3.jpg";
import img04 from "../assets/images/photography/4.jpg";
import img05 from "../assets/images/photography/5.jpg";
import img06 from "../assets/images/photography/6.jpg";
import img07 from "../assets/images/photography/7.jpg";
import img08 from "../assets/images/photography/8.jpg";

function Gallery() {
  return (
    <div className="Gallery">
      <img className="Gallery-Tile" src={img01} alt="first" />
      <img className="Gallery-Tile" src={img02} alt="first" />
      <img className="Gallery-Tile" src={img07} alt="first" />
      <img className="Gallery-Tile" src={img03} alt="first" />
      <img className="Gallery-Tile" src={img04} alt="first" />
      <img className="Gallery-Tile" src={img05} alt="first" />
      <img className="Gallery-Tile" src={img06} alt="first" />
      <img className="Gallery-Tile" src={img08} alt="first" />
    </div>
  );
}

export default Gallery;
