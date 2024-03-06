import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "assets/img/1.png";
import image2 from "assets/img/2.png";
import image3 from "assets/img/3.png";
import image4 from "assets/img/4.png";
import image5 from "assets/img/5.png";
import image6 from "assets/img/6.png";
import image7 from "assets/img/7.png";
import "styles/team-expanded.css";

export default function Details({ aS, iA, tH }) {
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);
  const content = [
    {
      image: image1,
      title: "Mr. Mindset",
      subtitle: "Adam",
      content:
        "Mr.Mindset is our esoteric knowledge and NLP specialist dedicated to unleashing the potential of our members in the community. Mr.Mindset has years of experience as a trading psychologist and mindset mentor for trading and investing firms.",
    },
    {
      image: image2,
      title: "The Prophet",
      subtitle: "Robert",
      content:
        "The prophet has over 10 years of experience of investing and trading for his own account. His ability to accurately predict fundamental shifts in the economic environment allows him to take advantage of lucrative opportunities in the market. Besides the extensive DeFi knowledge, he brings to the table his attention to detail and previous work experience as a suit tailor has made sure that all our NFTs are dressed for success in fine Italian suits.",
    },
    {
      image: image3,
      title: "Mr. Intraday",
      subtitle: "Daryll",
      content:
        "Mr.Intraday has a deep understanding of liquidity and how smart money moves in FX and indices. He is an intraday trader dedicated to technical analysis using solely price action to find high return opportunities in the market for his proprietary trading accounts. Additionally, he manages his own firms capital through developing algorithmic trading strategies",
    },
    {
      image: image4,
      title: "The Scalper",
      subtitle: "Kiet",
      content:
        "The Scalper is our community manager making sure that everyone feels at home at QEC. If he takes more than 2 minutes to respond he is probably trading as he is also a proprietary FX trader specialising in scalping the markets for quick profits on the 1 minute time frame.",
    },
    {
      image: image5,
      title: "DZANAR",
      subtitle: "Dzanar",
      content:
        "The QEC NFT designer DZANAR has the unique ability to turn his imagination into pieces of fine art. In the last 10 years, he has worked with Chris Brown, Sam Feldt and Akon to name a few. Additionally, he has sold individual pieces of art for more than $300,000.",
    },
    {
      image: image6,
      title: "The Entrepreneur",
      subtitle: "Benson",
      content:
        "From nothing to successfully exiting a 9 figure business. If it were luck he would not be able to do it again. Welcome to The Entrepreneur, a serial entrepreneur with a comprehensive understanding of how to successfully start a business with sustainability for the long term in mind.",
    },
    {
      image: image7,
      title: "The Algorithm",
      subtitle: "Menno",
      content:
        "The Algorithm could sell a stake to a vegan with his level of experience in marketing. He has mastered his skills of social media marketing in e-commerce and runs a 7 figure marketing business. He is here to reveal the secrets of successfully running e-commerce businesses and give you valuable insights.",
    },
  ];
  const animations = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const delayInterval = 0.2;

  useEffect(() => {
    if (!animated) {
      if (inView) {
        for (let i = 0; i < animations.length; i++) {
          aS.transition.delay = delayInterval * i;
          animations[i].start(aS);
        }
        setAnimated(true);
      } else {
        for (let i = 0; i < animations.length; i++) {
          animations[i].start(iA);
        }
      }
    }
  }, [inView]);

  function isEven(value) {
    if (value % 2 == 0) return true;
    else return false;
  }

  return (
    <div
      className="maxWidthContainer"
      style={{ padding: "50px 25px", position: "relative" }}
      id="scrollDetails"
      ref={ref}
    >
      <h3 className="coloredText">The Experts</h3>
      <h1 style={{ marginBottom: "40px" }}>THE TEAM</h1>
      <div style={{ marginTop: "40px" }}>
        {content.map((indContent, index) => {
          return (
            <motion.div
              animate={animations[index]}
              className={"teamMemberContainer"}
            >
              <div
                style={isEven(index) ? {} : { order: 1 }}
                className="tmImageContainer"
              >
                <img src={indContent.image} alt="TeamMember" />
              </div>
              <div
                style={isEven(index) ? {} : { order: 0 }}
                className="tmContentContainer"
              >
                <h2 className="tmContentHeader">{indContent.title}</h2>
                {/*<h2
                  style={{
                    fontSize: "20px",
                    marginTop: "-10px",
                    fontWeight: 500,
                  }}
                  className="tmContentHeader coloredText"
                >
                  {indContent.subtitle}
                </h2>*/}
                <p className="tmContentParagraph">{indContent.content}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
