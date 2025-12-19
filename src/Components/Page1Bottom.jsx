import React, { useEffect } from "react";
import { gsap } from 'gsap';

const Page1Bottom = () => {

  useEffect(() => {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: 1,
      ease: 'linear'
    });
  }, []);

  return (
    <div className="absolute bottom-12 w-full text-sm flex items-end justify-between">
      <div>
        <h1 className="text-white">BRAND DESIGN | WEBSITE DESIGN</h1>
        <h1 className="text-gray-400">BESPOKE FREELANCE</h1>
      </div>
      <div id="banner" className="  mr-20 leading-relaxed">
        <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="logo" 
        className="h-[9vw]"
        />
        <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="logo"
        className=" h-[9vw] mt-4"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
