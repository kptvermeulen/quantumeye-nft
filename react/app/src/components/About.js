import React, { useEffect, useState } from "react";
import QEC1 from "./../assets/img/QEC1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About({ aS, iA, tH, discordLink }) {
  const [ref, inView] = useInView({ threshold: tH });
  const animation = useAnimation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      if (inView) {
        animation.start(aS);
        setAnimated(true);
      } else {
        animation.start(iA);
      }
    }
  }, [inView]);

  return (
    <div className="maxWidthContainer" ref={ref}>
      <div
        className="column11"
        style={{ padding: "100px 0px" }}
        id="scrollAbout"
      >
        <div className="flexContainer order2">
          <h3 className="coloredText">About Quantum Eye Capital</h3>
          <h1 style={{ marginTop: "-5px", marginBottom: "20px" }}>OUR STORY</h1>
          <p>
            Quantum Eye Capital (QEC) was started by a group of traders,
            investors and entrepreneurs with the mutual goal of expanding their
            network to increase wealth-building opportunities. Together with a
            world-renowned artist, the QEC x DZANAR artwork collection was made.
            <br />
            The QEC x DZANAR artwork collection is comprised of 7,777 unique
            pieces of digital art made by the world-renowned artist DZANAR who
            has previously worked with Chris Brown, Ed Sheeran, Akon and many
            more. Each piece of fine art grants access to our exclusive
            investment group. <br />
            QEC builds investment solutions and social networking technology to
            establish the most prestigious investment group the world has to
            offer. Our mission is to promote synergy between high net worth
            individuals with the shared interest of accumulating wealth.
          </p>
          <a href={discordLink} rel="noreferrer" target="_blank">
            <div
              style={{ width: "150px", marginTop: "40px" }}
              className="btn roundBtn"
            >
              Join Now
            </div>
          </a>
        </div>
        <motion.div className="center order1 nftImage" animate={animation}>
          <img
            className="NFTImageImg"
            style={{ width: "100%", borderRadius: "25px" }}
            src={QEC1}
          ></img>
        </motion.div>
      </div>
    </div>
  );
}
