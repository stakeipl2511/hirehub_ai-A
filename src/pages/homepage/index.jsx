import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AppHeader from '../../components/ui/AppHeader';
import AuthenticatedSidebar from '../../components/ui/AuthenticatedSidebar';
import HeroSection from './components/HeroSection';
import RoleCards from './components/RoleCards';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HireHub AI - Intelligent Hiring Platform | AI-Powered Recruitment</title>
        <meta 
          name="description" 
          content="Transform your hiring process with HireHub AI's intelligent recruitment platform. AI-powered screening, bias-free interviews, and smart candidate matching for job seekers, recruiters, and employers." 
        />
        <meta name="keywords" content="AI hiring, recruitment platform, video interviews, candidate screening, bias-free hiring, job matching" />
        <meta property="og:title" content="HireHub AI - Intelligent Hiring Platform" />
        <meta property="og:description" content="Revolutionize your hiring process with AI-powered recruitment solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <AppHeader />
        
        {/* Authenticated Sidebar */}
        <AuthenticatedSidebar />
        
        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Role Selection Cards */}
          <RoleCards />
          
          {/* Features Section */}
          <FeaturesSection />
          
          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Footer */}
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Homepage;