import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor
}) => {
  const changeColors = {
    positive: 'text-white',
    negative: 'text-white',
    neutral: 'text-white'
  };

  // Map icon colors to background colors
  const getBackgroundColor = (iconColor: string) => {
    switch (iconColor) {
      case 'bg-red-500':
        return 'bg-red-500';
      case 'bg-blue-500':
        return 'bg-blue-500';
      case 'bg-green-500':
        return 'bg-green-500';
      case 'bg-purple-500':
        return 'bg-purple-500';
      case 'bg-orange-500':
        return 'bg-orange-500';
      case 'bg-yellow-500':
        return 'bg-yellow-500';
      case 'bg-indigo-500':
        return 'bg-indigo-500';
      case 'bg-pink-500':
        return 'bg-pink-500';
      default:
        return 'bg-blue-500';
    }
  };

  const backgroundColor = getBackgroundColor(iconColor);

  return (
    <div className={`${backgroundColor} rounded-xl p-6 hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};