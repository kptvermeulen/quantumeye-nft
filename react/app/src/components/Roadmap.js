import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "styles/roadmap.css";

export default function Roadmap() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const roadmapContent = [
    {
      index: "1",
      title: "Phase 1",
      content:
        "The start is where we are looking for the potential members of QEC through building up our Discord community. Individuals globally will be able to join our community and take part in daily live calls on trading, investing, mindset and business. After this, the NFT launch will determine which members become a part of the QEC investment group.",
    },
    {
      index: "2",
      title: "Phase 2",
      content:
        "Phase 2 starts once our NFT sale is finished. Holders of the QEC NFT will be able to access the EyeNet, our feature-rich private social media specially made for professionals. The QEC team will be adding new features to the EyeNet over time as the project grows.",
    },
    {
      index: "3",
      title: "Phase 3",
      content:
        "Phase 3 marks the start of the QEC DeFi project and intends to unleash the full potential of our elite investment community through bringing vaults to the EyeNet. Vaults are ready-made diversified DeFi investment solutions that allow anyone to take advantage of effective investment strategies with 0 required experience. ",
    },
    {
      index: "4",
      title: "Phase 4",
      content:
        "In the final stage of QEC, we establish the Quantum tower in the metaverse and build the infrastructure to govern the community as a Decentralised Autonomous Organisation (DAO). Members of QEC earn monthly rewards in QEC tokens for their input in governing the community.",
    },
  ];

  return (
    <div className="maxWidthContainer roadmapContainer" id="scrollRoadmap">
      <h3 className="coloredText">For the community</h3>
      <h1 style={{ marginBottom: "25px" }}>LAUNCH ROADMAP</h1>
      <div className="removeOnSmallScreen">
        <div className="carouselOverlay"></div>
        <Carousel
          centerMode={true}
          emulateTouch={true}
          showThumbs={false}
          onChange={(selectedIndex) => {
            setCurrentSlide(selectedIndex);
          }}
          swipeable={true}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          centerSlidePercentage={window.innerWidth > 800 ? 70 : 90}
          renderIndicator={false}
          width={"100%"}
          dynamicHeight={window.innerWidth > 800 ? false : true}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                className="nextBtnTimeline"
                style={{ right: "10px" }}
                onClick={onClickHandler}
              >
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  ></path>
                </svg>
              </div>
            )
          }
          renderArrowPrev={() => {
            "";
          }}
        >
          {roadmapContent.map((indRoadmapContent, index) => {
            return (
              <div
                className={
                  currentSlide === index
                    ? "timelineContainerBox selectedTimelineBox"
                    : "timelineContainerBox"
                }
              >
                <div className="container timelineContainer containerHighlight">
                  <div className="timelineFlex">
                    <h2 className="timelineNumber coloredText">
                      {indRoadmapContent.index}
                    </h2>
                    <div className="timelineTitleContainer">
                      <h2 className="timelineTitle">
                        {indRoadmapContent.title}
                      </h2>
                      {/*<h3 className="coloredText timelineSubtitle">
                      {indRoadmapContent.subtitle}
            </h3>*/}
                      <p className="timelineParagraph">
                        {indRoadmapContent.content}
                      </p>
                    </div>
                  </div>
                  <div className="timelineIndicator"></div>
                </div>
              </div>
            );
          })}
        </Carousel>

        <div className="timeLine"></div>
      </div>
      <div
        className="removeOnBigScreen flex"
        style={{ flexDirection: "column", margin: "50px 0px" }}
      >
        {roadmapContent.map((indRoadmapContent, index) => {
          return (
            <div
              className="container containerHighlight"
              style={{ margin: "5px 0px" }}
            >
              <h2 className="timelineNumber coloredText">
                {indRoadmapContent.index}
              </h2>
              <div className="timelineTitleContainer">
                <h2 className="timelineTitle">{indRoadmapContent.title}</h2>
                {/*<h3 className="coloredText timelineSubtitle">
                      {indRoadmapContent.subtitle}
            </h3>*/}
                <p className="timelineParagraph">{indRoadmapContent.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
