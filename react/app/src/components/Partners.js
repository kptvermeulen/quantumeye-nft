import React, { useEffect, useState } from "react";
import Partner1 from "./../assets/img/socialblox.png";
import Partner2 from "./../assets/img/mtk-global.png";
import Partner22 from "./../assets/img/NoLimit Marketing.png";
import Partner3 from "./../assets/img/SkySports.png";
import HS from "./../assets/img/HSlogo.png";
import Augmento from "./../assets/img/AugmentoLogo.png";
import channel5 from "./../assets/img/channel5.png";
import cryptoInsiders from "./../assets/img/cryptoInsiders.png";
import "styles/partners.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Popup } from "libraries/functions";

export default function Partners({ aS, iA, tH }) {
  const [ref, inView] = useInView({ threshold: tH });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
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
        aS.transition.delay = delayInterval * 6;
        animation7.start(aS);
        setAnimated(true);
      } else {
        animation1.start(iA);
        animation2.start(iA);
        animation3.start(iA);
        animation4.start(iA);
        animation5.start(iA);
        animation6.start(iA);
        animation7.start(iA);
      }
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="maxWidthContainer "
      style={{ padding: "75px 50px" }}
    >
      <h2 className="center" style={{ marginBottom: "50px" }}>
        PARTNERS
      </h2>
      <div className="column111 mobilePartners">
        <a href="https://www.socialblox.io/" target="_blank" rel="noreferrer">
          <motion.div
            animate={animation1}
            className="container center"
            style={{
              padding: "30px 0px",
              backgroundColor: "#EAD61B",
              cursor: "pointer",
            }}
          >
            {/*<div className="btn roundBtn btnWhite partnerButton">
              Visit Website
            </div>*/}
            <img src={Partner1} style={{ height: "100px", width: "auto" }} />
          </motion.div>
        </a>
        <a href="https://www.skysports.com/" target="_blank" rel="noreferrer">
          <motion.div
            animate={animation2}
            className="container center containerHighlight"
            style={{
              padding: "60px 0px",
              backgroundColor: "#aaa",
              background: "linear-gradient(146.1deg, #eee 2.22%, #999 89.02%)",
              cursor: "pointer",
            }}
          >
            <img src={Partner3} style={{ height: "auto", width: "80%" }} />
          </motion.div>
        </a>
        <a
          href="https://www.hennessysports.com/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            animate={animation3}
            className="container center overflowImage"
            style={{
              backgroundColor: "#9B8559",
              cursor: "pointer",
              padding: "30px 0px",
            }}
          >
            <img src={HS} style={{ height: "120px", width: "auto" }} />
          </motion.div>
        </a>
      </div>
      <div className="column1111 mobilePartners" style={{ marginTop: "10px" }}>
        <a href="https://www.channel5.com/" target="_blank" rel="noreferrer">
          <motion.div
            animate={animation4}
            className="container center overflowImage"
            style={{
              background: "rgb(3,20,58)",
              background:
                "linear-gradient(133deg, rgba(3,20,58,1) 0%, rgba(9,60,111,1) 100%)",
              cursor: "pointer",
              padding: "30px 0px",
            }}
          >
            <img src={channel5} style={{ height: "120px", width: "auto" }} />
          </motion.div>
        </a>
        <a
          href="https://www.crypto-insiders.nl/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            animate={animation5}
            className="container center overflowImage"
            style={{
              backgroundColor: "#B81C1D",
              cursor: "pointer",
              padding: "30px 0px",
            }}
          >
            <img
              src={cryptoInsiders}
              style={{ height: "auto", width: "80%" }}
            />
          </motion.div>
        </a>
        <a href="https://augmento.com/" target="_blank" rel="noreferrer">
          <motion.div
            animate={animation6}
            className="container center overflowImage"
            style={{
              backgroundColor: "#2e83b3",
              cursor: "pointer",
              padding: "30px 0px",
            }}
          >
            <img src={Augmento} style={{ height: "auto", width: "80%" }} />
          </motion.div>
        </a>
        <a
          href="https://www.instagram.com/nolimitmarketingnl/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            animate={animation7}
            className="container center overflowImage"
            style={{
              backgroundColor: "#2D2765",
              cursor: "pointer",
              padding: "30px 0px",
            }}
          >
            <img src={Partner22} style={{ height: "auto", width: "80%" }} />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
