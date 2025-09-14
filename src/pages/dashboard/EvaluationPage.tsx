import React, { useState } from 'react';
import { Heart, Eye, MapPin, Bed, Bath, Square, Zap, TrendingUp, BarChart3, Calculator, Target, Upload, Star, DollarSign, Home, Building, Users } from 'lucide-react';

export const EvaluationPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

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
      comps: [
        { address: '125 Oak Street', price: '$290,000', soldDate: '2 weeks ago' },
        { address: '121 Oak Street', price: '$275,000', soldDate: '1 month ago' },
        { address: '127 Oak Street', price: '$310,000', soldDate: '3 weeks ago' }
      ],
      rehabMatrix: {
        cosmetic: '$8,000',
        structural: '$5,000',
        systems: '$2,000'
      },
      exitStrategies: ['Fix & Flip', 'Rental', 'Wholesale'],
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
      comps: [
        { address: '458 Maple Avenue', price: '$200,000', soldDate: '1 week ago' },
        { address: '454 Maple Avenue', price: '$185,000', soldDate: '2 weeks ago' },
        { address: '460 Maple Avenue', price: '$210,000', soldDate: '3 weeks ago' }
      ],
      rehabMatrix: {
        cosmetic: '$4,000',
        structural: '$2,500',
        systems: '$1,500'
      },
      exitStrategies: ['Rental', 'Fix & Flip', 'Wholesale'],
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
      comps: [
        { address: '791 Pine Street', price: '$430,000', soldDate: '1 week ago' },
        { address: '787 Pine Street', price: '$410,000', soldDate: '2 weeks ago' },
        { address: '793 Pine Street', price: '$450,000', soldDate: '3 weeks ago' }
      ],
      rehabMatrix: {
        cosmetic: '$12,000',
        structural: '$7,000',
        systems: '$3,000'
      },
      exitStrategies: ['Fix & Flip', 'Rental', 'Wholesale'],
      bestExit: 'Fix & Flip'
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

  const getLeadScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
          <div className="bg-gray-50">
        <div className="bg-white">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Property Evaluation</h1>
              <p className="text-gray-600">AI-powered property analysis and insights</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Upload className="w-4 h-4" />
              <span>Upload to CRM</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-blue-600 font-medium">Total Properties</p>
                  <p className="text-xl font-bold text-blue-800">1,247</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-green-600 font-medium">High Score Leads</p>
                  <p className="text-xl font-bold text-green-800">89</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calculator className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="text-sm text-purple-600 font-medium">Avg ROI</p>
                  <p className="text-xl font-bold text-purple-800">22.3%</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="text-sm text-orange-600 font-medium">Total Value</p>
                  <p className="text-xl font-bold text-orange-800">$2.4M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                {/* Image Section */}
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={property.image} 
                    alt={`Property ${property.id}`}
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

                  {/* Action Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                  {/* Price and ROI */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                    <span className="text-lg font-semibold text-green-600">{property.roi} ROI</span>
                  </div>

                  {/* Lead Scoring */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Lead Score:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLeadScoreColor(property.leadScore)}`}>
                      {property.leadScore}/100
                    </span>
                  </div>

                  {/* ARV and Monthly Income */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>ARV: {property.arv}</span>
                    <span>{property.monthlyIncome}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{property.location}</span>
                  </div>

                  {/* Property Specs */}
                  <div className="flex items-center space-x-6 text-sm text-gray-700">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4 text-gray-500" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>

                  {/* Repairs and DOM */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Repairs: <span className="font-semibold text-gray-800">{property.repairs}</span>
                    </span>
                    <span className="text-gray-600">
                      DOM: <span className="font-semibold text-gray-800">{property.dom}</span>
                    </span>
                  </div>

                  {/* Best Exit Strategy */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-800">Best Exit: {property.bestExit}</span>
                    </div>
                  </div>

                  {/* AI Insights Button */}
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105">
                    <Zap className="w-4 h-4" />
                    <span>AI Insights</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Analysis Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Comps Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Comparable Sales</h3>
              </div>
              <div className="space-y-3">
                {properties[0].comps.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{comp.address}</p>
                      <p className="text-sm text-gray-600">{comp.soldDate}</p>
                    </div>
                    <span className="font-semibold text-green-600">{comp.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rehab Matrix */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800">Rehab Matrix</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-800">Cosmetic</span>
                  <span className="font-semibold text-purple-600">{properties[0].rehabMatrix.cosmetic}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-800">Structural</span>
                  <span className="font-semibold text-purple-600">{properties[0].rehabMatrix.structural}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-800">Systems</span>
                  <span className="font-semibold text-purple-600">{properties[0].rehabMatrix.systems}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exit Strategies Section */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Exit Strategies Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties[0].exitStrategies.map((strategy, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${strategy === properties[0].bestExit ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {strategy === properties[0].bestExit && <Star className="w-4 h-4 text-green-600" />}
                    <span className={`font-semibold ${strategy === properties[0].bestExit ? 'text-green-800' : 'text-gray-700'}`}>
                      {strategy}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {strategy === 'Fix & Flip' && 'Quick turnaround with high ROI potential'}
                    {strategy === 'Rental' && 'Long-term income generation strategy'}
                    {strategy === 'Wholesale' && 'Fast exit with minimal risk'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ARV Analysis */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-2 mb-6">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">ARV Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Current Value</p>
                <p className="text-xl font-bold text-blue-800">{properties[0].price}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600 font-medium">After Repair Value</p>
                <p className="text-xl font-bold text-green-800">{properties[0].arv}</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Repair Costs</p>
                <p className="text-xl font-bold text-purple-800">{properties[0].repairs}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-600 font-medium">Potential Profit</p>
                <p className="text-xl font-bold text-orange-800">$40,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 