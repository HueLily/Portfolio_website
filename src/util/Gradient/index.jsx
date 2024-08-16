import React, { useEffect, useState } from "react";

const InteractiveBubble = () => {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    const move = () => {
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);
      requestAnimationFrame(move);
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tgX, tgY]);

  return (
    <div
      className="interactive"
      style={{
        transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`,
      }}
    ></div>
  );
};


const GradientBackground = () => {
  return (
    <div className="gradient-bg" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <InteractiveBubble />
      </div>
    </div>
  );
};

export default GradientBackground;
