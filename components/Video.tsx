import React from 'react';

const SuggestedVideoCard: React.FC<{
  // FIX: Made thumbnail optional to allow for placeholder cards without an image.
  thumbnail?: string;
  title: string;
  channel: string;
  views: string;
  age: string;
  isPlaceholder?: boolean;
}> = ({ thumbnail, title, channel, views, age, isPlaceholder = false }) => (
  <div className="flex space-x-3">
    <div className="w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-300">
      {isPlaceholder ? (
        <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6.32 5.032A.75.75 0 017.25 4.5h5.5a.75.75 0 01.68.966l-1.5 4.5a.75.75 0 01-1.36.468L10 8.354l-1.07 1.598a.75.75 0 01-1.36-.468l-1.25-3.75a.75.75 0 01.68-.966zM7.653 12.5a.75.75 0 010-1.5h4.694a.75.75 0 010 1.5H7.653z" /></svg>
        </div>
      ) : (
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      )}
    </div>
    <div>
      <h4 className="font-bold text-sm line-clamp-2">{title}</h4>
      <p className="text-xs text-neutral-500">{channel}</p>
      <p className="text-xs text-neutral-500">{`${views} views · ${age}`}</p>
    </div>
  </div>
);

const Video: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/gAYL5H46QnQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Introduction to 3D Modeling - Complete Tutorial</h2>
        <p className="text-sm text-neutral-500">Blender Guru • 1.2M views • 2 days ago</p>
        <div className="flex space-x-2 my-3">
            <button className="bg-neutral-100 text-sm font-semibold py-2 px-4 rounded-full">👍 125K</button>
            <button className="bg-neutral-100 text-sm font-semibold py-2 px-4 rounded-full">Share</button>
            <button className="bg-neutral-100 text-sm font-semibold py-2 px-3 rounded-full">...</button>
        </div>
        <hr className="my-4"/>
        <h3 className="font-bold mb-3">Suggested Videos</h3>
        <div className="space-y-4">
          <SuggestedVideoCard 
            thumbnail="https://picsum.photos/seed/3d/200/120"
            title="Introduction to 3D Modeling - Complete..."
            channel="Blender Guru"
            views="1.2M"
            age="2 days ago"
          />
          <SuggestedVideoCard 
            isPlaceholder
            title="AR Technology: The Future is Here"
            channel="Marques Brownlee"
            views="850K"
            age="1 week ago"
          />
          <SuggestedVideoCard 
            thumbnail="https://picsum.photos/seed/ai/200/120"
            title="AI Chatbots Explained Simply"
            channel="Fireship"
            views="2.1M"
            age="3 days ago"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;