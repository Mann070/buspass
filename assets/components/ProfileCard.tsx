
import React, { useRef } from 'react';
import { UserData } from '../types';

interface ProfileCardProps {
  user: UserData;
  onUpdateUser: (user: UserData) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onUpdateUser }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const detailRows = [
    { label: "Name", value: user.name },
    { label: "User Id", value: user.registerNumber },
    { label: "Institution", value: user.institution },
    { label: "Bus Route", value: user.busRoute },
    { label: "Boarding Point", value: user.boardingPoint },
    { label: "Destination", value: user.destination },
  ];

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateUser({
          ...user,
          photoUrl: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white h-full flex flex-col items-center px-4 py-8 relative overflow-hidden select-none border border-gray-200 m-2 rounded-sm shadow-sm">
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange}
      />

      {/* Background Watermark Logo */}
      

      <div className="z-10 w-full flex flex-col items-center h-full">
        {/* Profile Circle */}
        <div className="w-28 h-28 rounded-full border border-gray-300 p-0.5 mb-6 overflow-hidden bg-white shadow-sm flex-shrink-0">

          <img 
            src={user.photoUrl} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Institution Badge */}
        

        {/* Details Section */}
        <div className="w-full px-6 mt-2 space-y-4">
  {detailRows.map((row, idx) => (
    <div key={idx} className="flex items-center text-[15px] text-black">
      {/* Label */}
      <div className="w-[140px] font-medium text-gray-600">
        {row.label}
      </div>

      {/* Colon */}
      <div className="w-[10px] text-center font-medium">:</div>

      {/* Value */}
      <div className="flex-1 font-semibold">
        {row.value}
      </div>
    </div>
  ))}
</div>


        {/* Action Buttons */}
        <div className="flex gap-4 w-full px-6 mt-8 mb-4">
  <button
    className="flex-1 bg-[#4a90e2] text-white py-2.5 rounded-md font-semibold text-[14px] shadow-sm"
  >
    Change Password
  </button>

  <button
    onClick={handlePhotoClick}
    className="flex-1 bg-[#4a90e2] text-white py-2.5 rounded-md font-semibold text-[14px] shadow-sm"
  >
    Change Profile Photo
  </button>
</div>

      </div>
    </div>
  );
};

export default ProfileCard;
