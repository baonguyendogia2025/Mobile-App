
import React, { useState } from 'react';
import { ExternalLinkIcon } from './Icons';

interface NewsSource {
  name: string;
  category: string;
  url: string;
  color: string;
}

const newsSources: NewsSource[] = [
  { name: 'BBC News', category: 'World', url: 'https://www.bbc.com/news', color: 'bg-red-100 text-red-800' },
  { name: 'CNN', category: 'World', url: 'https://www.cnn.com', color: 'bg-red-100 text-red-800' },
  { name: 'TechCrunch', category: 'Technology', url: 'https://techcrunch.com', color: 'bg-green-100 text-green-800' },
  { name: 'The Verge', category: 'Technology', url: 'https://www.theverge.com', color: 'bg-green-100 text-green-800' },
  { name: 'Reuters', category: 'Business', url: 'https://www.reuters.com', color: 'bg-blue-100 text-blue-800' },
];

const NewsCard: React.FC<{ source: NewsSource; onClick: () => void }> = ({ source, onClick }) => (
  <div onClick={onClick} className="bg-white p-4 rounded-xl border border-neutral-200 flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow">
    <div>
      <h3 className="font-bold text-neutral-800">{source.name}</h3>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${source.color}`}>
        {source.category}
      </span>
    </div>
    <ExternalLinkIcon className="w-6 h-6 text-neutral-400" />
  </div>
);

const News: React.FC = () => {
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

    if (selectedUrl) {
        return (
            <div className="h-full flex flex-col">
                <div className="p-4 border-b border-neutral-200">
                    <button onClick={() => setSelectedUrl(null)} className="text-blue-600 font-semibold">
                        &larr; Back to sources
                    </button>
                </div>
                <iframe src={selectedUrl} title="News Source" className="w-full h-full border-0" />
            </div>
        );
    }

  return (
    <div className="p-4 space-y-4">
      <header>
        <h1 className="text-3xl font-bold text-neutral-900">News Sources</h1>
        <p className="text-neutral-500">Select a news source to read</p>
      </header>
      <div className="space-y-3">
        {newsSources.map((source) => (
          <NewsCard key={source.name} source={source} onClick={() => setSelectedUrl(source.url)} />
        ))}
      </div>
       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-bold">Note:</span> Some news sites may not load due to embedding restrictions. If a site doesn't display, try a different source.
          </p>
        </div>
    </div>
  );
};

export default News;
