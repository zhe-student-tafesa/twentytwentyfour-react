import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./slideAnimationComponent.css";

const SlideAnimationComponent = () => {
  // active indicates whether the current view is the first view (false) or the second view (true).
  const [active, setActive] = useState(false);
  //    
  const containerRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    if (active) {
      // Move to the second group of views (slide 25% to the left)
      timeline.to(".showcase__first-row", { x: "-25%", duration: 1 }); // x: '-50%' 是向左平移整个内容的一半视口宽度（50vw）；
      timeline.to(".showcase__second-row", { x: "-15%", duration: 1 }, "<"); // .to(..., '<') 表示两个动画同时开始（同步）；
    } else {
      // Move back to the initial view
      timeline.to(".showcase__first-row", { x: "0%", duration: 1 });
      timeline.to(".showcase__second-row", { x: "0%", duration: 1 }, "<");
    }
  }, [active]);

  return (
    <div className="container__main">
      <div className="showcase" ref={containerRef}>
        {/* First row: three pictures (pic1, dark block, pic3)  */}
        <div className="showcase__first-row">
          <img
            src="https://miningskills.com.au/wp-content/uploads/2025/06/We-Are-Committed.png"
            alt="pic1"
            className="showcase__image"
          />
          <div className="showcase__div showcase__div--dark" />
          <img
            src="https://miningskills.com.au/wp-content/uploads/2025/06/Over-50-Years.png"
            alt="pic3"
            className="showcase__image"
          />
        </div>
        {/* Row 2: three pictures (pic1, dark block, pic3)  */}
        {/* Row 2: three pictures (pic1, dark block, pic3)  */}
        <div className="showcase__second-row">
          <div
            className={`showcase__text showcase__text--left ${
              !active ? "showcase__text--visible" : "showcase__text--hidden"
            }`}
          >
            Fully accredited by Australian Government bodies and accredited as a
            Registered Training Organisation (RTO), our extensive experience and
            specialised team enable us to deliver customised training packages
            tailored to each client’s needs.
          </div>

          <div className="showcase__center">
            <img
              src="https://miningskills.com.au/wp-content/uploads/2025/06/Image2-excavator.png"
              alt="pic4"
              className="showcase__image showcase__image--center"
            />
          </div>

          <div
            className={`showcase__text showcase__text--right ${
              active ? "showcase__text--visible" : "showcase__text--hidden"
            }`}
          >
            MSA is a trusted provider of industry-leading solutions, supporting
            both local and global clients across training, safety, drill and
            blast, emergency management, and resource development.
          </div>
        </div>
        <button
          className="showcase__button--fixed"
          onClick={() => setActive(!active)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default SlideAnimationComponent;
