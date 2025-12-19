import React, { useRef, useState, useEffect } from 'react';
import TiltText from '../Components/TiltText';
import Page1Bottom from '../Components/Page1Bottom';
import gsap from 'gsap';

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/10);
    setYVal((-e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10);
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 9,
        ease: 'power4.out',
      });
    }
  }, [xVal, yVal]);

  return (
    <div id="page1" onMouseMove={mouseMoving} className="h-screen bg-white p-3">
      <div id='page-1-in'
        className="h-full p-10 w-full shadow-lg shadow-gray-700 rounded-[40px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2116,h_1500,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover"
      >
        <img
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_148,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          className="h-20 absolute"
          alt="Frame"
        />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
