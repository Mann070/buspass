
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="bg-[#4a90e2] h-[50px] flex items-center relative flex-shrink-0 z-50">

      <div className="flex justify-between items-center w-full px-12">
        {/* Profile Icon */}
        <button 
          onClick={() => onViewChange(AppView.PROFILE)}
          className={`flex justify-center items-center ${currentView === AppView.PROFILE ? 'text-white scale-110' : 'text-white/80'}`}
          aria-label="Profile"
        >
          <i className="fa-solid fa-user text-white text-[22px]"></i>

        </button>

        {/* Home Gradient Circle Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button 
            onClick={() => onViewChange(AppView.PASS)}
            className="w-[72px] h-[72px] rounded-full bg-gradient-to-b from-[#37c8ff] to-[#4a90e2] border-[5px] border-white shadow-xl flex items-center justify-center transition-transform active:scale-95"
            aria-label="Home"
          >
            <i className="fa-solid fa-house text-[26px] text-white"></i>

          </button>
        </div>

        {/* Notification Icon */}
        <button 
          onClick={() => onViewChange(AppView.NOTIFICATIONS)}
          className={`flex justify-center items-center ${currentView === AppView.NOTIFICATIONS ? 'text-white scale-110' : 'text-white/80'}`}
          aria-label="Notifications"
        >
          <i className="fa-solid fa-bell text-white text-[22px]"></i>


        </button>
      </div>
    </nav>
  );
};

export default Navbar;
