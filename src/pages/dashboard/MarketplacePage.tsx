import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Maximize2, Plus, Minus, Filter, ChevronDown, MessageCircle, CheckCircle, Star, Eye, Share2, Settings, Users, Mail, Palette, Target, DollarSign, TrendingUp, Zap, ExternalLink, Download, Upload, Clock, Search, Wallet, User } from 'lucide-react';
import mapImage from '../../assets/1.png';

export const MarketplacePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: 'all',
    priceRange: 'all',
    beds: 'all',
    baths: 'all'
  });
  const [searchAsMapMoves, setSearchAsMapMoves] = useState(true);
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [showBuyerList, setShowBuyerList] = useState(false);
  const [showInvestorSelling, setShowInvestorSelling] = useState(false);
  const [showCashBuyers, setShowCashBuyers] = useState(false);

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      price: '$199,000',
      arv: '$315,000',
      location: 'Harris County, Houston, TX, 77014',
      beds: 4,
      baths: 2,
      sqft: '2,238',
      status: 'FOR SALE',
      badge: 'Just listed',
      aiScore: 8.7,
      daysOnMarket: 5,
      propertyType: 'Single Family'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      price: '$90,000',
      arv: '$150,000',
      location: 'Broward County, Sunrise, FL, 33322',
      beds: 2,
      baths: 2,
      sqft: '850',
      status: 'FOR SALE',
      badge: 'Just listed',
      aiScore: 7.2,
      daysOnMarket: 3,
      propertyType: 'Condo'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      price: '$285,000',
      arv: '$420,000',
      location: 'Maricopa County, Phoenix, AZ, 85001',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      status: 'FOR SALE',
      badge: 'Hot Deal',
      aiScore: 9.1,
      daysOnMarket: 2,
      propertyType: 'Townhouse'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      price: '$165,000',
      arv: '$240,000',
      location: 'Dallas County, Dallas, TX, 75201',
      beds: 3,
      baths: 1,
      sqft: '1,200',
      status: 'FOR SALE',
      badge: 'Just listed',
      aiScore: 6.8,
      daysOnMarket: 7,
      propertyType: 'Single Family'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      price: '$310,000',
      arv: '$450,000',
      location: 'Orange County, Orlando, FL, 32801',
      beds: 4,
      baths: 3,
      sqft: '2,500',
      status: 'FOR SALE',
      badge: 'Hot Deal',
      aiScore: 8.3,
      daysOnMarket: 1,
      propertyType: 'Single Family'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      price: '$545,000',
      arv: '$720,000',
      location: 'Los Angeles County, Los Angeles, CA, 90210',
      beds: 5,
      baths: 4,
      sqft: '3,200',
      status: 'FOR SALE',
      badge: 'Just listed',
      aiScore: 7.9,
      daysOnMarket: 4,
      propertyType: 'Single Family'
    }
  ];

  const integrations = [
    { name: 'Canva', icon: Palette, description: 'Design professional property marketing materials', status: 'Connected', color: 'bg-blue-500' },
    { name: 'MailChimp', icon: Mail, description: 'Email marketing campaigns for property listings', status: 'Available', color: 'bg-orange-500' },
    { name: 'Constant Contact', icon: Mail, description: 'Advanced email marketing automation', status: 'Available', color: 'bg-green-500' },
    { name: 'HubSpot', icon: Target, description: 'CRM and marketing automation', status: 'Available', color: 'bg-purple-500' },
    { name: 'Zapier', icon: Zap, description: 'Connect with 5000+ apps automatically', status: 'Available', color: 'bg-red-500' }
  ];

  const buyerListStats = [
    { label: 'Total Buyers', value: '2,847', change: '+12%', icon: Users },
    { label: 'Active Buyers', value: '1,234', change: '+8%', icon: CheckCircle },
    { label: 'Cash Buyers', value: '892', change: '+15%', icon: DollarSign },
    { label: 'Avg. Response Time', value: '2.3h', change: '-0.5h', icon: Clock }
  ];

  const investorFeatures = [
    { title: 'List Properties', description: 'Sell your properties to other investors on the platform', icon: Upload },
    { title: 'Set Pricing', description: 'Flexible pricing options and negotiation tools', icon: DollarSign },
    { title: 'Track Interest', description: 'Monitor buyer interest and inquiries', icon: TrendingUp },
    { title: 'Close Deals', description: 'Streamlined closing process with escrow', icon: CheckCircle }
  ];

  const cashBuyerTools = [
    { title: 'Cash Buyer Database', description: 'Access verified cash buyers in your area', icon: Users },
    { title: 'Targeted Marketing', description: 'AI-powered marketing to cash buyers', icon: Target },
    { title: 'Deal Matching', description: 'Match properties with interested cash buyers', icon: Zap },
    { title: 'Quick Close', description: 'Fast closing process for cash transactions', icon: TrendingUp }
  ];

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
          <div className="flex items-center space-x-3 bg-gray-900 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">$16.00</span>
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

      {/* Full Screen Button */}
      <div className="absolute top-4 right-4 z-20">
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Maximize2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Map Section */}
        <div className="flex-1 relative bg-gray-100">
          <div className="w-full h-full relative">
            {/* Map Image Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={mapImage} 
                alt="North America Map" 
                className="w-full h-full object-contain"
                style={{ maxWidth: '95%', maxHeight: '95%' }}
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

            {/* Map Footer */}
            <div className="absolute bottom-2 left-4 text-xs text-gray-600 z-20">
              <div>Google</div>
              <div>Map data ©2025 Google, INEGI</div>
              <div>1000 km</div>
            </div>

            {/* Search as Map Moves Checkbox */}
            <div className="absolute bottom-4 left-4 z-20">
              <label className="flex items-center space-x-2 text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={searchAsMapMoves}
                  onChange={(e) => setSearchAsMapMoves(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>Search as Map Moves</span>
              </label>
            </div>
          </div>
        </div>

        {/* Property Results Section */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Find Your Next Deal</h1>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button 
                onClick={() => setShowIntegrations(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                <Settings className="w-4 h-4" />
                <span>Integrations</span>
              </button>
              <button 
                onClick={() => setShowBuyerList(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200"
              >
                <Users className="w-4 h-4" />
                <span>Buyer List</span>
              </button>
              <button 
                onClick={() => setShowInvestorSelling(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
              >
                <DollarSign className="w-4 h-4" />
                <span>Sell to Investors</span>
              </button>
              <button 
                onClick={() => setShowCashBuyers(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                <Target className="w-4 h-4" />
                <span>Cash Buyers</span>
              </button>
            </div>

            {/* Enhanced Filter Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
              <button className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>Price Range</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>Property Type</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>Beds & Baths</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>Square Feet</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>

            {/* Results Count & Sort */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">5,339 results found</span>
              <div className="flex items-center space-x-2">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                <button className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900">
                  <span>Sort: AI Match For You</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Property Listings */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  {/* Property Image */}
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src={property.image} 
                      alt={`Property ${property.id}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {property.status}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded border border-gray-300">
                        {property.badge}
                      </span>
                    </div>

                    {/* Save Button */}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
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
                      <span className="text-sm text-gray-600">{property.location}</span>
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

                    {/* AI Score */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-800">AI Score: {property.aiScore}/10</span>
                      </div>
                      <span className="text-xs text-gray-500">{property.daysOnMarket} days on market</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Modal */}
      {showIntegrations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Integrations</h2>
              <button onClick={() => setShowIntegrations(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600">×</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center`}>
                        <integration.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{integration.name}</h3>
                        <p className="text-sm text-gray-600">{integration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        integration.status === 'Connected' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {integration.status}
                      </span>
                      <button className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>{integration.status === 'Connected' ? 'Manage' : 'Connect'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buyer List Modal */}
      {showBuyerList && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Buyer List Management</h2>
              <button onClick={() => setShowBuyerList(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600">×</span>
              </button>
            </div>
            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {buyerListStats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-700">Import Buyer List</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-700">Export Buyer List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Investor Selling Modal */}
      {showInvestorSelling && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Sell to Other Investors</h2>
              <button onClick={() => setShowInvestorSelling(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600">×</span>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {investorFeatures.map((feature, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200">
                  Start Selling to Investors
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cash Buyers Modal */}
      {showCashBuyers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Find & Market to Cash Buyers</h2>
              <button onClick={() => setShowCashBuyers(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600">×</span>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {cashBuyerTools.map((tool, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <tool.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{tool.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                  Access Cash Buyer Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}; 