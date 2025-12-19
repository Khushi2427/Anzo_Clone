import React from 'react';
import videoFile from '../assets/video.mp4';  // Import the video file

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-white'>
      <img
        className='absolute z-20 scale-90 xs:scale-75 sm:scale-50 md:scale-75 lg:scale-75 xl:scale-90 2xl:scale-150'
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1358,h_781,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png"
        alt="pic"
      />
      <video
        loop
        muted
        autoPlay
        className='z-10 h-[60vh] w-[66vw] xs:h-[30vh] xs:w-[30vw] sm:h-[35vh] sm:w-[85vw] md:h-[50vh] md:w-[60vw] lg:h-[70vh] lg:w-[67vw] xl:h-[80vh] xl:w-[60vw] 2xl:h-[75vh] 2xl:w-[30vw] relative object-cover'
        src={videoFile}  // Use the imported video as the source
      ></video>
      <div className='absolute z-0 h-0.5 w-[85vw] top-[45%] bg-black'></div>
      <div className='absolute z-0 h-0.5 w-[90vw] top-[50%] bg-black'></div>
      <div className='absolute z-0 h-0.5 w-[95vw] top-[55%] bg-black'></div>
    </div>
  );
};

export default Page3;
