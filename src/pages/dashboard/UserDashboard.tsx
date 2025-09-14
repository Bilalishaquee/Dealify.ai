import React from 'react';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, Heart, DollarSign, TrendingUp, Filter, MapPin, Building, Users } from 'lucide-react';
import dealifyLogo from '../../assets/dealify.png';

export const UserDashboard: React.FC = () => {
  const savedProperties = [
    { 
      id: 1, 
      address: '123 Main St, Dallas, TX', 
      price: '$245,000', 
      arv: '$285,000', 
      roi: '16.3%',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: 2, 
      address: '456 Oak Ave, Houston, TX', 
      price: '$189,000', 
      arv: '$225,000', 
      roi: '19.1%',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const listedProperties = [
    {
      id: 1,
      address: '789 Pine St, Austin, TX',
      price: '$320,000',
      status: 'Active',
      views: 45,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      address: '321 Elm Dr, San Antonio, TX',
      price: '$275,000',
      status: 'Pending',
      views: 23,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="bg-gray-50 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
            <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your buying and selling activities</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button icon={Filter} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Filters
          </Button>
          <Button icon={Search} variant="primary" className="bg-blue-600 hover:bg-blue-700">
            Browse Properties
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Saved Properties"
          value="24"
          change="+5 this week"
          changeType="positive"
          icon={Heart}
          iconColor="bg-red-500"
        />
        <StatCard
          title="Listed Properties"
          value="8"
          change="2 active listings"
          changeType="positive"
          icon={Building}
          iconColor="bg-blue-500"
        />
        <StatCard
          title="Active Offers"
          value="3"
          change="2 pending review"
          changeType="neutral"
          icon={DollarSign}
          iconColor="bg-green-500"
        />
        <StatCard
          title="Total Views"
          value="156"
          change="+23 this week"
          changeType="positive"
          icon={Users}
          iconColor="bg-purple-500"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Saved Properties (Buyer Side) */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Saved Properties</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">View All</Button>
          </div>
          
          <div className="space-y-4">
            {savedProperties.map((property) => (
              <div key={property.id} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={property.image} 
                  alt={property.address}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-medium text-sm">{property.address}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-green-600 text-sm font-medium">{property.price}</span>
                    <span className="text-blue-600 text-sm">ARV: {property.arv}</span>
                    <span className="text-yellow-600 text-sm">ROI: {property.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Listed Properties (Seller Side) */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Listed Properties</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">View All</Button>
          </div>
          
          <div className="space-y-4">
            {listedProperties.map((property) => (
              <div key={property.id} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={property.image} 
                  alt={property.address}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-medium text-sm">{property.address}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-green-600 text-sm font-medium">{property.price}</span>
                    <span className={`text-sm px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {property.status}
                    </span>
                    <span className="text-gray-500 text-sm">{property.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 flex-col space-y-2 border-gray-300 text-gray-700 hover:bg-gray-50">
            <Building className="w-6 h-6" />
            <span>List New Property</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col space-y-2 border-gray-300 text-gray-700 hover:bg-gray-50">
            <Search className="w-6 h-6" />
            <span>Find Properties</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col space-y-2 border-gray-300 text-gray-700 hover:bg-gray-50">
            <DollarSign className="w-6 h-6" />
            <span>Make Offer</span>
          </Button>
        </div>
      </div>
    </div>
  );
}; 