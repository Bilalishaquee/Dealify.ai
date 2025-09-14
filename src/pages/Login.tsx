import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Apple, Shield } from 'lucide-react';
import backgroundImage from '../assets/2.png';
import dealifyLogo from '../assets/dealify.png';

interface LoginProps {
  onSignupClick: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  const demoAccounts = [
    { email: 'admin@dealify.ai', password: 'admin123', role: 'Admin', description: 'Full platform access' },
    { email: 'user@dealify.ai', password: 'user123', role: 'User', description: 'Buyer/Seller access' }
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80"></div>
      
      <div className="max-w-xl w-full relative z-10">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 overflow-hidden">
            <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Sign in to access your Dealify.ai dashboard</p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl p-6 sm:p-8 shadow-xl" style={{ backgroundColor: '#214887', border: '1px solid #214887' }}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={error}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-4 sm:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/30"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2" style={{ backgroundColor: '#214887', color: 'rgba(255, 255, 255, 0.8)' }}>Or continue with</span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-2 sm:space-y-3">
            {/* Google Sign In */}
            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm"></div>
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">Sign in with Google</span>
            </button>

            {/* Microsoft Sign In */}
            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600 shadow-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 w-3 h-3 sm:w-4 sm:h-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500"></div>
                </div>
              </div>
              <span className="text-white font-medium text-sm sm:text-base">Sign in with Microsoft</span>
            </button>

            {/* Apple Sign In */}
            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <Apple className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">Sign in with Apple</span>
            </button>

            {/* SSO Login */}
            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-200 border border-slate-600 hover:border-slate-500 shadow-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base">Log in with SSO</span>
            </button>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-white text-sm sm:text-base">
              Don't have an account?{' '}
              <button
                onClick={onSignupClick}
                className="text-cyan-300 hover:text-cyan-200 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>

        {/* Demo Accounts */}
        <div className="mt-6 sm:mt-8 bg-blue-600/80 backdrop-blur-sm border border-blue-400 rounded-xl p-4 sm:p-6 shadow-lg shadow-blue-500/20">
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">Demo Accounts</h3>
          <div className="space-y-2 sm:space-y-3">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => {
                  setEmail(account.email);
                  setPassword(account.password);
                }}
                className="w-full text-left p-2 sm:p-3 bg-blue-700/50 hover:bg-blue-700 rounded-lg transition-colors duration-200 border border-blue-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm sm:text-base">{account.role}</p>
                    <p className="text-blue-200 text-xs sm:text-sm truncate">{account.email}</p>
                    <p className="text-blue-300 text-xs truncate">{account.description}</p>
                  </div>
                  <div className="text-cyan-300 text-xs sm:text-sm flex-shrink-0 ml-2">Click to use</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};