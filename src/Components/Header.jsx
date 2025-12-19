import React from 'react';
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className="fixed flex top-4 right-4  p-10 z-10">
      <button className="px-4 py-2 text-white font-semibold bg-black rounded-full border-2 border-white hover:bg-gray-800 focus:outline-none">
        Hire Me
      </button>
      <i class="ri-menu-line text-4xl ml-3 text-white "></i>
    </div>
  );
};

export default Header
