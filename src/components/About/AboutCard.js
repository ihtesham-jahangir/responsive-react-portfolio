import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ihtesham Jahangir </span>
            from <span className="purple"> Sargodha, Pakistan.</span>
            <br /> I am a Student of BSCS at <span className="purple"><b>Riphah International Univeristy ISB</b> </span> and a Full Stack Web Developer. I am a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems.
            <br />.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
              <span className="game" role="img" aria-labelledby="game">
                  🎮
                </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
              <span className="music" role="img" aria-labelledby="music">
                  🎵
                </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
              <span className="travel" role="img" aria-labelledby="travel">
                  🚟
                </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming is the art of turning logic into reality, crafting solutions from lines of code that shape the future."{" "}
          </p>
          <footer className="blockquote-footer">Ihtesham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
