import React, { useEffect, useRef } from 'react';
import { Button } from '../components/ui/Button';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3,
  Users,
  MessageSquare,
  ArrowRight,
  Star,
  Play,
  Sparkles,
  Shield,
  Rocket,
  Database,
  Cpu,
  Bot,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import dealifyLogo from '../assets/dealify.png';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced neural networks analyze market data with 99.7% accuracy',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0ms'
    },
    {
      icon: Zap,
      title: 'Real-Time Automation',
      description: 'Instant lead qualification and deal processing 24/7',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '100ms'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'AI-driven buyer-seller matching with predictive algorithms',
      gradient: 'from-green-500 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Offers',
      description: 'Generate optimized offers with AI-powered pricing',
      gradient: 'from-orange-500 to-red-500',
      delay: '300ms'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and investment opportunities',
      gradient: 'from-indigo-500 to-purple-500',
      delay: '400ms'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Comprehensive ROI analysis and performance metrics',
      gradient: 'from-teal-500 to-blue-500',
      delay: '500ms'
    }
  ];

  const stats = [
    { value: '99.7%', label: 'AI Accuracy', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { value: '3.2x', label: 'Deal Velocity', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { value: '24/7', label: 'AI Assistant', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { value: '50k+', label: 'Properties Analyzed', icon: Database, color: 'from-orange-500 to-red-500' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Investor',
      content: 'Dealify.ai revolutionized my investment strategy. The AI insights are incredibly accurate.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      company: 'Johnson Investments'
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      content: 'The automation features save me hours every day. ROI increased by 300% in 6 months.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      company: 'Chen Development'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Real Estate Agent',
      content: 'My clients love the instant market insights. I\'ve become the top agent in my region.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      company: 'Rodriguez Realty'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-90" style={{ zIndex: 1 }} />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" style={{ zIndex: 2 }} />

      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 py-4 sm:py-6 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4 animate-fade-in">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse overflow-hidden">
                <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dealify.ai
              </span>
              <p className="text-xs text-gray-400 -mt-1 hidden sm:block">Next-Gen Real Estate AI</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Success Stories</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Pricing</a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button onClick={onGetStarted} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
              <span className="hidden sm:inline">Sign In</span>
              <span className="sm:hidden">Sign In</span>
            </Button>
            <Button onClick={onGetStarted} variant="primary" size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-2xl text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 lg:py-32" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in-up">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-12 animate-bounce-gentle">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-400" />
                <span className="text-white">#1 AI-Powered Real Estate Platform 2024</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-none">
                <span className="block animate-slide-in-left">AI-Powered</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Real Estate
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl animate-slide-in-right">Revolution</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Experience the future of real estate with cutting-edge AI automation. 
                <span className="text-white font-semibold"> Close more deals, faster.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button 
                  onClick={onGetStarted} 
                  variant="primary" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-2xl group px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg font-bold"
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">Launch Your Success</span>
                  <span className="sm:hidden">Get Started</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-xl group px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">Watch Demo</span>
                  <span className="sm:hidden">Demo</span>
                </Button>
              </div>
            </div>

            {/* Right Flow Animation */}
            <div className="relative hidden lg:block">
              {/* Central AI Brain */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                <div className="w-24 h-24 bg-black/30 rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12 text-cyan-400" />
                </div>
              </div>

              {/* Flow Cards - House Pattern */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Top Center Card - Analytics */}
                <div className="absolute -top-80 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-white/10 backdrop-blur-xl border border-purple-300/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float-slow group hover:scale-110 transition-all duration-500">
                  <TrendingUp className="w-14 h-14 text-purple-400 mb-3" />
                  <span className="text-lg text-purple-300 font-medium">Analytics</span>
                </div>

                {/* Top Left Card - Security */}
                <div className="absolute top-20 -left-64 w-36 h-36 bg-white/10 backdrop-blur-xl border border-blue-300/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float group hover:scale-110 transition-all duration-500">
                  <Shield className="w-14 h-14 text-blue-400 mb-3" />
                  <span className="text-lg text-blue-300 font-medium">Security</span>
                </div>

                {/* Top Right Card - AI Assistant */}
                <div className="absolute top-20 -right-64 w-36 h-36 bg-white/10 backdrop-blur-xl border border-cyan-300/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float-delayed-slow group hover:scale-110 transition-all duration-500">
                  <Bot className="w-14 h-14 text-cyan-400 mb-3" />
                  <span className="text-lg text-cyan-300 font-medium">AI Assistant</span>
                </div>

                {/* Bottom Left Card - Insights */}
                <div className="absolute -bottom-8 -left-64 w-36 h-36 bg-white/10 backdrop-blur-xl border border-orange-300/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float-delayed group hover:scale-110 transition-all duration-500">
                  <Target className="w-14 h-14 text-orange-400 mb-3" />
                  <span className="text-lg text-orange-300 font-medium">Insights</span>
                </div>

                {/* Bottom Right Card - Real-time */}
                <div className="absolute -bottom-8 -right-64 w-36 h-36 bg-white/10 backdrop-blur-xl border border-green-300/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float-slow group hover:scale-110 transition-all duration-500">
                  <Zap className="w-14 h-14 text-green-400 mb-3" />
                  <span className="text-lg text-green-300 font-medium">Real-time</span>
                </div>
              </div>

              {/* Flow Lines - Direct Connections */}
              <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" style={{ zIndex: -1 }}>
                {/* Line to Analytics (Top Center) */}
                <path 
                  d="M 192 192 Q 192 100 192 60" 
                  stroke="url(#gradient1)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-draw-line"
                  style={{ animationDelay: '1s' }}
                />
                
                {/* Line to Security (Top Left) */}
                <path 
                  d="M 192 192 Q 120 160 80 160" 
                  stroke="url(#gradient3)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-draw-line"
                  style={{ animationDelay: '1.5s' }}
                />
                
                {/* Line to AI Assistant (Top Right) */}
                <path 
                  d="M 192 192 Q 264 160 304 160" 
                  stroke="url(#gradient4)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-draw-line"
                  style={{ animationDelay: '2s' }}
                />
                
                {/* Line to Insights (Bottom Left) */}
                <path 
                  d="M 192 192 Q 120 224 80 224" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-draw-line"
                  style={{ animationDelay: '2.5s' }}
                />
                
                {/* Line to Real-time (Bottom Right) */}
                <path 
                  d="M 192 192 Q 264 224 304 224" 
                  stroke="url(#gradient5)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-draw-line"
                  style={{ animationDelay: '3s' }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Stats Grid - Moved Below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className={`text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg text-center">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative" style={{ zIndex: 10 }}>
        {/* Light Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-xl border border-blue-200/50 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg animate-bounce-gentle">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-600 animate-pulse" />
              <span className="text-blue-800 font-semibold">Cutting-Edge Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 sm:mb-8">
              <span className="block animate-slide-in-left">Everything You Need to</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Dominate the Market
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              From intelligent lead generation to automated deal closing, our AI platform handles every aspect of your real estate business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 sm:hover:-translate-y-6 hover:scale-105 h-full relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl sm:rounded-3xl`}></div>
                    
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">{feature.description}</p>
                    <div className="mt-6 sm:mt-8 flex items-center text-blue-600 font-semibold group-hover:translate-x-3 transition-transform duration-500 text-sm sm:text-base">
                      Explore <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Light Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-delayed-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-2xl animate-float"></div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 sm:px-6 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative" style={{ zIndex: 10 }}>
        {/* Light Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-100/20 via-emerald-100/20 to-teal-100/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur-xl border border-green-200/50 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg animate-bounce-gentle">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-600 animate-pulse" />
              <span className="text-green-800 font-semibold">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 sm:mb-8">
              <span className="block animate-slide-in-left">Trusted by</span>
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Join thousands of real estate professionals who have transformed their business with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-xl border border-green-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105 h-full">
                  <div className="flex items-center mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base lg:text-lg font-light">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl object-cover mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-800 text-base sm:text-lg lg:text-xl truncate">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm sm:text-base lg:text-lg truncate">{testimonial.role}</p>
                      <p className="text-green-600 text-xs sm:text-sm font-semibold truncate">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Light Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-green-100/40 to-emerald-100/40 rounded-full blur-2xl animate-float-delayed-slow"></div>
      </section>



      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-600 px-4 sm:px-6 py-12 sm:py-16 relative" style={{ zIndex: 10 }}>
        {/* Light Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={dealifyLogo} alt="Dealify.ai Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-slate-800">Dealify.ai</span>
              </div>
              <p className="text-slate-600 mb-6 sm:mb-8 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed">
                The most advanced AI-powered real estate automation platform. 
                Transform your business with intelligent deal sourcing and analysis.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-slate-300 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md group">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-slate-300 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md group">
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-slate-300 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md group">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-pink-600 transition-colors duration-300" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-slate-300 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md group">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-slate-800 font-bold text-lg sm:text-xl mb-4 sm:mb-6">Product</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Features</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">API</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Integrations</a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-slate-800 font-bold text-lg sm:text-xl mb-4 sm:mb-6">Support</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Help Center</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Contact Us</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-all duration-300 hover:translate-x-2 block text-slate-600 text-sm sm:text-base">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-300 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg">© 2025 Dealify.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-100px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(100px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes float-delayed-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        
        @keyframes draw-line {
          from { 
            stroke-dasharray: 0 1000; 
            stroke-dashoffset: 0; 
          }
          to { 
            stroke-dasharray: 1000 0; 
            stroke-dashoffset: 0; 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1.2s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1.2s ease-out 0.3s both;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-float-delayed-slow {
          animation: float-delayed-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
          stroke-dasharray: 0 1000;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};