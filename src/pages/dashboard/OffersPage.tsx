import React, { useState } from 'react';
import { MapPin, DollarSign, User, Calendar, Building, TrendingUp, Filter, Search, Plus, MoreHorizontal, CheckCircle, Clock, AlertCircle, FileText, Send, Bot, HelpCircle, X, Zap, Monitor, Settings, FileSignature, Copy, Download, Eye, Edit, Trash2 } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [showSendOffer, setShowSendOffer] = useState(false);

  const offers = [
    {
      id: 1,
      propertyAddress: '456 Maple Avenue, Dallas, TX',
      offerAmount: '$190,000',
      buyer: 'Mike Developer',
      seller: 'Tom Realtor',
      aiInsight: 'Strong offer based on comps',
      nextStep: 'Wait for seller response',
      updatedDate: '1/14/2025',
      status: 'pending',
      propertyType: 'Single Family',
      daysOnMarket: 12,
      originalPrice: '$210,000',
      offerType: 'seller'
    },
    {
      id: 2,
      propertyAddress: '789 Oak Street, Austin, TX',
      offerAmount: '$285,000',
      buyer: 'Sarah Investor',
      seller: 'Maria Garcia',
      aiInsight: 'Competitive pricing strategy',
      nextStep: 'Schedule inspection',
      updatedDate: '1/13/2025',
      status: 'accepted',
      propertyType: 'Townhouse',
      daysOnMarket: 8,
      originalPrice: '$295,000',
      offerType: 'assignment'
    },
    {
      id: 3,
      propertyAddress: '123 Pine Drive, Houston, TX',
      offerAmount: '$165,000',
      buyer: 'John Flipper',
      seller: 'Robert Johnson',
      aiInsight: 'Below market value opportunity',
      nextStep: 'Negotiate terms',
      updatedDate: '1/12/2025',
      status: 'negotiating',
      propertyType: 'Condo',
      daysOnMarket: 25,
      originalPrice: '$180,000',
      offerType: 'seller'
    },
    {
      id: 4,
      propertyAddress: '321 Elm Boulevard, San Antonio, TX',
      offerAmount: '$420,000',
      buyer: 'Lisa Buyer',
      seller: 'David Wilson',
      aiInsight: 'Market rate offer',
      nextStep: 'Review counter offer',
      updatedDate: '1/11/2025',
      status: 'countered',
      propertyType: 'Single Family',
      daysOnMarket: 15,
      originalPrice: '$425,000',
      offerType: 'assignment'
    },
    {
      id: 5,
      propertyAddress: '654 Cedar Lane, Fort Worth, TX',
      offerAmount: '$310,000',
      buyer: 'Mark Investor',
      seller: 'Jennifer Davis',
      aiInsight: 'Strong ROI potential',
      nextStep: 'Finalize financing',
      updatedDate: '1/10/2025',
      status: 'pending',
      propertyType: 'Duplex',
      daysOnMarket: 18,
      originalPrice: '$320,000',
      offerType: 'seller'
    },
    {
      id: 6,
      propertyAddress: '987 Birch Court, Plano, TX',
      offerAmount: '$545,000',
      buyer: 'Amanda Buyer',
      seller: 'Michael Brown',
      aiInsight: 'Premium location value',
      nextStep: 'Complete appraisal',
      updatedDate: '1/9/2025',
      status: 'accepted',
      propertyType: 'Single Family',
      daysOnMarket: 6,
      originalPrice: '$550,000',
      offerType: 'assignment'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Standard Purchase Offer',
      type: 'seller',
      description: 'Standard residential purchase agreement',
      lastUsed: '2 days ago',
      usageCount: 45
    },
    {
      id: 2,
      name: 'Assignment Contract',
      type: 'assignment',
      description: 'Wholesale assignment agreement',
      lastUsed: '1 week ago',
      usageCount: 23
    },
    {
      id: 3,
      name: 'Cash Offer Template',
      type: 'seller',
      description: 'Fast closing cash offer',
      lastUsed: '3 days ago',
      usageCount: 67
    },
    {
      id: 4,
      name: 'Subject To Offer',
      type: 'assignment',
      description: 'Subject to existing financing',
      lastUsed: '5 days ago',
      usageCount: 12
    }
  ];

  const eSignatureServices = [
    { name: 'DocuSign', status: 'Connected', icon: '📄' },
    { name: 'HelloSign', status: 'Available', icon: '✍️' },
    { name: 'Adobe Sign', status: 'Connected', icon: '📋' },
    { name: 'PandaDoc', status: 'Available', icon: '🐼' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      case 'negotiating': return 'text-orange-600 bg-orange-100';
      case 'countered': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'negotiating': return <AlertCircle className="w-4 h-4" />;
      case 'countered': return <TrendingUp className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getOfferTypeColor = (type: string) => {
    switch (type) {
      case 'seller': return 'text-blue-600 bg-blue-100';
      case 'assignment': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      console.log('AI Question:', aiQuestion);
      setAiQuestion('');
    }
  };

  const filteredOffers = selectedFilter === 'all' 
    ? offers 
    : offers.filter(offer => offer.status === selectedFilter);

  return (
          <div className="bg-gray-50">
        <div className="bg-white">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Offers</h1>
              <p className="text-gray-600">Manage and track your real estate offers with AI insights</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowTemplates(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Templates</span>
              </button>
              <button 
                onClick={() => setShowSendOffer(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Offer</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Offer</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Total Offers</p>
                  <p className="text-xl font-bold text-blue-800">24</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">Accepted</p>
                  <p className="text-xl font-bold text-green-800">8</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-600 font-medium">Pending</p>
                  <p className="text-xl font-bold text-orange-800">12</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium">Avg Value</p>
                  <p className="text-xl font-bold text-purple-800">$285K</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offer Type Quick Actions */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-blue-800">Create Seller Offer</h3>
                <p className="text-sm text-blue-600">Standard purchase agreement</p>
              </div>
            </button>
            <button className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-purple-800">Create Assignment Offer</h3>
                <p className="text-sm text-purple-600">Wholesale assignment contract</p>
              </div>
            </button>
          </div>
        </div>

        {/* E-Signature Integration */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">E-Signature Integration</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Manage</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eSignatureServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-2xl">{service.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{service.name}</p>
                  <p className={`text-xs ${service.status === 'Connected' ? 'text-green-600' : 'text-gray-500'}`}>
                    {service.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter:</span>
              </div>
              <div className="flex items-center space-x-2">
                {[
                  { value: 'all', label: 'All Offers', count: offers.length },
                  { value: 'pending', label: 'Pending', count: offers.filter(o => o.status === 'pending').length },
                  { value: 'accepted', label: 'Accepted', count: offers.filter(o => o.status === 'accepted').length },
                  { value: 'negotiating', label: 'Negotiating', count: offers.filter(o => o.status === 'negotiating').length },
                  { value: 'countered', label: 'Countered', count: offers.filter(o => o.status === 'countered').length }
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === filter.value
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search offers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-800">Offer</span>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">{offer.id}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOfferTypeColor(offer.offerType)}`}>
                        {offer.offerType === 'seller' ? 'Seller' : 'Assignment'}
                      </span>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(offer.status)}`}>
                        {getStatusIcon(offer.status)}
                        <span className="capitalize">{offer.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Address */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-bold text-gray-800 text-sm leading-tight">{offer.propertyAddress}</span>
                  </div>
                </div>

                {/* Offer Amount */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-green-600 text-lg">{offer.offerAmount}</span>
                    <span className="text-xs text-gray-500">({offer.propertyType})</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Original: {offer.originalPrice} • {offer.daysOnMarket} days on market
                  </div>
                </div>

                {/* Participants */}
                <div className="p-4 border-b border-gray-100">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Buyer: {offer.buyer}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Seller: {offer.seller}</span>
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="p-4 border-b border-gray-100">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-start space-x-2">
                      <Building className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">AI</span>
                        </div>
                        <span className="text-sm font-medium text-blue-800">{offer.aiInsight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="p-4 border-b border-gray-100">
                  <div>
                    <span className="font-bold text-gray-800 text-sm">Next:</span>
                    <p className="text-sm text-gray-600 mt-1">{offer.nextStep}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors">
                      <Send className="w-3 h-3" />
                      <span>Send</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs rounded-lg transition-colors">
                      <Edit className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                </div>

                {/* Update Timestamp */}
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Updated {offer.updatedDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredOffers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No offers found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or create a new offer</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Create New Offer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Templates Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Offer Templates</h2>
                <p className="text-gray-600">Choose from pre-built templates or create custom ones</p>
              </div>
              <button 
                onClick={() => setShowTemplates(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{template.name}</h3>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOfferTypeColor(template.type)}`}>
                        {template.type === 'seller' ? 'Seller' : 'Assignment'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Used {template.usageCount} times</span>
                      <span>Last used {template.lastUsed}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors">
                        <Copy className="w-3 h-3" />
                        <span>Use Template</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors">
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors">
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Offer Modal */}
      {showSendOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Send Offer</h2>
                <p className="text-gray-600">Configure and send your offer to the seller</p>
              </div>
              <button 
                onClick={() => setShowSendOffer(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Offer Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg text-left">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-blue-800">Seller Offer</span>
                    </div>
                    <p className="text-sm text-blue-600">Standard purchase agreement</p>
                  </button>
                  <button className="p-4 border-2 border-gray-300 bg-white rounded-lg text-left hover:border-purple-500 hover:bg-purple-50">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span className="font-semibold text-gray-800">Assignment Offer</span>
                    </div>
                    <p className="text-sm text-gray-600">Wholesale assignment contract</p>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Signature Service</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>DocuSign (Connected)</option>
                  <option>HelloSign (Available)</option>
                  <option>Adobe Sign (Connected)</option>
                  <option>PandaDoc (Available)</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Save Draft
                </button>
                <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showAIAssistant ? (
          <button
            onClick={() => setShowAIAssistant(true)}
            className="flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">Open AI Assistant</span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-96 max-h-[500px] overflow-hidden">
            {/* AI Assistant Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-sm opacity-90">Ask questions about your offers and negotiations</p>
                </div>
              </div>
              <button
                onClick={() => setShowAIAssistant(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* AI Assistant Content */}
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <form onSubmit={handleAISubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ask your AI Assistant
                  </label>
                  <textarea
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Ask about offer strategies, negotiation tactics, or market analysis..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Powered by AI</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Monitor className="w-4 h-4" />
                      <span>Real-time</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ask AI</span>
                  </button>
                </div>
              </form>

              {/* Sample AI Response */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      <strong>AI Assistant:</strong> I can help you optimize your offers, analyze market conditions, and provide negotiation strategies. What would you like to know about your offers?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 