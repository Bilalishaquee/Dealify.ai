import React, { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Phone, 
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  User,
  Calendar,
  Clock3
} from 'lucide-react';

export const AdminAICallingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const calls = [
    {
      id: 1,
      leadName: 'John Doe',
      leadPhone: '+1 (555) 123-4567',
      leadEmail: 'john.doe@example.com',
      property: '123 Main St, Dallas, TX',
      status: 'completed',
      type: 'outbound',
      duration: '4:32',
      startTime: '2024-12-20 10:30 AM',
      endTime: '2024-12-20 10:34 AM',
      outcome: 'interested',
      aiScore: 8.5,
      recordingUrl: '/recordings/call-1.mp3'
    },
    {
      id: 2,
      leadName: 'Jane Smith',
      leadPhone: '+1 (555) 987-6543',
      leadEmail: 'jane.smith@example.com',
      property: '456 Oak Ave, Houston, TX',
      status: 'in-progress',
      type: 'outbound',
      duration: '2:15',
      startTime: '2024-12-20 11:00 AM',
      endTime: null,
      outcome: null,
      aiScore: 7.2,
      recordingUrl: null
    },
    {
      id: 3,
      leadName: 'Mike Johnson',
      leadPhone: '+1 (555) 456-7890',
      leadEmail: 'mike.johnson@example.com',
      property: '789 Pine St, Austin, TX',
      status: 'scheduled',
      type: 'outbound',
      duration: null,
      startTime: '2024-12-20 02:00 PM',
      endTime: null,
      outcome: null,
      aiScore: null,
      recordingUrl: null
    },
    {
      id: 4,
      leadName: 'Sarah Wilson',
      leadPhone: '+1 (555) 321-0987',
      leadEmail: 'sarah.wilson@example.com',
      property: '321 Elm Dr, San Antonio, TX',
      status: 'completed',
      type: 'inbound',
      duration: '6:45',
      startTime: '2024-12-20 09:15 AM',
      endTime: '2024-12-20 09:22 AM',
      outcome: 'not-interested',
      aiScore: 6.8,
      recordingUrl: '/recordings/call-4.mp3'
    },
    {
      id: 5,
      leadName: 'David Brown',
      leadPhone: '+1 (555) 654-3210',
      leadEmail: 'david.brown@example.com',
      property: '555 Maple St, Fort Worth, TX',
      status: 'failed',
      type: 'outbound',
      duration: '0:12',
      startTime: '2024-12-20 08:45 AM',
      endTime: '2024-12-20 08:45 AM',
      outcome: 'no-answer',
      aiScore: 3.2,
      recordingUrl: '/recordings/call-5.mp3'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'outbound': return 'bg-blue-100 text-blue-800';
      case 'inbound': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case 'interested': return 'bg-green-100 text-green-800';
      case 'not-interested': return 'bg-red-100 text-red-800';
      case 'no-answer': return 'bg-gray-100 text-gray-800';
      case 'callback-requested': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCalls = calls.filter(call => {
    const matchesSearch = call.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.leadPhone.includes(searchTerm) ||
                         call.leadEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || call.status === selectedStatus;
    const matchesType = selectedType === 'all' || call.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalCalls = calls.length;
  const completedCalls = calls.filter(call => call.status === 'completed').length;
  const inProgressCalls = calls.filter(call => call.status === 'in-progress').length;
  const avgDuration = calls
    .filter(call => call.duration)
    .reduce((sum, call) => {
      const [minutes, seconds] = call.duration!.split(':').map(Number);
      return sum + minutes * 60 + seconds;
    }, 0) / calls.filter(call => call.duration).length;

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Calling Management</h1>
            <p className="text-gray-600 mt-2">Monitor and manage AI-powered calling campaigns</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Start Campaign</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add Lead</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Calls</p>
              <p className="text-2xl font-bold text-gray-900">{totalCalls}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <PhoneCall className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+15% from last week</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Calls</p>
              <p className="text-2xl font-bold text-gray-900">{completedCalls}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+8% from last week</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{inProgressCalls}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock3 className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Active now</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Duration</p>
              <p className="text-2xl font-bold text-gray-900">{formatDuration(avgDuration)}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
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
                placeholder="Search calls..."
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
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="scheduled">Scheduled</option>
              <option value="failed">Failed</option>
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="outbound">Outbound</option>
              <option value="inbound">Inbound</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calls Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Outcome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCalls.map((call) => (
                <tr key={call.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {call.leadName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {call.leadName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {call.leadPhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {call.property}
                    </div>
                    <div className="text-sm text-gray-500">
                      {call.startTime}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(call.type)}`}>
                      {call.type.charAt(0).toUpperCase() + call.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(call.status)}`}>
                      {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {call.duration || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {call.outcome ? (
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOutcomeColor(call.outcome)}`}>
                        {call.outcome.replace('-', ' ').charAt(0).toUpperCase() + call.outcome.replace('-', ' ').slice(1)}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {call.aiScore ? (
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          call.aiScore >= 8 ? 'text-green-600' :
                          call.aiScore >= 6 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {call.aiScore}/10
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {call.recordingUrl && (
                        <button className="text-blue-600 hover:text-blue-900">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-green-600 hover:text-green-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
