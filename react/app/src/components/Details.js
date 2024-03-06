import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import QECBanner from "assets/img/QECBannerDetails.png";
import Designer from "assets/img/Designer.png";
import { useInView } from "react-intersection-observer";

export default function Details({ aS, iA, tH }) {
  const [ref, inView] = useInView({ threshold: tH });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const [animated, setAnimated] = useState(false);

  const delayInterval = 0.2;

  useEffect(() => {
    if (!animated) {
      if (inView) {
        aS.transition.delay = 0;
        animation1.start(aS);
        aS.transition.delay = delayInterval * 1;
        animation2.start(aS);
        aS.transition.delay = delayInterval * 2;
        animation3.start(aS);
        aS.transition.delay = delayInterval * 3;
        animation4.start(aS);
        aS.transition.delay = delayInterval * 4;
        animation5.start(aS);
        aS.transition.delay = delayInterval * 5;
        animation6.start(aS);
        setAnimated(true);
      } else {
        animation1.start(iA);
        animation2.start(iA);
        animation3.start(iA);
        animation4.start(iA);
        animation5.start(iA);
        animation6.start(iA);
      }
    }
  }, [inView]);

  return (
    <div
      className="maxWidthContainer"
      style={{ padding: "50px 0px" }}
      id="scrollDetails"
      ref={ref}
    >
      <h3 className="coloredText">Details about</h3>
      <h1 style={{ marginBottom: "40px" }}>THE PROJECT</h1>
      <div className="column111" style={{ gap: "25px" }}>
        <motion.div
          animate={animation1}
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              transform: "rotate(0.3deg)",
            }}
            src={QECBanner}
            alt="Banner"
          />
        </motion.div>
        <motion.div
          animate={animation2}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Quantum Tower (Metaverse)
          </h2>
          <p>
            Explore the metaverse through the eyes of your NFT. We have built an
            office specifically designed for 7,777 people to network and
            collaborate. A digital office allows us to offer features that were
            never possible in a physical setting such as customizable private
            workspaces, holograms and the ability to work from anywhere in the
            world giving you the ulimate level of freedom
          </p>
        </motion.div>
      </div>
      <div className="column111" style={{ gap: "25px", marginTop: "25px" }}>
        <motion.div
          animate={animation4}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            NFT Staking
          </h2>
          <p>
            By staking your NFT we simply pay you for having your NFT delisted
            from the market. You are rewarded in our $EYEQ which you can swap
            for other currencies or invest into vaults. Additionally you can
            even stake your earned tokens for more tokens and harness the power
            of compound interest for a lucrative source of passive income
          </p>
        </motion.div>
        <motion.div
          animate={animation5}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            VIP Vault Experience
          </h2>
          <p>
            We understand that many QEC NFT holders are active investors that
            are just as enthusiastic as us about our vault solutions. We reduce
            all vault fees by 50% for NFT holders and give access to our
            community only vaults for the ultimate VIP experience in QEC
          </p>
        </motion.div>
        <motion.div
          animate={animation6}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>EyeNet</h2>
          <p>
            Network with the elite business group of NFT holders with EyeNet,
            our secure and private social media made exclusively for NFT
            holders. Collaborate and leverage the skills of your fellow holders
            to effectively bring collective growth to your net worth.
          </p>
        </motion.div>
      </div>
      <div className="column111" style={{ gap: "25px", marginTop: "25px" }}>
        <motion.div
          animate={animation4}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Free Airdrop
          </h2>
          <p>
            Members that acquired their NFT at the mint phase of the project
            will be rewarded with a complimentary 12,858 $EYES at our token
            launch as a reward for being an early supporter of the project. You
            can invest your tokens into vaults, stake them for more or swap them
            for other cryptocurrency.
          </p>
        </motion.div>
        <motion.div
          animate={animation5}
          className="container containerHighlight"
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Art Collection: DZANAR x QEC
          </h2>
          <p>
            Each QEC NFT is a work of art made by world renowned artist DZANAR.
            Before the DZANAR x QEC collection he has collaborated with Chris
            Brown, Sam Feldt and Akon to name a few. NFT holders get the chance
            to own a unique piece of art made by a famous designer.
          </p>
        </motion.div>
        <motion.div animate={animation6} className="center">
          <img src={Designer} alt="designer" />
        </motion.div>
      </div>
    </div>
  );
}
