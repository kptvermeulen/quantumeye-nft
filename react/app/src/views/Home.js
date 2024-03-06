import React, { useEffect } from "react";
import Header from "components/Header";
import HeaderFV from "components/HeaderFV";
import About from "components/About";
import Value from "components/Value";
import VideoShowcase from "components/VideoShowcase";
import CTA from "components/CTA";
import Roadmap from "components/Roadmap";
import AboutArtist from "components/AboutArtist";
import USPs from "components/USPS";
import TeamExpanded from "components/TeamExpanded";
import "styles/main.css";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("scrollbar");
  }, []);

  const aS = {
    transform: "scale(1)",
    opacity: 1,
    transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0 },
  };
  const iA = { transform: "scale(0.5)", opacity: 0 };

  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const tH = Math.round(0.1 * (height / 2.5)) / 100;

  const dL = "https://discord.gg/XmZW8xp5gb";

  return (
    <>
      <Header discordLink={dL} />

      <HeaderFV discordLink={dL} />
      <USPs />
      <About aS={aS} iA={iA} tH={tH} discordLink={dL} />
      <Value aS={aS} iA={iA} tH={tH} discordLink={dL} />
      <Roadmap />
      {/*<Details aS={aS} iA={iA} tH={tH} />*/}
      <AboutArtist />
      <VideoShowcase />

      <TeamExpanded aS={aS} iA={iA} tH={tH} />
      <CTA discordLink={dL} />
    </>
  );
}
