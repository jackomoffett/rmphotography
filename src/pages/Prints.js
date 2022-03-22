import dogPrint from "../assets/images/prints/dogPrint.jpeg";
import drinkPrint from "../assets/images/prints/drinkPrint.jpeg";
import horse2Print from "../assets/images/prints/horse2Print.jpeg";
import horsePrint from "../assets/images/prints/horsePrint.jpeg";
import horseRiderPrint from "../assets/images/prints/horseRiderPrint.jpeg";
import blaze from "../assets/images/prints/Blaze.jpg";
import bouquet from "../assets/images/prints/Bouquet.jpg";
import connection from "../assets/images/prints/Connection.jpg";
import escape from "../assets/images/prints/Escape.jpg";
import grace from "../assets/images/prints/Grace.jpg";
import hero from "../assets/images/prints/Hero.jpg";
import ligthening from "../assets/images/prints/Lightening.jpg";
import lilyPads from "../assets/images/prints/lilyPads.jpg";
import memories from "../assets/images/prints/Memories.jpg";
import patience from "../assets/images/prints/Patience.jpg";
import seaspray from "../assets/images/prints/Seaspray.jpg";
import serene from "../assets/images/prints/Serene.jpg";
import sisters from "../assets/images/prints/Sisters.jpg";
import solitude from "../assets/images/prints/Solitude.jpg";

function Prints() {
  return (
    <div className="Prints">
      <p>
        All signed prints from 8 x 8 inches to 8 x 12 inches £45 including
        postage.
      </p>
      <div className="Prints-Display">
        <div className="Print-Tile">
          <img
            className="Print-Tile-Img"
            src={horsePrint}
            alt="horse galloping"
          />
          <p>"Freedom"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={horse2Print} alt="horse head" />
          <p>"Beauty"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={dogPrint} alt="dog" />
          <p>"Crosshairs"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={drinkPrint} alt="drink" />
          <p>"The show"</p>
        </div>
        <div className="Print-Tile">
          <img
            className="Print-Tile-Img"
            src={horseRiderPrint}
            alt="horse rider"
          />
          <p>"The pat"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={blaze} alt="Horse" />
          <p>"Blaze"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={bouquet} alt="Horse" />
          <p>"Bouquet"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={connection} alt="Horse" />
          <p>"Connection"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={escape} alt="Horse" />
          <p>"Escape"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={grace} alt="Horse" />
          <p>"Grace"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={hero} alt="Horse" />
          <p>"Hero"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={ligthening} alt="Horse" />
          <p>"Lightening"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={lilyPads} alt="Horse" />
          <p>"Lily Pads"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={memories} alt="Horse" />
          <p>"Memories"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={patience} alt="Horse" />
          <p>"Patience"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={seaspray} alt="Horse" />
          <p>"Seaspray"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={serene} alt="Horse" />
          <p>"Serene"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={sisters} alt="Horse" />
          <p>"Sisters"</p>
        </div>
        <div className="Print-Tile">
          <img className="Print-Tile-Img" src={solitude} alt="Horse" />
          <p>"Solitude"</p>
        </div>
      </div>
    </div>
  );
}

export default Prints;
