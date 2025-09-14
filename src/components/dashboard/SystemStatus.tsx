import React from 'react';
import { CheckCircle, AlertCircle, Shield } from 'lucide-react';

export const SystemStatus: React.FC = () => {
  const statusItems = [
    {
      title: 'API Status',
      status: 'Operational',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'AI Services',
      status: 'Running',
      icon: CheckCircle,
      color: 'text-blue-400'
    },
    {
      title: 'Security',
      status: 'Protected',
      icon: Shield,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <AlertCircle className="w-5 h-5 text-green-400 mr-2" />
        System Health
      </h3>
      
      <div className="space-y-4">
        {statusItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-gray-300 font-medium">{item.title}</span>
              </div>
              <span className={`text-sm font-medium ${item.color}`}>
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};