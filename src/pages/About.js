import rmImage from "../assets/images/rm.JPG";

function About() {
  return (
    <div className="About">
      <div className="About-text">
        <p>About me</p>
        <p>
          Photography has been a life long journey for me. Born and raised in
          the Somerset countryside, I grew up roaming the surrounding area. I
          was always accompanied by many different animals, all captured (images
          treasured) with my small Kodak camera.
        </p>
        <p>
          I made the move into DSLRs, when my family grew. I wanted better
          quality memories which I was in control of, without the frozen
          expressions we were getting from school/set-up photography sessions.
        </p>
        <p>
          In the last couple of years, I have been engaged in many differing
          types of photography (examples can be found in my 'gallery' section.)
          I find photography very immersive and am constantly striving to move
          forward.
        </p>
        <p>
          Please email me if you would like to discuss having some images taken.
        </p>
        <p>Prices are contained in the Fees section of the website.</p>
        <p>Thank you, Rachel.</p>
      </div>
      <div className="About-img">
        <img src={rmImage} alt="Rachel Moffett" />
      </div>
    </div>
  );
}

export default About;
