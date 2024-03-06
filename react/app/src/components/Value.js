import React, { useEffect, useState } from "react";
import QECVR from "./../assets/img/QECVR.png";
import QECDesktop from "./../assets/img/QECDesktop.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Value({ aS, iA, tH, discordLink }) {
  const [ref, inView] = useInView();
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
    <div className="fadeBackgroundSection" ref={ref}>
      <div
        className="center maxWidthContainer"
        style={{ flexDirection: "column", padding: "150px 100px" }}
        id="scrollValue"
      >
        <h3 className="coloredText">The value of Quantum Eye</h3>
        <h1>Endless Value</h1>
        <div
          className="container "
          style={{ backgroundColor: "black", margin: "50px 0px" }}
        >
          <div className="column11">
            <div
              className="VcenterFull reducePadding20"
              style={{ padding: "50px" }}
            >
              <h2 style={{ marginBottom: "20px", lineHeight: "32px" }}>
                EyeNet
              </h2>
              <p>
                NFT holders are granted access to the EyeNet, our private
                networking platform where you can join community webinars,
                investment groups and discover endless business opportunities.
                Additionally, you can invest in ready-made investment solutions
                called vaults for lucrative and diversified investments.
              </p>
              <a href={discordLink} target="_blank">
                <div
                  className="btn roundBtn btnWhite"
                  style={{
                    fontWeight: 600,
                    maxWidth: "150px",
                    marginTop: "40px",
                  }}
                >
                  Join Discord
                </div>
              </a>

              <h2 style={{ marginBottom: "20px", marginTop: "80px" }}>
                Be Your NFT
              </h2>
              <p>
                Put on your VR headset and explore the Quantum Tower through the
                eyes of your NFT. Your NFT is dressed for success and lets
                everyone know you belong to the top 1% of investors when you are
                roaming the metaverse.
              </p>
            </div>
            <motion.div className="imageContainer" animate={animation}>
              <img
                className="removeOnSmallScreen"
                style={{ width: "80%" }}
                src={QECDesktop}
              ></img>
              <img src={QECVR} style={{ marginTop: "50px" }}></img>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
