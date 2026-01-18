
import React from 'react';
import simatsLogo from "../assets/simats-logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-[#4a90e2] text-white px-6 h-14 flex items-center justify-between shadow-sm flex-shrink-0 z-50">
  {/* Left: Logo + Title */}
  <div className="flex items-center gap-2">
    <img
  src={simatsLogo}
  alt="SIMATS Logo"
  className="h-12 w-12 object-contain"

/>

    <h1 className="font-bold text-[20px] tracking-tight uppercase leading-tight">
      SIMATS TRANSPORTS
    </h1>
  </div>

  {/* Right: Menu */}
  <button className="p-1 opacity-90 active:opacity-100">
    <i className="fa-solid fa-bars text-[26px]"></i>
  </button>
</header>

  );
};

export default Header;
