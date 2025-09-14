import React from 'react';
import { User, Building, DollarSign, Clock } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      title: 'New user registration',
      description: '2 minutes ago',
      icon: User,
      color: 'text-blue-400'
    },
    {
      id: 2,
      type: 'property',
      title: 'Property listing created',
      description: '5 minutes ago',
      icon: Building,
      color: 'text-green-400'
    },
    {
      id: 3,
      type: 'deal',
      title: 'Deal closed successfully',
      description: '1 hour ago',
      icon: DollarSign,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Clock className="w-5 h-5 text-teal-400 mr-2" />
        Recent User Activity
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm">{activity.title}</p>
                <p className="text-gray-400 text-xs">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};