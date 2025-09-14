import React, { useState } from 'react';
import { Plus, MoreHorizontal, Link, Clock, Table, Kanban, BarChart3, Upload, Download, Filter, Search, Users, TrendingUp, DollarSign, Target, FileText, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export const CRMPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('main-table');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const activeDeals = [
    {
      id: 1,
      company: 'Twister Sports',
      owner: { name: 'John Doe', avatar: 'JD' },
      propertyAddress: '123 Main St, Houston, TX 77002',
      contacts: 'Madison Doyle',
      stage: 'Qualified',
      stageColor: 'bg-blue-600',
      closeProbability: '80%',
      probabilityColor: 'bg-blue-500',
      estimatedDeal: '$7,500',
      lastActivity: '2 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      company: 'Ridge Software',
      owner: { name: 'Jane Smith', avatar: 'JS' },
      propertyAddress: '456 Oak Ave, Dallas, TX 75201',
      contacts: 'Phoenix Levy',
      stage: 'Proposal',
      stageColor: 'bg-purple-600',
      closeProbability: '60%',
      probabilityColor: 'bg-purple-500',
      estimatedDeal: '$10,000',
      lastActivity: '1 day ago',
      priority: 'medium'
    },
    {
      id: 3,
      company: 'Bluemart',
      owner: { name: 'Team', avatar: 'T', isTeam: true },
      propertyAddress: '789 Pine Rd, Austin, TX 73301',
      contacts: 'Leilani Krause',
      stage: 'Negotiation',
      stageColor: 'bg-purple-400',
      closeProbability: '40%',
      probabilityColor: 'bg-blue-300',
      estimatedDeal: '$5,500',
      lastActivity: '3 days ago',
      priority: 'low'
    }
  ];

  const closedWonDeals = [
    {
      id: 4,
      company: 'Yelloworks',
      owner: { name: 'Alice Johnson', avatar: 'AJ' },
      propertyAddress: '321 Elm St, San Antonio, TX 78205',
      contacts: 'Amanda Smith',
      stage: 'Won',
      stageColor: 'bg-green-500',
      closeProbability: '100%',
      probabilityColor: 'bg-blue-600',
      estimatedDeal: '$15,200',
      closedDate: '2024-01-15',
      priority: 'high'
    },
    {
      id: 5,
      company: 'Sheleg Industries',
      owner: { name: 'Bob Wilson', avatar: 'BW' },
      propertyAddress: '654 Maple Dr, Fort Worth, TX 76102',
      contacts: 'Jamal Ayers',
      stage: 'Won',
      stageColor: 'bg-green-500',
      closeProbability: '100%',
      probabilityColor: 'bg-blue-600',
      estimatedDeal: '$24,000',
      closedDate: '2024-01-10',
      priority: 'high'
    },
    {
      id: 6,
      company: 'Zift Records',
      owner: { name: 'Carol Brown', avatar: 'CB' },
      propertyAddress: '987 Cedar Ln, Arlington, TX 76010',
      contacts: 'Elian Warren',
      stage: 'Won',
      stageColor: 'bg-green-500',
      closeProbability: '100%',
      probabilityColor: 'bg-blue-600',
      estimatedDeal: '$4,000',
      closedDate: '2024-01-08',
      priority: 'medium'
    },
    {
      id: 7,
      company: 'Waissman Gallery',
      owner: { name: 'Team', avatar: 'T', isTeam: true },
      propertyAddress: '147 Birch Way, Plano, TX 75023',
      contacts: 'Sam Spillberg',
      stage: 'Won',
      stageColor: 'bg-green-500',
      closeProbability: '100%',
      probabilityColor: 'bg-blue-600',
      estimatedDeal: '$18,100',
      closedDate: '2024-01-05',
      priority: 'high'
    },
    {
      id: 8,
      company: 'SFF Cruise',
      owner: { name: 'David Lee', avatar: 'DL' },
      propertyAddress: '258 Willow St, Irving, TX 75038',
      contacts: 'Contact Name',
      stage: 'Won',
      stageColor: 'bg-green-500',
      closeProbability: '100%',
      probabilityColor: 'bg-blue-600',
      estimatedDeal: '$12,000',
      closedDate: '2024-01-03',
      priority: 'medium'
    }
  ];

  const renderAvatar = (owner: { name: string; avatar: string; isTeam?: boolean }) => {
    if (owner.isTeam) {
      return (
        <div className="flex -space-x-1">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {owner.avatar}
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            +
          </div>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
        {owner.avatar}
      </div>
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setUploadedFile(file);
      setShowUploadModal(false);
      // Here you would typically process the CSV file
    }
  };

  return (
          <div className="bg-gray-50">
        <div className="bg-white">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Deals</h1>
              <p className="text-gray-600">Manage your sales pipeline and track deal progress</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowUploadModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span>Upload CSV</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Link className="w-4 h-4" />
                <span>Integrate</span>
                <span className="bg-blue-100 text-blue-600 text-xs px-1.5 py-0.5 rounded">+2</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                <Clock className="w-4 h-4" />
                <span>Automate</span>
                <span className="bg-purple-100 text-purple-600 text-xs px-1.5 py-0.5 rounded">2</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Total Deals</p>
                  <p className="text-xl font-bold text-blue-800">247</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">Won Deals</p>
                  <p className="text-xl font-bold text-green-800">89</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium">Pipeline Value</p>
                  <p className="text-xl font-bold text-purple-800">$2.4M</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-600 font-medium">Avg Deal Size</p>
                  <p className="text-xl font-bold text-orange-800">$12.5K</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('main-table')}
                className={`flex items-center space-x-2 pb-3 px-1 ${activeTab === 'main-table' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Table className="w-4 h-4" />
                <span className="font-medium">Main table</span>
              </button>
              <button
                onClick={() => setActiveTab('kanban')}
                className={`flex items-center space-x-2 pb-3 px-1 ${activeTab === 'kanban' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Kanban className="w-4 h-4" />
                <span className="font-medium">Kanban</span>
              </button>
              <button
                onClick={() => setActiveTab('forecast')}
                className={`flex items-center space-x-2 pb-3 px-1 ${activeTab === 'forecast' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <BarChart3 className="w-4 h-4" />
                <span className="font-medium">Forecast</span>
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 ml-2">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search deals..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Deals Table */}
        <div className="px-8 py-6">
          <div className="space-y-8">
            {/* Active Deals Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-green-600">Active deals</h2>
                <span className="text-sm text-gray-500">{activeDeals.length} deals</span>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="grid grid-cols-8 gap-4 text-sm font-semibold text-gray-700">
                    <div>Owner</div>
                    <div>Property Address</div>
                    <div>Contacts</div>
                    <div>Stage</div>
                    <div>Close Probability</div>
                    <div className="flex items-center justify-between">
                      <span>Est. deal</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div>Priority</div>
                    <div>Last Activity</div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {activeDeals.map((deal) => (
                    <div key={deal.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="grid grid-cols-8 gap-4 items-center">
                        <div className="flex items-center">
                          {renderAvatar(deal.owner)}
                        </div>
                        <div className="text-sm text-gray-900 font-medium">{deal.propertyAddress}</div>
                        <div className="text-sm text-gray-900 font-medium">{deal.contacts}</div>
                        <div>
                          <span className={`inline-block px-3 py-1.5 rounded-md text-xs font-semibold text-white ${deal.stageColor}`}>
                            {deal.stage}
                          </span>
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1.5 rounded-md text-xs font-semibold text-white ${deal.probabilityColor}`}>
                            {deal.closeProbability}
                          </span>
                        </div>
                        <div className="text-sm text-gray-900 font-semibold">{deal.estimatedDeal}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deal.priority)}`}>
                            {deal.priority}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{deal.lastActivity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Closed Won Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-green-600">Closed won</h2>
                <span className="text-sm text-gray-500">{closedWonDeals.length} deals</span>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="grid grid-cols-8 gap-4 text-sm font-semibold text-gray-700">
                    <div>Owner</div>
                    <div>Property Address</div>
                    <div>Contacts</div>
                    <div>Stage</div>
                    <div>Close Probability</div>
                    <div className="flex items-center justify-between">
                      <span>Est. deal</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div>Priority</div>
                    <div>Closed Date</div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {closedWonDeals.map((deal) => (
                    <div key={deal.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="grid grid-cols-8 gap-4 items-center">
                        <div className="flex items-center">
                          {renderAvatar(deal.owner)}
                        </div>
                        <div className="text-sm text-gray-900 font-medium">{deal.propertyAddress}</div>
                        <div className="text-sm text-gray-900 font-medium">{deal.contacts}</div>
                        <div>
                          <span className={`inline-block px-3 py-1.5 rounded-md text-xs font-semibold text-white ${deal.stageColor}`}>
                            {deal.stage}
                          </span>
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1.5 rounded-md text-xs font-semibold text-white ${deal.probabilityColor}`}>
                            {deal.closeProbability}
                          </span>
                        </div>
                        <div className="text-sm text-gray-900 font-semibold">{deal.estimatedDeal}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deal.priority)}`}>
                            {deal.priority}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{deal.closedDate}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSV Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Upload CSV Leads</h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Drop your CSV file here or click to browse</p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label 
                  htmlFor="csv-upload"
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Choose File
                </label>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>CSV Format:</strong> Company, Contact, Email, Phone, Stage, Estimated Value
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={!uploadedFile}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {uploadedFile && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>CSV file uploaded successfully!</span>
        </div>
      )}
    </div>
  );
}; 