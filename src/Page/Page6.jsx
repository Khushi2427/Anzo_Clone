import React from 'react';
import videoFile from '../assets/hehe.mp4';

const Page6 = () => {
  return (
    <div className="h-screen relative w-full p-5 bg-white">
      <div className="h-full w-full rounded-3xl overflow-hidden relative bg-black">
        <video
          loop
          muted
          autoPlay
          src={videoFile}
          className="absolute h-full w-full object-cover"
        ></video>
        
        <div className="absolute z-10 bottom-5 left-5 md:bottom-10 md:left-10 lg:bottom-16 lg:left-16 text-white font-[shi]">
          <h1 className="text-[20vw] md:text-[15vw] lg:text-[10vw] xl:text-[8vw]">ABOUT</h1>
        </div>
      </div>
    </div>
  );
};

export default Page6;
