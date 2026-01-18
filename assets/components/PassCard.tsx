
import React, { useState, useEffect } from 'react';
import { UserData } from '../types';

interface PassCardProps {
  user: UserData;
}

const PassCard: React.FC<PassCardProps> = ({ user }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col h-full bg-white select-none overflow-hidden">
      {/* 1. Validity Banner - Top Green Section */}
      <div className="w-full bg-[#1db91d] text-white text-center py-2 flex-shrink-0 z-20">
        <div className="text-[22px] font-bold tracking-tight leading-tight uppercase">
          {formatDate(currentTime)}
        </div>
        <div className="text-[40px] font-bold leading-none tracking-tight">
          VALID
        </div>
      </div>

      {/* 2. Main Card Content Container */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        
        {/* Photo Section - Reduced to 62% to esure bottom content visibility */}
        <div className="relative w-full h-[68%] bg-white">





          <img
  src={user.photoUrl}
  alt="Student Portrait"
  className="w-full h-full object-fill"
/>



          
          
          {/* QR Code - Overlapping the bottom edge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] bg-white p-2 shadow-md z-30 border border-gray-200 rounded-sm">

            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${user.registerNumber}`} 
              alt="QR Code" 
              className="w-[88px] h-[88px] block"
            />
          </div>
        </div>

        {/* Identity Details Section - pt-12 to accommodate the QR code overlap */}
        <div className="flex-1 flex flex-col items-center pt-12 overflow-hidden">
          {/* Name - Semi-bold for refined look */}
          <h2 className="text-[28px] font-semibold text-black tracking-tight leading-none uppercase">
            {user.name}
          </h2>
          
          {/* Spacing between Name and Register Number */}
          <div className="h-1.5"></div>
          
          <p className="text-[22px] font-bold text-black leading-tight">
  {user.registerNumber}
</p>

{/* Route Bar – immediately after register number */}
<div className="w-full bg-[#1db91d] text-white text-center py-1.5 mt- text-[22px] font-black tracking-[0.12em] uppercase">
  {user.busRoute}
</div>

{/* white space exactly like official app */}
<div className="h-12 w-full bg-white"></div>



        </div>
      </div>
    </div>
  );
};

export default PassCard;
