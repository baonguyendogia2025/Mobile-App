
import React, { useState } from 'react';
import { Tab } from './types';
import BottomNavBar from './components/BottomNavBar';
import News from './components/News';
import Video from './components/Video';
import ThreeDViewer from './components/ThreeDViewer';
import ARExperience from './components/ARExperience';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.News);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.News:
        return <News />;
      case Tab.Video:
        return <Video />;
      case Tab.ThreeD:
        return <ThreeDViewer />;
      case Tab.AR:
        return <ARExperience />;
      case Tab.AIChat:
        return <AIChat />;
      default:
        return <News />;
    }
  };

  return (
    <div className="bg-neutral-800 flex justify-center items-center min-h-screen font-sans">
      <div className="w-full max-w-sm h-[844px] bg-neutral-50 shadow-2xl rounded-[40px] overflow-hidden flex flex-col border-4 border-black">
        <div className="flex justify-between items-center px-6 py-3 bg-neutral-100 border-b border-neutral-200">
            <span className="text-sm font-semibold">9:41</span>
            <div className="w-1/3 h-6 bg-black rounded-full"></div>
            <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728M12 18a3 3 0 100-6 3 3 0 000 6z" /></svg>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
        </div>
        <main className="flex-1 overflow-y-auto bg-neutral-50">
          {renderContent()}
        </main>
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="h-8 bg-neutral-100 flex justify-center items-center">
            <div className="w-32 h-1.5 bg-neutral-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;