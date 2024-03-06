import React from "react";
import "styles/faq.css";

const content = [
  {
    title: "TOKEN STRUCTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat sit amet est ac porttitor. Curabitur id risus sit amet justo molestie pellentesque. Sed sed blandit ipsum. In ut arcu tincidunt, porttitor nulla non, tincidunt massa. Fusce vitae neque a enim tincidunt ullamcorper quis eu eros. Pellentesque ac tempor nisl, vitae sodales mauris. Praesent sapien ex, hendrerit sit amet scelerisque sit amet, elementum a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mauris ac mi luctus dignissim. Quisque ex velit, mollis vestibulum bibendum nec, iaculis a velit. Aenean vehicula eget nisi ac ullamcorper. Fusce hendrerit ante in purus ultricies, at finibus massa ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "TOKEN STRUCTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat sit amet est ac porttitor. Curabitur id risus sit amet justo molestie pellentesque. Sed sed blandit ipsum. In ut arcu tincidunt, porttitor nulla non, tincidunt massa. Fusce vitae neque a enim tincidunt ullamcorper quis eu eros. Pellentesque ac tempor nisl, vitae sodales mauris. Praesent sapien ex, hendrerit sit amet scelerisque sit amet, elementum a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mauris ac mi luctus dignissim. Quisque ex velit, mollis vestibulum bibendum nec, iaculis a velit. Aenean vehicula eget nisi ac ullamcorper. Fusce hendrerit ante in purus ultricies, at finibus massa ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "TOKEN STRUCTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat sit amet est ac porttitor. Curabitur id risus sit amet justo molestie pellentesque. Sed sed blandit ipsum. In ut arcu tincidunt, porttitor nulla non, tincidunt massa. Fusce vitae neque a enim tincidunt ullamcorper quis eu eros. Pellentesque ac tempor nisl, vitae sodales mauris. Praesent sapien ex, hendrerit sit amet scelerisque sit amet, elementum a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mauris ac mi luctus dignissim. Quisque ex velit, mollis vestibulum bibendum nec, iaculis a velit. Aenean vehicula eget nisi ac ullamcorper. Fusce hendrerit ante in purus ultricies, at finibus massa ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "TOKEN STRUCTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat sit amet est ac porttitor. Curabitur id risus sit amet justo molestie pellentesque. Sed sed blandit ipsum. In ut arcu tincidunt, porttitor nulla non, tincidunt massa. Fusce vitae neque a enim tincidunt ullamcorper quis eu eros. Pellentesque ac tempor nisl, vitae sodales mauris. Praesent sapien ex, hendrerit sit amet scelerisque sit amet, elementum a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mauris ac mi luctus dignissim. Quisque ex velit, mollis vestibulum bibendum nec, iaculis a velit. Aenean vehicula eget nisi ac ullamcorper. Fusce hendrerit ante in purus ultricies, at finibus massa ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

export default function FAQ() {
  return (
    <div
      className="maxWidthContainer"
      style={{ padding: "75px 25px", paddingBottom: "0px" }}
    >
      <h3 className="coloredText">Still have questions?</h3>
      <h1 style={{ marginBottom: "40px" }}>FAQ</h1>
      {content.map((indContent, index) => {
        return (
          <div
            className="container containerHighlight FAQContainer"
            id={"FAQContainer" + index}
            style={{ cursor: "pointer" }}
          >
            <div
              className="flex"
              style={{ justifyContent: "space-between", paddingBottom: "20px" }}
              onClick={() => {
                document
                  .getElementById("FAQContainer" + index)
                  .classList.toggle("expanded");
              }}
            >
              <h2 className="FAQTitle">{indContent.title}</h2>
              <div className="">
                <svg viewBox="0 0 448 512" style={{ width: "25px" }}>
                  <path
                    fill="white"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    class=""
                  ></path>
                </svg>
              </div>
            </div>
            <p>{indContent.content}</p>
          </div>
        );
      })}
    </div>
  );
}
