import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Eye, 
  Share2, 
  Plus, 
  Minus, 
  CheckCircle, 
  AlertCircle, 
  Bot, 
  HelpCircle, 
  X, 
  Send, 
  Zap, 
  Monitor, 
  Database, 
  Clock,
  Target,
  ChevronDown,
  Wallet,
  User
} from 'lucide-react';
import mapImage from '../../assets/1.png';
import { Button } from '../../components/ui/Button';

export const DataPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: 'all',
    priceRange: 'all',
    beds: 'all',
    baths: 'all'
  });
  const [selectedDataForEvaluation, setSelectedDataForEvaluation] = useState<string[]>([]);
  const [showSkipTracingModal, setShowSkipTracingModal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [walletBalance, setWalletBalance] = useState(16.00);
  const [selectedAmount, setSelectedAmount] = useState(20);

  const properties = [
    {
      id: 'prop-1',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      address: '123 Main St, Houston, TX 77002',
      price: '$285,000',
      arv: '$420,000',
      beds: 4,
      baths: 2,
      sqft: '2,238',
      propertyType: 'Single Family',
      status: 'Skip Traced',
      daysOnMarket: 5,
      aiScore: 8.7
    },
    {
      id: 'prop-2',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      address: '456 Oak Ave, Dallas, TX 75201',
      price: '$195,000',
      arv: '$280,000',
      beds: 2,
      baths: 2,
      sqft: '850',
      propertyType: 'Condo',
      status: 'Pending Skip Trace',
      daysOnMarket: 3,
      aiScore: 7.2
    },
    {
      id: 'prop-3',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      address: '789 Pine Rd, Austin, TX 73301',
      price: '$165,000',
      arv: '$240,000',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      propertyType: 'Townhouse',
      status: 'Skip Traced',
      daysOnMarket: 2,
      aiScore: 9.1
    },
    {
      id: 'prop-4',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      address: '321 Elm St, San Antonio, TX 78205',
      price: '$220,000',
      arv: '$320,000',
      beds: 3,
      baths: 1,
      sqft: '1,200',
      propertyType: 'Single Family',
      status: 'Needs Skip Trace',
      daysOnMarket: 7,
      aiScore: 6.8
    },
    {
      id: 'prop-5',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      address: '654 Maple Dr, Fort Worth, TX 76102',
      price: '$310,000',
      arv: '$450,000',
      beds: 4,
      baths: 3,
      sqft: '2,500',
      propertyType: 'Single Family',
      status: 'Skip Traced',
      daysOnMarket: 1,
      aiScore: 8.3
    },
    {
      id: 'prop-6',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      address: '987 Cedar Ln, Arlington, TX 76010',
      price: '$545,000',
      arv: '$720,000',
      beds: 5,
      baths: 4,
      sqft: '3,200',
      propertyType: 'Single Family',
      status: 'Pending Skip Trace',
      daysOnMarket: 4,
      aiScore: 7.9
    }
  ];

  const skipTracingStats = [
    { label: 'Total Properties', value: '1,247', icon: Database },
    { label: 'Skip Traced', value: '892', icon: CheckCircle },
    { label: 'Pending', value: '234', icon: Clock },
    { label: 'Needs Skip Trace', value: '121', icon: AlertCircle }
  ];

  const handleDataSelection = (propertyId: string) => {
    setSelectedDataForEvaluation(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const handleEnterEvaluation = () => {
    const selectedData = properties.filter(prop => selectedDataForEvaluation.includes(prop.id));
    const needsSkipTrace = selectedData.some(prop => prop.status === 'Needs Skip Trace' || prop.status === 'Pending Skip Trace');
    
    if (needsSkipTrace) {
      setShowSkipTracingModal(true);
    } else {
      // Proceed to evaluation
      console.log('Proceeding to evaluation with:', selectedData);
    }
  };

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle AI question submission
    console.log('AI Question:', aiQuestion);
    setAiQuestion('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Skip Traced':
        return 'bg-green-100 text-green-700';
      case 'Pending Skip Trace':
        return 'bg-yellow-100 text-yellow-700';
      case 'Needs Skip Trace':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Skip Traced':
        return <CheckCircle className="w-3 h-3" />;
      case 'Pending Skip Trace':
        return <Clock className="w-3 h-3" />;
      case 'Needs Skip Trace':
        return <AlertCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
          <div className="bg-white">
      {/* Top Search Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties by address, city, or zip code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedFilters.propertyType}
            onChange={(e) => setSelectedFilters(prev => ({ ...prev, propertyType: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="single-family">Single Family</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
          <select
            value={selectedFilters.priceRange}
            onChange={(e) => setSelectedFilters(prev => ({ ...prev, priceRange: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="0-200k">$0 - $200k</option>
            <option value="200k-400k">$200k - $400k</option>
            <option value="400k+">$400k+</option>
          </select>
          
          {/* Wallet Balance Display */}
          <div 
            className="flex items-center space-x-3 bg-gray-900 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors"
            onClick={() => setShowWalletModal(true)}
          >
            <div className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">${walletBalance.toFixed(2)}</span>
            </div>
          </div>
          
          {/* User Profile Icon */}
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
            <User className="w-5 h-5 text-white" />
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Skip Tracing Stats */}
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-4">
          {skipTracingStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Selection Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Select Data to Enter Evaluation</h2>
          <Button 
            onClick={handleEnterEvaluation}
            disabled={selectedDataForEvaluation.length === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              selectedDataForEvaluation.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Enter Evaluation ({selectedDataForEvaluation.length})</span>
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-screen">
        {/* Map Area */}
        <div className="flex-1 relative bg-gray-100">
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 relative">
            {/* USA Map Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={mapImage} 
                alt="USA Map" 
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '90%' }}
              />
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-20">
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Minus className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              </button>
            </div>

            {/* Search as Map Moves Checkbox */}
            <div className="absolute bottom-4 left-4 z-20">
              <label className="flex items-center space-x-2 text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>Search as Map Moves</span>
              </label>
            </div>
          </div>
        </div>

        {/* Property Results Sidebar */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
          {/* Results Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Property Results</h3>
              <span className="text-sm text-gray-600">{properties.length} properties found</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-600 hover:text-gray-800">Sort by: AI Score</button>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Property Listings */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {properties.map((property) => (
                <div 
                  key={property.id}
                  className={`bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                    selectedDataForEvaluation.includes(property.id)
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleDataSelection(property.id)}
                >
                  {/* Property Image */}
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src={property.image} 
                      alt={property.address}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Selection Checkbox */}
                    <div className="absolute top-3 left-3">
                      <input 
                        type="checkbox"
                        checked={selectedDataForEvaluation.includes(property.id)}
                        onChange={() => handleDataSelection(property.id)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                        {getStatusIcon(property.status)}
                        <span>{property.status}</span>
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold text-gray-800">
                        AI Score: {property.aiScore}/10
                      </div>
                    </div>

                    {/* Save Button */}
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Property Details */}
                  <div className="p-4">
                    {/* Price */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xl font-bold text-gray-800">{property.price}</span>
                        <span className="text-sm text-gray-600 ml-2">(ARV - {property.arv})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Eye className="w-3 h-3 text-gray-600" />
                        </button>
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Share2 className="w-3 h-3 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-1 mb-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{property.address}</span>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="w-4 h-4" />
                        <span>{property.sqft} sq.ft</span>
                      </div>
                    </div>

                    {/* Days on Market */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{property.daysOnMarket} days on market</span>
                      <span className="text-xs text-gray-500">{property.propertyType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Showing 1-6 of 1,247 properties</span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">Previous</button>
                <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</span>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">2</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">3</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip Tracing Modal */}
      {showSkipTracingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Skip Tracing Required</h3>
                <p className="text-sm text-gray-600">Cannot enter evaluation until skip traced</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Some selected properties require skip tracing before they can be evaluated. Please complete skip tracing for all properties first.
            </p>
            <div className="flex justify-end space-x-3">
              <Button 
                onClick={() => setShowSkipTracingModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Button>
              <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Skip Tracing
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Wallet</h2>
              <button 
                onClick={() => setShowWalletModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Wallet Balance */}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">${walletBalance.toFixed(2)}</h3>
              <p className="text-gray-600">Wallet Balance</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button className="flex-1 py-2 text-center border-b-2 border-emerald-500 text-emerald-600 font-medium">
                Add Funds
              </button>
              <button className="flex-1 py-2 text-center text-gray-500 hover:text-gray-700 font-medium">
                Transactions
              </button>
            </div>

            {/* Add Funds Content */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">How Much Would You Like To Add?</h4>
              
              {/* Amount Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min="20"
                  max="2500"
                  step="10"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$20</span>
                  <span>$2,500</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-gray-800">${selectedAmount}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">With a ${selectedAmount} Deposit:</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">You can skiptrace {Math.floor(selectedAmount * 10)} property owners.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">You'll earn {Math.floor(selectedAmount * 10)} rewards points.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Enter Custom Amount
                </button>
                <button 
                  onClick={() => {
                    setWalletBalance(prev => prev + selectedAmount);
                    setShowWalletModal(false);
                  }}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add ${selectedAmount}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showAIAssistant ? (
          <Button onClick={() => setShowAIAssistant(true)} className="flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">Open AI Assistant</span>
          </Button>
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
                  <p className="text-sm opacity-90">Ask questions about your property data</p>
                </div>
              </div>
              <Button onClick={() => setShowAIAssistant(false)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <X className="w-4 h-4" />
              </Button>
            </div>
            {/* AI Assistant Content */}
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <form onSubmit={handleAISubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ask your AI Assistant</label>
                  <textarea 
                    value={aiQuestion} 
                    onChange={(e) => setAiQuestion(e.target.value)} 
                    placeholder="Ask about property data, skip tracing, evaluation criteria, or any other questions..." 
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
                  <Button type="submit" className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-colors">
                    <Send className="w-4 h-4" />
                    <span>Ask AI</span>
                  </Button>
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
                      <strong>AI Assistant:</strong> I can help you analyze property data, understand skip tracing requirements, and provide insights on evaluation criteria. What would you like to know?
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