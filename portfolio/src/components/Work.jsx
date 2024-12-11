/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */
import React, { useEffect, useRef, useState } from "react";
import "./Work.css"; // Import your styles here

const Work = () => {
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const firstCardWidth = 300; // Approximate card width
  const isAutoPlay = true;

  useEffect(() => {
    const carousel = carouselRef.current;
    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    const carouselChildren = Array.from(carousel.children);

    // Duplicate last few cards to the beginning
    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Duplicate first few cards to the end
    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    const handleScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft =
          carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      setTimeoutId(
        setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500)
      );
    };

    const dragStart = (e) => {
      setIsDragging(true);
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      setIsDragging(false);
    };

    carousel.addEventListener("scroll", handleScroll);
    carousel.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    autoPlay();

    return () => {
      clearTimeout(timeoutId);
      carousel.removeEventListener("scroll", handleScroll);
      carousel.removeEventListener("mousedown", dragStart);
      document.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, [isDragging, startX, startScrollLeft, timeoutId]);

  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
  };

  return (
    <div id="work" className="box7">
      <div className="TopHeads">
        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          My Work
        </h1>
      </div>
      <br />
      <br />
      <div
        ref={wrapperRef}
        className="wrapper"
        data-aos="fade-down"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        <i
          id="left"
          className="fa fa-arrow-left"
          onClick={() => handleArrowClick("left")}
        />
        <ul className="carousel" ref={carouselRef}>
          <li className="card">
            <div className="img">
              <img
                src="https://pvvnl.org/wp-content/uploads/2022/12/Integrated-Grievances-Redress-System.jpg"
                alt="Complaint Management System"
                draggable="false"
              />
            </div>
            <h2>Complaint Management System</h2>
            <span>
              A system made for college that takes complaints of any issue faced
              by the student in the college campus.
            </span>
            <button>
              <a href="https://github.com/shravani-05/ComplaintManagementSystem">
                Visit GitHub
              </a>
            </button>
          </li>
          {/* Add more project cards as needed */}
        </ul>
        <i
          id="right"
          className="fa fa-arrow-right"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default Work;
