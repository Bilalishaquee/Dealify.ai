import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Play, 
  Pause,
  Settings,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Zap,
  Mail,
  MessageSquare,
  Calendar,
  Bell
} from 'lucide-react';

export const AdminAutomationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const automations = [
    {
      id: 1,
      name: 'Welcome Email Sequence',
      type: 'email',
      status: 'active',
      triggers: 1247,
      executions: 1247,
      successRate: 98.5,
      lastRun: '2024-12-20 10:30',
      nextRun: '2024-12-21 10:30',
      description: 'Sends welcome emails to new users'
    },
    {
      id: 2,
      name: 'Property Match Notifications',
      type: 'notification',
      status: 'active',
      triggers: 89,
      executions: 89,
      successRate: 100,
      lastRun: '2024-12-20 09:15',
      nextRun: '2024-12-20 15:30',
      description: 'Notifies users of matching properties'
    },
    {
      id: 3,
      name: 'Deal Follow-up Reminders',
      type: 'email',
      status: 'paused',
      triggers: 45,
      executions: 42,
      successRate: 93.3,
      lastRun: '2024-12-19 14:20',
      nextRun: 'Paused',
      description: 'Sends follow-up reminders for pending deals'
    },
    {
      id: 4,
      name: 'Market Analysis Reports',
      type: 'report',
      status: 'active',
      triggers: 7,
      executions: 7,
      successRate: 100,
      lastRun: '2024-12-20 08:00',
      nextRun: '2024-12-27 08:00',
      description: 'Generates weekly market analysis reports'
    },
    {
      id: 5,
      name: 'Inactive User Re-engagement',
      type: 'email',
      status: 'active',
      triggers: 23,
      executions: 23,
      successRate: 95.7,
      lastRun: '2024-12-19 16:45',
      nextRun: '2024-12-26 16:45',
      description: 'Re-engages inactive users with targeted emails'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email': return 'bg-blue-100 text-blue-800';
      case 'notification': return 'bg-purple-100 text-purple-800';
      case 'report': return 'bg-green-100 text-green-800';
      case 'sms': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return Mail;
      case 'notification': return Bell;
      case 'report': return TrendingUp;
      case 'sms': return MessageSquare;
      default: return Bot;
    }
  };

  const filteredAutomations = automations.filter(automation => {
    const matchesSearch = automation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         automation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || automation.status === selectedStatus;
    const matchesType = selectedType === 'all' || automation.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalAutomations = automations.length;
  const activeAutomations = automations.filter(auto => auto.status === 'active').length;
  const totalExecutions = automations.reduce((sum, auto) => sum + auto.executions, 0);
  const avgSuccessRate = automations.reduce((sum, auto) => sum + auto.successRate, 0) / automations.length;

  return (
    <div className="bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Automation Management</h1>
            <p className="text-gray-600 mt-2">Manage platform automations and workflows</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Automation</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Automations</p>
              <p className="text-2xl font-bold text-gray-900">{totalAutomations}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+3 this month</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Automations</p>
              <p className="text-2xl font-bold text-gray-900">{activeAutomations}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+1 this week</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Executions</p>
              <p className="text-2xl font-bold text-gray-900">{totalExecutions.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">{avgSuccessRate.toFixed(1)}%</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+2.1% from last week</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search automations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="error">Error</option>
              <option value="draft">Draft</option>
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="email">Email</option>
              <option value="notification">Notification</option>
              <option value="report">Report</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>
      </div>

      {/* Automations Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Automation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Run
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Run
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAutomations.map((automation) => {
                const TypeIcon = getTypeIcon(automation.type);
                return (
                  <tr key={automation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {automation.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {automation.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(automation.type)}`}>
                        {automation.type.charAt(0).toUpperCase() + automation.type.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(automation.status)}`}>
                        {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {automation.executions} / {automation.triggers}
                      </div>
                      <div className="text-sm text-gray-500">
                        {automation.successRate}% success
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {automation.lastRun}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {automation.nextRun}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        {automation.status === 'active' ? (
                          <button className="text-yellow-600 hover:text-yellow-900">
                            <Pause className="w-4 h-4" />
                          </button>
                        ) : (
                          <button className="text-green-600 hover:text-green-900">
                            <Play className="w-4 h-4" />
                          </button>
                        )}
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Settings className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
