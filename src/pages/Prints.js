import dogPrint from "../assets/images/prints/dogPrint.jpeg";
import drinkPrint from "../assets/images/prints/drinkPrint.jpeg";
import horse2Print from "../assets/images/prints/horse2Print.jpeg";
import horsePrint from "../assets/images/prints/horsePrint.jpeg";
import horseRiderPrint from "../assets/images/prints/horseRiderPrint.jpeg";

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
      </div>
    </div>
  );
}

export default Prints;
