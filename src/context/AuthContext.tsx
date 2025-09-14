import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('dealflow_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in production, this would call your API
    if (email && password) {
      let mockUser: User;
      
      if (email === 'admin@dealify.ai') {
        mockUser = {
          id: '1',
          email,
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin',
          createdAt: new Date().toISOString()
        };
      } else {
        // For all other users, they are regular users
        const userType = email.includes('seller') ? 'seller' : 
                        email.includes('buyer') ? 'buyer' : 
                        email === 'user@dealify.ai' ? 'both' : 'both';
        
        mockUser = {
          id: '2',
          email,
          firstName: 'John',
          lastName: 'Doe',
          role: 'user',
          userType,
          createdAt: new Date().toISOString()
        };
      }
      
      setUser(mockUser);
      localStorage.setItem('dealflow_user', JSON.stringify(mockUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    userType: 'buyer' | 'seller' | 'both'
  ): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      role: 'user',
      userType,
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem('dealflow_user', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dealflow_user');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};