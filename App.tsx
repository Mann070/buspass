
import React, { useState } from 'react';
import Header from './components/Header';
import PassCard from './components/PassCard';
import ProfileCard from './components/ProfileCard';
import Navbar from './components/Navbar';
import { AppView, UserData } from './types';
import { DEFAULT_USER } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.PASS);
  const [user, setUser] = useState<UserData>(DEFAULT_USER);

  const handleUpdateUser = (updatedUser: UserData) => {
    setUser(updatedUser);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.PASS:
        return <PassCard user={user} />;
      case AppView.PROFILE:
        return <ProfileCard user={user} onUpdateUser={handleUpdateUser} />;
      case AppView.NOTIFICATIONS:
        return (
          <div className="p-8 text-center text-gray-500 h-full flex flex-col justify-center bg-white">
            <i className="fa-solid fa-bell-slash text-6xl opacity-20 mb-4"></i>
            <p className="font-semibold text-lg">No new notifications</p>
          </div>
        );
      default:
        return <PassCard user={user} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col max-w-md mx-auto overflow-hidden touch-none border-x border-gray-200">
      <Header />
      
      <main className="flex-1 overflow-hidden relative">
        {renderView()}
      </main>

      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      {/* Bottom matching blue area for full edge-to-edge look */}
      <div className="h-4 bg-[#4a90e2] flex-shrink-0"></div>
    </div>
  );
};

export default App;
