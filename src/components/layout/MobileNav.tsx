import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  Users, 
  Building, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  LogOut,
  Bot,
  FileText,
  Target,
  Database,
  ShoppingCart,
  Menu,
  X
} from 'lucide-react';
import dealifyLogo from '../../assets/dealify.png';

interface MobileNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onBackToMain?: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentPage, onPageChange, onBackToMain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const menuItems = user?.role === 'admin' ? [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'properties', label: 'All Properties', icon: Building },
    { id: 'deals', label: 'All Deals', icon: FileText },
    { id: 'automations', label: 'Automations', icon: Bot },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'ai-calling', label: 'AI Calling', icon: MessageSquare }
  ] : (() => {
    const baseItems = [
      { id: 'data', label: 'DATA', icon: Database },
      { id: 'evaluation', label: 'EVALUATION', icon: Target },
      { id: 'crm', label: 'CRM', icon: Users },
      { id: 'ai-agent', label: 'AI AGENT', icon: Bot },
      { id: 'offers', label: 'OFFERS', icon: FileText },
      { id: 'marketplace', label: 'MARKETPLACE', icon: ShoppingCart },
      { id: 'community', label: 'COMMUNITY', icon: MessageSquare },
      { id: 'analysis', label: 'ANALYSIS', icon: BarChart3 }
    ];
    return baseItems;
  })();

  const handleMenuClick = (itemId: string) => {
    onPageChange(itemId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div 
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl"
            style={{
              background: 'linear-gradient(to bottom, #243043 0%, #6ee7b7 100%)'
            }}
          >
            {/* Logo */}
            <div className="p-6 border-b border-white/10 bg-black/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-400/25 overflow-hidden">
                  <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Dealify.ai</h1>
                  <p className="text-xs text-white/70 capitalize">
                    {user?.role === 'admin' ? 'Admin' : 
                     user?.userType === 'buyer' ? 'Buyer' :
                     user?.userType === 'seller' ? 'Seller' : 'User'} Portal
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="p-4 border-b border-white/10 bg-black/5 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/25">
                  <span className="text-white font-semibold text-sm">
                    {user?.firstName[0]}{user?.lastName[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-white/70 truncate">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {onBackToMain && (
                <button
                  onClick={() => {
                    onBackToMain();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 mb-4 border border-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/5 group"
                >
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Back to Main</span>
                </button>
              )}
              
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group relative ${
                      isActive
                        ? 'bg-white/25 text-white border border-white/40 shadow-lg shadow-white/15 backdrop-blur-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/25 hover:shadow-md hover:shadow-white/5'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-lg"></div>
                    )}
                    
                    <Icon className={`w-5 h-5 transition-all duration-200 ${
                      isActive 
                        ? 'text-white scale-110' 
                        : 'group-hover:scale-110 group-hover:text-white'
                    }`} />
                    <span className="font-medium transition-all duration-200">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-white/10 space-y-2 bg-black/5 backdrop-blur-sm">
              <button
                onClick={() => {
                  onPageChange('settings');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                  currentPage === 'settings'
                    ? 'bg-white/25 text-white border border-white/40 shadow-lg shadow-white/15 backdrop-blur-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/25 hover:shadow-md hover:shadow-white/5'
                }`}
              >
                <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Settings</span>
              </button>
              
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-white/80 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 border border-transparent hover:border-red-500/30 hover:shadow-md hover:shadow-red-500/10 group"
              >
                <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
