import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "styles/static-roadmap.css";

export default function Details({ aS, iA, tH }) {
  const [ref, inView] = useInView({ threshold: tH });
  const [animated, setAnimated] = useState(false);
  const content = [
    {
      title: "TOKEN STRUCTURE",
      content:
        "With our own token called $BOXING we are able to create real benefits and advantages for people that are holding our NFT. Through staking your Boxing Boy you will be able to earn $BOXING tokens. These tokens can be used for many different things like participating in fights, buying merchandise, getting access to the VR game, buying tickets for real fights and much more. ",
    },
    {
      title: "GAME DEVELOPMENT",
      content:
        "By having a Boxing Boy you will be able to compete in our online events and games. There will be weekly tournaments and a huge monthly championship in which you can participate with the tokens. You can train your Boxing Boy to make him stronger and have a bigger chance of winning. In these Tournaments you will be able to win more tokens and other prices. Through this mechanism we will create a play to earn game where people can earn money. Next to the tournaments you will also be able to fight your friends and enemies in 1-vs-1 battles. These games will be played on the computer. We are also already working on creating and developing a VR game. In this game you will be able to be your own Boxing Boy as an avatar and do boxing training/fights from the comfort of your own house using VR glasses.",
    },
    {
      title: "HUGE COLLABORATIONS",
      content:
        "We have huge partnerships with boxing organisations, professional boxers and big influencers. These people all support this project completely and are helping us to make sure we create something for the boxing community that is never seen before. With these partnerships we are also able to do crazy giveaways and have amazing prices in our tournaments. You (as a holder) will get the chance to be part of the creative process behind future collaborations and partnerships. ",
    },
    {
      title: "COMMUNITY DRIVEN PROJECT",
      content:
        "Our project is completely community driven, we are going to make sure that our community will be one of the communities to spend time in. The community will be engaged in all the things we do. Being an owner of a Boxing Boy will give you voting rights in future project decisions. ",
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

  return (
    <div
      className="maxWidthContainer"
      style={{ padding: "50px 25px", position: "relative" }}
      id="scrollDetails"
      ref={ref}
    >
      <h3 className="coloredText">The future</h3>
      <h1 style={{ marginBottom: "40px" }}>DEVELOPMENT ROADMAP</h1>
      <div className="rmsTimeline"></div>
      <div style={{ marginTop: "80px" }}>
        {content.map((indContent, index) => {
          return (
            <motion.div animate={animations[index]} className="rmsTPoint">
              <div className="rmsTPMark">
                <div className="rmsTPMDot"></div>
                <h2 className="rmsTPMNumber">0{index + 1}</h2>
              </div>
              <div className="rmsTContent">
                <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {indContent.title}
                </h2>
                <p>{indContent.content}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
