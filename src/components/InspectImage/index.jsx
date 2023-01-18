import React from "react";
import SuspenseImage from "../SuspenseImage";
import GridLoaderSuspense from "../GridLoaderSuspense";

import "./index.scss";

let x = 0;
let y = 0;

export default ({ imageSrc }) => {
  return (
    <div
      id="draggable-container"
      onDragOver={(evt) => {
        evt.preventDefault();
      }}
      onDragEnd={(evt) => {
        const rect = evt.target.getBoundingClientRect();
        const parentRect = evt.target.parentNode.getBoundingClientRect();

        const xDirectionRight =
          evt.clientX > parentRect.x + parentRect.width / 2;
        const yDirectionBottom =
          evt.clientY > parentRect.y + parentRect.height / 2;

        if (xDirectionRight) {
          x += 30;
          if (x >= rect.width - parentRect.width) {
            evt.target.style.left = `${-(rect.width - parentRect.width)}px`;
            x = rect.width - parentRect.width;
          } else evt.target.style.left = `${-x}px`;
        } else {
          x -= 30;
          if (x <= 0) {
            x = 0;
            evt.target.style.left = `${0}px`;
          } else evt.target.style.left = `${-x}px`;
        }

        if (yDirectionBottom) {
          y += 30;
          if (y >= rect.height - parentRect.height) {
            y = rect.height - parentRect.height;
            evt.target.style.top = `${-y}px`;
          } else evt.target.style.top = `${-y}px`;
        } else {
          y -= 30;
          if (y <= 0) {
            y = 0;
            evt.target.style.top = `${y}px`;
          } else evt.target.style.top = `${-y}px`;
        }
      }}
    >
      <div
        className="draggable"
        draggable={true}
        onDragStart={(e) => {
          var img = document.createElement("img");
          img.src = "/static/invisible-png.png";
          e.dataTransfer.setDragImage(img, 0, 0);
        }}
      >
        <GridLoaderSuspense>
          <SuspenseImage
            src={imageSrc}
            image={
              <img
                draggable={false}
                src={imageSrc}
                className="inspect-inner-image"
                style={{ pointerEvents: "none" }}
              />
            }
          />
        </GridLoaderSuspense>
      </div>
    </div>
  );
};
