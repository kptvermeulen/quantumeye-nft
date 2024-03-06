import React from "react";
import Dzanar from "assets/img/Designer.png";
import DzanarLogo from "assets/img/DzanarLogo.png";
import "styles/aboutArtist.css";

export default function AboutArtist() {
  return (
    <div className="maxWidthContainer ">
      <div className="aboutArtistContainer">
        <div className="logoDzanarContainer">
          <img className="logoDzanar" src={DzanarLogo} alt="logo dzananr" />
        </div>
        <div className="column11 ">
          <div className="artistImageContainer">
            <img src={Dzanar} alt="Dzanar" />
          </div>
          <div className="container highlightContainer">
            <h2 style={{ marginBottom: "20px" }}>About the artist</h2>
            <p>
              Dzanar is a world-renowned artist known for producing fine digital
              art. He has worked with Chris Brown, Sam Feldt, Ed Sheeran and
              Akon to name a few.
              <br />
              <br /> After making a name for himself in the NFT industry on his
              own with pieces of digital art selling for over $300,000 he now
              intends to work with QEC to provide artwork to the high net worth
              individuals that make up the QEC investment group.
              <br />
              <br /> DZANAR’s vision for the QEC x DZANAR collection is bigger
              than art. When asked about the collection he said “People are not
              buying a piece of art, they are buying status and The NFT is proof
              that they belong to the elite of society”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
