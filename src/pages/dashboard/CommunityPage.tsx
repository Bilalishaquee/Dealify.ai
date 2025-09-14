import React, { useState } from 'react';
import { 
  MessageSquare, 
  Hash, 
  Bell, 
  Pin, 
  Users, 
  Search, 
  Inbox, 
  HelpCircle, 
  Plus, 
  Settings, 
  Mic, 
  Headphones, 
  Calendar, 
  Shield, 
  Megaphone, 
  FileText, 
  Paperclip, 
  CheckCircle,
  ChevronDown,
  Gamepad2,
  MapPin,
  Download,
  Gift,
  Smile,
  Image as ImageIcon,
  ExternalLink,
  Star,
  TrendingUp,
  Zap,
  Target,
  DollarSign,
  Award,
  Heart
} from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users, color: 'text-blue-500' },
    { label: 'Daily Messages', value: '1,234', icon: MessageSquare, color: 'text-green-500' },
    { label: 'Deals Shared', value: '892', icon: DollarSign, color: 'text-purple-500' },
    { label: 'Success Stories', value: '156', icon: Award, color: 'text-orange-500' }
  ];

  const communityFeatures = [
    {
      title: 'Real Estate Networking',
      description: 'Connect with fellow investors, agents, and industry professionals',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Deal Sharing',
      description: 'Share and discover investment opportunities in real-time',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Expert Insights',
      description: 'Get advice from experienced real estate professionals',
      icon: Star,
      color: 'bg-purple-500'
    },
    {
      title: 'Market Updates',
      description: 'Stay informed with the latest market trends and news',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    {
      user: 'Sarah Johnson',
      action: 'shared a new deal',
      property: '3BR Single Family in Austin, TX',
      time: '2 minutes ago',
      avatar: 'SJ'
    },
    {
      user: 'Mike Chen',
      action: 'closed a deal',
      property: 'Fix & Flip in Phoenix, AZ',
      time: '15 minutes ago',
      avatar: 'MC'
    },
    {
      user: 'Lisa Rodriguez',
      action: 'asked for advice',
      property: 'Wholesaling in Miami, FL',
      time: '1 hour ago',
      avatar: 'LR'
    }
  ];

  return (
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative px-6 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              {/* Discord-style Logo */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Gamepad2 className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Deals & Dividends
              <span className="block text-3xl text-blue-400 mt-2">Discord Community</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of real estate investors, wholesalers, and professionals in our exclusive Discord community. 
              Share deals, get advice, and grow your network.
            </p>

            {/* Main Invite Button */}
            <button 
              onClick={() => setIsInviteModalOpen(true)}
              className="group relative inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <span>Join Our Discord Community</span>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-400 mt-4">
              Free to join • 2,847+ members • Active 24/7
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700/50">
                <div className={`w-12 h-12 ${stat.color} bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Join Our Community?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Community Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{activity.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white">
                      <span className="font-semibold">{activity.user}</span>
                      <span className="text-gray-400"> {activity.action}</span>
                    </div>
                    <div className="text-blue-400 text-sm">{activity.property}</div>
                  </div>
                  <div className="text-gray-500 text-sm">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-gray-300 mb-8">
            Don't miss out on exclusive deals, expert advice, and networking opportunities. 
            Join our Discord community today!
          </p>
          <button 
            onClick={() => setIsInviteModalOpen(true)}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5" />
            <span>Join Discord Community</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Invite Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full border border-gray-700">
            <div className="text-center">
              {/* Discord Logo in Modal */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Discord Server</h3>
              <p className="text-gray-400 mb-6">
                Click the button below to join our exclusive real estate investor community on Discord.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://discord.gg/dealsdividends', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Gamepad2 className="w-5 h-5" />
                    <span>Join Discord Server</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </button>
                
                <button 
                  onClick={() => setIsInviteModalOpen(false)}
                  className="w-full bg-gray-700 text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>• Free to join</p>
                <p>• No spam, just value</p>
                <p>• 2,847+ active members</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 