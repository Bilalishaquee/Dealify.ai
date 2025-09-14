import React, { useState } from 'react';
import { Bot, Phone, MessageSquare, Mail, Settings, HelpCircle, TrendingUp, Users, Clock, Target, Send, Smartphone, Monitor, Zap, X } from 'lucide-react';

export const AIAgentPage: React.FC = () => {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      status: 'HOT',
      statusColor: 'bg-red-500',
      aiScore: '8.7',
      price: '$285,000',
      roi: '22.5%',
      arv: '$340,000',
      monthlyIncome: '$850/mo',
      location: '123 Oak Street, Austin, TX',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      repairs: '$15,000',
      dom: '5 days',
      leadScore: 92,
      bestExit: 'Fix & Flip'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      status: 'WARM',
      statusColor: 'bg-orange-500',
      aiScore: '7.2',
      price: '$195,000',
      roi: '18.3%',
      arv: '$250,000',
      monthlyIncome: '$650/mo',
      location: '456 Maple Avenue, Dallas, TX',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      repairs: '$8,000',
      dom: '10 days',
      leadScore: 78,
      bestExit: 'Rental'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      status: 'HOT',
      statusColor: 'bg-red-500',
      aiScore: '9.1',
      price: '$420,000',
      roi: '25.8%',
      arv: '$485,000',
      monthlyIncome: '$1200/mo',
      location: '789 Pine Street, Houston, TX',
      beds: 4,
      baths: 3,
      sqft: '2,400',
      repairs: '$22,000',
      dom: '12 days',
      leadScore: 95,
      bestExit: 'Fix & Flip'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      status: 'COLD',
      statusColor: 'bg-blue-500',
      aiScore: '6.8',
      price: '$165,000',
      roi: '12.1%',
      arv: '$190,000',
      monthlyIncome: '$450/mo',
      location: '321 Elm Drive, San Antonio, TX',
      beds: 2,
      baths: 1,
      sqft: '1,100',
      repairs: '$12,000',
      dom: '25 days',
      leadScore: 65,
      bestExit: 'Wholesale'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      status: 'WARM',
      statusColor: 'bg-orange-500',
      aiScore: '8.3',
      price: '$310,000',
      roi: '20.7%',
      arv: '$375,000',
      monthlyIncome: '$950/mo',
      location: '654 Cedar Lane, Fort Worth, TX',
      beds: 3,
      baths: 2,
      sqft: '1,750',
      repairs: '$18,000',
      dom: '8 days',
      leadScore: 85,
      bestExit: 'Fix & Flip'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      status: 'HOT',
      statusColor: 'bg-red-500',
      aiScore: '7.9',
      price: '$545,000',
      roi: '28.3%',
      arv: '$650,000',
      monthlyIncome: '$1,500/mo',
      location: '987 Birch Boulevard, Plano, TX',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      repairs: '$35,000',
      dom: '3 days',
      leadScore: 88,
      bestExit: 'Fix & Flip'
    }
  ];

  const getLeadScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      // Here you would typically send the question to your AI service
      console.log('AI Question:', aiQuestion);
      setAiQuestion('');
    }
  };

  return (
          <div className="bg-gray-50">
        <div className="bg-white">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Agent</h1>
              <p className="text-gray-600">Comprehensive AI automation for property outreach and lead generation</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Bot className="w-4 h-4" />
                <span>New Campaign</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span>AI Settings</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">AI Calls</p>
                  <p className="text-xl font-bold text-blue-800">1,247</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">AI SMS</p>
                  <p className="text-xl font-bold text-green-800">892</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium">AI Emails</p>
                  <p className="text-xl font-bold text-purple-800">1,156</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-600 font-medium">Success Rate</p>
                  <p className="text-xl font-bold text-orange-800">78%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Automation Tools */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Automation Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">AI Calling</p>
                <p className="text-sm opacity-90">Automated phone outreach</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              <MessageSquare className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">AI SMS</p>
                <p className="text-sm opacity-90">Smart text messaging</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">AI Emailing</p>
                <p className="text-sm opacity-90">Automated email campaigns</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Settings className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">AI Settings</p>
                <p className="text-sm opacity-90">Configure automation</p>
              </div>
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Available Properties for AI Outreach</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>High AI Score Properties</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                {/* Property Image */}
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={property.image} 
                    alt={property.location}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${property.statusColor}`}>
                      {property.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-gray-800 bg-green-200">
                      AI: {property.aiScore}/10
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-4 space-y-3">
                  {/* Location */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{property.location}</h3>
                    <p className="text-sm text-gray-600">Lead Score: <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLeadScoreColor(property.leadScore)}`}>{property.leadScore}/100</span></p>
                  </div>

                  {/* Price and ROI */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">Price:</span>
                      <p className="text-lg font-bold text-gray-800">{property.price}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">ROI:</span>
                      <p className="text-lg font-bold text-green-600">{property.roi}</p>
                    </div>
                  </div>

                  {/* ARV and Monthly Income */}
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-600">ARV:</span>
                      <p className="font-semibold text-blue-600">{property.arv}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600">Monthly:</span>
                      <p className="font-semibold text-purple-600">{property.monthlyIncome}</p>
                    </div>
                  </div>

                  {/* Property Specs */}
                  <div className="flex items-center space-x-4 text-sm text-gray-700">
                    <span>{property.beds} bed</span>
                    <span>{property.baths} bath</span>
                    <span>{property.sqft} sq ft</span>
                  </div>

                                     {/* Repairs */}
                   <div className="flex items-center justify-between text-sm">
                     <span className="text-gray-600">
                       Repairs: <span className="font-semibold text-gray-800">{property.repairs}</span>
                     </span>
                   </div>

                  {/* Best Exit Strategy */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-800">Best Exit: {property.bestExit}</span>
                    </div>
                  </div>

                  {/* AI Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex items-center justify-center space-x-1 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors">
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 py-2 px-3 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-colors">
                      <MessageSquare className="w-3 h-3" />
                      <span>SMS</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 py-2 px-3 bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium rounded-lg transition-colors">
                      <Mail className="w-3 h-3" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Multi-Channel Outreach</h3>
              </div>
              <p className="text-blue-700 text-sm">Reach prospects through calls, SMS, and email with intelligent automation and personalization.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-800">Performance Analytics</h3>
              </div>
              <p className="text-green-700 text-sm">Track success rates, response times, and conversion metrics across all AI channels.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-800">Smart Automation</h3>
              </div>
              <p className="text-purple-700 text-sm">Configure intelligent workflows that adapt based on prospect responses and engagement.</p>
            </div>
          </div>
        </div>
      </div>

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
                  <p className="text-sm opacity-90">Ask questions about your properties and AI automation</p>
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
                    placeholder="Ask about property analysis, AI automation strategies, or any other questions..."
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
                      <strong>AI Assistant:</strong> I can help you analyze properties, optimize AI automation campaigns, and provide insights on lead generation strategies. What would you like to know?
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