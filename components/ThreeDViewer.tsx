
import React, { useState } from 'react';

const ThreeDViewer: React.FC = () => {
  const [rotation, setRotation] = useState(45);
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const reset = () => {
    setRotation(45);
    setZoom(1);
    setIsRotating(false);
  };
  
  return (
    <div className="p-4 space-y-4">
      <header>
        <h1 className="text-3xl font-bold text-neutral-900">3D Viewer</h1>
        <p className="text-neutral-500">Interactive 3D model visualization</p>
      </header>
      
      <div className="bg-white p-4 rounded-xl border border-neutral-200">
        <div className="bg-neutral-800 rounded-lg h-72 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
          <div className="w-48 h-48 relative" style={{ transformStyle: 'preserve-3d', transform: `scale(${zoom}) rotateY(${rotation}deg) ${isRotating ? 'rotateX(-10deg)' : 'rotateX(0)'}`, transition: 'transform 0.5s' }}>
             {/* Cube Faces */}
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateY(0deg) translateZ(96px)', background: 'rgba(99, 102, 241, 0.7)' }}></div>
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateY(180deg) translateZ(96px)', background: 'rgba(139, 92, 246, 0.7)' }}></div>
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateY(90deg) translateZ(96px)', background: 'rgba(167, 139, 250, 0.7)' }}></div>
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateY(-90deg) translateZ(96px)', background: 'rgba(180, 150, 120, 0.7)' }}></div>
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateX(90deg) translateZ(96px)', background: 'rgba(34, 197, 94, 0.7)' }}></div>
            <div className="absolute w-48 h-48 border-2 border-white/50" style={{ transform: 'rotateX(-90deg) translateZ(96px)', background: 'rgba(59, 130, 246, 0.7)' }}></div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-neutral-600">Rotation</label>
                <input type="range" min="0" max="360" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-neutral-600">Zoom</label>
                <input type="range" min="0.5" max="1.5" step="0.01" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer" />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <button onClick={() => setIsRotating(!isRotating)} className="w-full bg-neutral-100 text-neutral-800 font-semibold py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors">
            {isRotating ? 'Stop' : 'Rotate'}
          </button>
          <button onClick={reset} className="w-full bg-neutral-100 text-neutral-800 font-semibold py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeDViewer;
