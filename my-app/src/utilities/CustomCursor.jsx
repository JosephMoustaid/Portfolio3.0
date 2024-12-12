import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const pointRef = useRef(null); // Reference for the cursor point
  const circleRef = useRef(null); // Reference for the cursor circle

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const target = { x: width / 2, y: height / 2 };
    const position = { x: width / 2, y: height / 2 };
    const BORDER_WIDTH = 2;
    const DELAY_CURSOR = 0.1;

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const updateCursorPoint = () => {
      if (pointRef.current) {
        pointRef.current.style.left = `${target.x}px`;
        pointRef.current.style.top = `${target.y}px`;
      }
      requestAnimationFrame(updateCursorPoint);
    };

    const updateCursorCircle = () => {
      const dx = target.x - position.x;
      const dy = target.y - position.y;

      position.x += dx * DELAY_CURSOR;
      position.y += dy * DELAY_CURSOR;

      if (circleRef.current) {
        circleRef.current.style.left = `${position.x + BORDER_WIDTH - circleRef.current.offsetWidth / 2}px`;
        circleRef.current.style.top = `${position.y + BORDER_WIDTH - circleRef.current.offsetHeight / 2}px`;
      }
      requestAnimationFrame(updateCursorCircle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateCursorPoint();
    updateCursorCircle();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__point" ref={pointRef}></div>
      <div className="cursor__circle" ref={circleRef}></div>
    </div>
  );
};

export default CustomCursor;
