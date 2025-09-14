import React from 'react';
import { TrendingUp } from 'lucide-react';

export const PlatformMetrics: React.FC = () => {
  const metrics = [
    { label: 'Daily Active Users', value: 342 },
    { label: 'Properties Listed Today', value: 28 },
    { label: 'Offers Made Today', value: 67 },
    { label: 'AI Queries Processed', value: 1234 }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 text-teal-400 mr-2" />
        Platform Metrics
      </h3>
      
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">{metric.label}</span>
            <span className="text-white font-semibold">{metric.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};