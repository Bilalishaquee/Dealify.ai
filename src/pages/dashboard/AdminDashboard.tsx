import React from 'react';
import { StatCard } from '../../components/dashboard/StatCard';
import { SystemStatus } from '../../components/dashboard/SystemStatus';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { PlatformMetrics } from '../../components/dashboard/PlatformMetrics';
import { Users, Building, DollarSign, Bot, Shield, Activity } from 'lucide-react';
import dealifyLogo from '../../assets/dealify.png';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
            <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Monitor platform performance and user activity</p>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Total Users"
          value="1,247"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="bg-blue-500"
        />
        <StatCard
          title="Active Deals"
          value="89"
          change="+8% from last week"
          changeType="positive"
          icon={Building}
          iconColor="bg-green-500"
        />
        <StatCard
          title="Platform Revenue"
          value="$24.5K"
          change="+18% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-yellow-500"
        />
        <StatCard
          title="AI Queries Today"
          value="567"
          change="+5% from yesterday"
          changeType="positive"
          icon={Bot}
          iconColor="bg-purple-500"
        />
        </div>
      </div>

      {/* System Health Section */}
      <div className="mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">API Status</h3>
              <p className="text-xs sm:text-sm text-gray-600">System health</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-green-600 font-medium mt-2 text-sm sm:text-base">Operational</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI Services</h3>
              <p className="text-xs sm:text-sm text-gray-600">Machine learning</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-blue-600 font-medium mt-2 text-sm sm:text-base">Running</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Security</h3>
              <p className="text-xs sm:text-sm text-gray-600">System protection</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-purple-600 font-medium mt-2 text-sm sm:text-base">Protected</p>
        </div>
        </div>
      </div>

      {/* Activity and Metrics Section */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent User Activity</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-900">New user registration</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Building className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-900">Property listing created</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-900">Deal closed successfully</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Platform Metrics</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Daily Active Users</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">342</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Properties Listed Today</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">28</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Offers Made Today</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">67</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">AI Queries Processed</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">1,234</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};