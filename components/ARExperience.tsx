import React from 'react';

const ARExperience: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <header>
        <h1 className="text-3xl font-bold text-neutral-900">AR Experience</h1>
        <p className="text-neutral-500">Augmented reality viewer</p>
      </header>

      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
        <div className="relative bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95] rounded-lg h-96 p-4 flex flex-col justify-between overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          <div className="flex justify-between items-start text-white z-10">
            <p>Objects detected: 2</p>
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Active</span>
            </div>
          </div>
          
          {/* Simulated Detections */}
          <div className="relative flex-1 flex items-center justify-center">
             <div className="absolute top-1/4 left-4 w-40 h-40">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 bg-cyan-400/80 text-white text-xs px-2 py-1 rounded">Table (92%)</div>
            </div>
            <div className="absolute bottom-1/4 right-4 w-32 h-32">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
                {/* FIX: Reconstructed corrupted JSX and text content. */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 bg-cyan-400/80 text-white text-xs px-2 py-1 rounded">Chair (88%)</div>
            </div>
          </div>
          
          <div className="z-10 text-center">
            <p className="text-white/80 text-sm">Point your camera at a surface to begin</p>
          </div>
        </div>
        <div className="text-center">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                Activate AR Camera
            </button>
        </div>
      </div>
    </div>
  );
};

// FIX: Added missing default export.
export default ARExperience;
