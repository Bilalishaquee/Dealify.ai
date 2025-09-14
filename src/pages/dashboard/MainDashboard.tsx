import React from 'react';
import { Settings, Database, Target, Users, Bot, FileText, ShoppingCart, MessageSquare, BarChart3, Home, TrendingUp, DollarSign, Building, Zap, Globe } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import dealifyLogo from '../../assets/dealify.png';

interface MainDashboardProps {
  onNavigateToSection?: (section: string) => void;
}

export const MainDashboard: React.FC<MainDashboardProps> = ({ onNavigateToSection }) => {
  const menuItems = [
    { id: 'data', label: 'Data', icon: Database },
    { id: 'evaluation', label: 'Evaluation', icon: Target },
    { id: 'crm', label: 'CRM', icon: Users },
    { id: 'ai-agent', label: 'A.I. Agent', icon: Bot },
    { id: 'offer', label: 'Offer', icon: FileText },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'community', label: 'Community', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const handleMenuClick = (itemId: string) => {
    console.log(`Clicked on ${itemId}`);
    if (onNavigateToSection) {
      onNavigateToSection(itemId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Real Estate Elements */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <Building className="w-12 h-12 text-cyan-400 opacity-60 drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 animate-float-medium">
          <Home className="w-8 h-8 text-blue-400 opacity-70 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-fast">
          <Building className="w-10 h-10 text-indigo-400 opacity-50 drop-shadow-lg" />
        </div>
        
        {/* Floating Data & Analytics */}
        <div className="absolute top-1/3 left-1/3 animate-float-slow">
          <BarChart3 className="w-9 h-9 text-purple-400 opacity-65 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-medium">
          <TrendingUp className="w-7 h-7 text-green-400 opacity-60 drop-shadow-lg" />
        </div>
        
        {/* Floating Financial Elements */}
        <div className="absolute top-1/2 right-10 animate-float-fast">
          <DollarSign className="w-8 h-8 text-emerald-400 opacity-70 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 left-10 animate-float-slow">
          <DollarSign className="w-10 h-10 text-teal-400 opacity-55 drop-shadow-lg" />
        </div>
        
        {/* Floating Technology Elements */}
        <div className="absolute top-1/4 right-1/4 animate-float-medium">
          <Database className="w-8 h-8 text-violet-400 opacity-65 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float-slow">
          <Target className="w-7 h-7 text-orange-400 opacity-60 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float-fast">
          <Zap className="w-6 h-6 text-yellow-400 opacity-70 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-medium">
          <Globe className="w-8 h-8 text-cyan-300 opacity-55 drop-shadow-lg" />
        </div>
        
        {/* Animated Orbs */}
        <div className="absolute top-10 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-30 animate-pulse blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full opacity-25 animate-pulse delay-1000 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full opacity-30 animate-pulse delay-500 blur-xl"></div>
        
        {/* Moving Light Beams */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
        
        {/* Circuit-like Lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-indigo-400/40 to-transparent animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header with Logo on Left, Settings on Right, Welcome in Center */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-12 space-y-4 lg:space-y-0">
          {/* Logo and Text - Top Left */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                Dealify.ai
              </h1>
            </div>
          </div>
          
          {/* Welcome Message - Center */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-medium text-center lg:text-left">Welcome to your dashboard</p>
          </div>
          
          {/* Settings Button - Top Right */}
          <Button 
            variant="outline" 
            className="flex items-center justify-center space-x-2 bg-slate-800/50 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-700/50 self-start lg:self-auto"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
            <span className="sm:hidden">⚙️</span>
          </Button>
        </div>

        {/* Octagonal Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 max-w-7xl mx-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="group relative w-full h-48 sm:h-56 lg:h-64 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 rounded-2xl sm:rounded-none"
                style={{
                  clipPath: window.innerWidth >= 640 ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : 'none'
                }}
              >
                {/* Glowing Border Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-none"
                  style={{
                    clipPath: window.innerWidth >= 640 ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : 'none'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
                    {item.label}
                  </span>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-none blur-xl"></div>
              </button>
            );
          })}
        </div>

        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}; 