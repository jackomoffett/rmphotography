import rmImage from "../assets/images/rm.JPG";

function About() {
  return (
    <div className="About">
      <div className="About-text">
        <p>About me</p>
        <p>
          Photography and horses have been lifelong partners to me. Born and
          raised in the Somerset countryside, around many different animals, I
          was desperate for a pony. I first rode when I was 7 and I have owned
          horses on and off since then. Dogs came along just a little later but
          have an equally large place in my heart. Their honesty and devotion a
          constant surprise.
        </p>
        <p>
          My photography become more serious with my first DSLR 15 years ago.
          During the interim years I have experimented with many differing types
          of photography, from abstract to fast motion captures. All still
          interest me, but I find I am drawn to photographing animals,
          constantly striving to capture images of honesty, beauty, truth and
          connection.
        </p>
      </div>
      <div className="About-img">
        <img src={rmImage} alt="Rachel Moffett" />
      </div>
    </div>
  );
}

export default About;
