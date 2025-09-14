import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Building } from 'lucide-react';
import backgroundImage from '../assets/2.png';
import dealifyLogo from '../assets/dealify.png';

interface SignupProps {
  onLoginClick: () => void;
}

export const Signup: React.FC<SignupProps> = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'both' as 'buyer' | 'seller' | 'both'
  });
  const [error, setError] = useState('');
  const { signup, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const success = await signup(
      formData.email,
      formData.password,
      formData.firstName,
      formData.lastName,
      formData.userType
    );

    if (!success) {
      setError('Failed to create account');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Join Dealify.ai and start closing more deals</p>
        </div>

        {/* Signup Form */}
        <div className="rounded-2xl p-6 sm:p-8 shadow-xl" style={{ backgroundColor: '#214887', border: '1px solid #214887' }}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                User Type <span className="text-red-300">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { value: 'buyer', label: 'Buyer/Investor' },
                  { value: 'seller', label: 'Seller/Agent' },
                  { value: 'both', label: 'Both' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInputChange('userType', option.value)}
                    className={`p-2 sm:p-3 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 ${
                      formData.userType === option.value
                        ? 'border-cyan-400 bg-cyan-500/30 text-cyan-200'
                        : 'border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-white text-sm sm:text-base">
              Already have an account?{' '}
              <button
                onClick={onLoginClick}
                className="text-cyan-300 hover:text-cyan-200 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};