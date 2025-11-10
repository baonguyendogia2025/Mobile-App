
import React from 'react';
import { Tab } from '../types';
import { NewsIcon, VideoIcon, ThreeDIcon, ARIcon, AIChatIcon } from './Icons';

interface BottomNavBarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const navItems = [
  { tab: Tab.News, Icon: NewsIcon },
  { tab: Tab.Video, Icon: VideoIcon },
  { tab: Tab.ThreeD, Icon: ThreeDIcon },
  { tab: Tab.AR, Icon: ARIcon },
  { tab: Tab.AIChat, Icon: AIChatIcon },
];

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-neutral-100 border-t border-neutral-200">
      <div className="flex justify-around items-center h-20">
        {navItems.map(({ tab, Icon }) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center justify-center space-y-1 w-full transition-all duration-200 ${
                isActive ? 'text-blue-600' : 'text-neutral-500 hover:text-blue-500'
              }`}
            >
              <div className={`p-2 rounded-xl ${isActive ? 'bg-blue-100' : ''}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{tab}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
