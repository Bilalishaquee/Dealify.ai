import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Landing } from './pages/Landing';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import { AdminDashboard } from './pages/dashboard/AdminDashboard';
import { AdminUsersPage } from './pages/dashboard/AdminUsersPage';
import { AdminPropertiesPage } from './pages/dashboard/AdminPropertiesPage';
import { AdminDealsPage } from './pages/dashboard/AdminDealsPage';
import { AdminAutomationsPage } from './pages/dashboard/AdminAutomationsPage';
import { AdminAICallingPage } from './pages/dashboard/AdminAICallingPage';
import { AdminSettingsPage } from './pages/dashboard/AdminSettingsPage';
import { BuyerDashboard } from './pages/dashboard/BuyerDashboard';
import { SellerDashboard } from './pages/dashboard/SellerDashboard';
import { UserDashboard } from './pages/dashboard/UserDashboard';
import { MainDashboard } from './pages/dashboard/MainDashboard';
import { DataPage } from './pages/dashboard/DataPage';
import { CRMPage } from './pages/dashboard/CRMPage';
import { EvaluationPage } from './pages/dashboard/EvaluationPage';
import { AIAgentPage } from './pages/dashboard/AIAgentPage';
import { OffersPage } from './pages/dashboard/OffersPage';
import { MarketplacePage } from './pages/dashboard/MarketplacePage';
import { CommunityPage } from './pages/dashboard/CommunityPage';
import { AnalyticsPage } from './pages/dashboard/AnalyticsPage';

type Page = 'landing' | 'login' | 'signup' | 'dashboard';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [showMainDashboard, setShowMainDashboard] = useState(true);
  const [dashboardPage, setDashboardPage] = useState('overview');

  // Helper function to create dashboard layout with mobile nav
  const createDashboardLayout = (component: React.ReactNode, bgClass: string = 'bg-gray-900') => (
    <div className={`h-screen ${bgClass} flex overflow-hidden`}>
      <Sidebar 
        currentPage={dashboardPage}
        onPageChange={setDashboardPage}
        onBackToMain={() => setShowMainDashboard(true)}
      />
      <MobileNav 
        currentPage={dashboardPage}
        onPageChange={setDashboardPage}
        onBackToMain={() => setShowMainDashboard(true)}
      />
      <main className="flex-1 overflow-auto">
        {component}
      </main>
    </div>
  );

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // If user is logged in, show main dashboard first
  if (user) {
    // Show main dashboard by default
    if (showMainDashboard) {
      return (
        <MainDashboard 
          onNavigateToSection={(section) => {
            setShowMainDashboard(false);
            setDashboardPage(section);
          }}
        />
      );
    }

    // Show specific dashboards when navigating from main dashboard
    let DashboardComponent;
    
    if (user.role === 'admin') {
      DashboardComponent = AdminDashboard;
    } else {
      // For regular users, show different dashboards based on their userType
      switch (user.userType) {
        case 'seller':
          DashboardComponent = SellerDashboard;
          break;
        case 'buyer':
          DashboardComponent = BuyerDashboard;
          break;
        case 'both':
        default:
          // For users with 'both' type, we could show a combined dashboard
          // For now, defaulting to BuyerDashboard
          DashboardComponent = UserDashboard;
          break;
      }
    }

    // Handle specific page routing
    if (dashboardPage === 'data') {
      return createDashboardLayout(<DataPage />);
    }

    if (dashboardPage === 'overview') {
      return createDashboardLayout(<AdminDashboard />, 'bg-gray-50');
    }

    if (dashboardPage === 'users') {
      return createDashboardLayout(<AdminUsersPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'properties') {
      return createDashboardLayout(<AdminPropertiesPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'deals') {
      return createDashboardLayout(<AdminDealsPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'automations') {
      return createDashboardLayout(<AdminAutomationsPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'analytics') {
      return createDashboardLayout(<AnalyticsPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'ai-calling') {
      return createDashboardLayout(<AdminAICallingPage />, 'bg-gray-50');
    }

    if (dashboardPage === 'crm') {
      return createDashboardLayout(<CRMPage />);
    }

    if (dashboardPage === 'evaluation') {
      return createDashboardLayout(<EvaluationPage />);
    }

    if (dashboardPage === 'ai-agent') {
      return createDashboardLayout(<AIAgentPage />);
    }

    if (dashboardPage === 'offers') {
      return createDashboardLayout(<OffersPage />);
    }

    if (dashboardPage === 'marketplace') {
      return createDashboardLayout(<MarketplacePage />);
    }

    if (dashboardPage === 'community') {
      return createDashboardLayout(<CommunityPage />);
    }

    if (dashboardPage === 'analysis') {
      return createDashboardLayout(<AnalyticsPage />);
    }

    if (dashboardPage === 'settings') {
      return createDashboardLayout(
        user?.role === 'admin' ? <AdminSettingsPage /> : <DashboardComponent />, 
        'bg-gray-50'
      );
    }

    return createDashboardLayout(<DashboardComponent />);
  }

  // Auth flow for non-logged-in users
  if (currentPage === 'login') {
    return <Login onSignupClick={() => setCurrentPage('signup')} />;
  }

  if (currentPage === 'signup') {
    return <Signup onLoginClick={() => setCurrentPage('login')} />;
  }

  // Default to landing page
  return <Landing onGetStarted={() => setCurrentPage('login')} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;