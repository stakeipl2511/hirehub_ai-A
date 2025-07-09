import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import AuthenticationLoginRegister from "pages/authentication-login-register";
import AboutContactPage from "pages/about-contact-page";
import NotificationsCenter from "pages/notifications-center";
import ProfileManagement from "pages/profile-management";
import VideoInterviewInterface from "pages/video-interview-interface";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/authentication-login-register" element={<AuthenticationLoginRegister />} />
        <Route path="/about-contact-page" element={<AboutContactPage />} />
        <Route path="/notifications-center" element={<NotificationsCenter />} />
        <Route path="/profile-management" element={<ProfileManagement />} />
        <Route path="/video-interview-interface" element={<VideoInterviewInterface />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;