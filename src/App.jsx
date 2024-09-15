import React, { useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Slider from './Components/Slider';
import FrLayout from './Components/FrLayout';
import Layout from './Admin/Layout';
import Login from './Admin/Login';
import HomePage from './Components/Home';
import Home from './Admin/Home';
import CarSelectionPage from './Components/CarSelection';
import ProfilePage from './Components/Profile';
import Contact from './Components/Contact';
import FAQPage from './Components/FAQPage';
import DocumentsPage from './Components/Documents';
import SettingsPage from './Components/Settings';
import ChangeNamePage from './Components/ChangeName';
import AboutPage from './Components/About';
import TermsAndConditionsPage from './Components/TermsAndConditions';
import RatesPage from './Components/Rates';
import Calendar from './Components/Calendar';
import AdminPanel from './Admin/DataPage/Car';
import Homeadmin from './Admin/DataPage/Home';
import BookingPage from './Components/BookingPage';

const App = () => {
  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State for the slider
  const [showSlider, setShowSlider] = useState(true);

  // Function to handle slider skip
  const handleSkip = () => {
    setShowSlider(false); // Hides the slider after skipping
  };

  // Function to handle login status
  const handleLogin = (status) => {
    setIsAuthenticated(status); // Update authentication status
  };

  // Define routes
  const routes = useRoutes([
    {
      path: "/",
      element: showSlider ? <Slider onSkip={handleSkip} /> : <FrLayout to="/" />,  // Show slider first or navigate to home
      // element: isAuthenticated ? <FrLayout /> : <Navigate to="/login" />,  // Use FrLayout for user panel routes
      children: [
        { path: "/", element: <HomePage /> },
        { path: "car", element: <CarSelectionPage /> },
        { path: "calendar", element: <Calendar /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "support", element: <Contact /> },
        { path: "faq", element: <FAQPage /> },
        { path: "settings", element: <SettingsPage /> },
        { path: "documents", element: <DocumentsPage /> },
        { path: "change-name", element: <ChangeNamePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "terms-and-conditions", element: <TermsAndConditionsPage /> },
        { path: "rates", element: <RatesPage /> },
        { path: "booking", element: <BookingPage /> },
        // Add other user panel routes here
      ]
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />  // Login route with login handler
    },
    {
      path: "/admin/*",
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" />,  // Protect admin routes, redirect to login if not authenticated
      children: [
        { path: "home", element: <Home /> },
        { path: "carr", element: <AdminPanel /> },
        { path: "homeadmin", element: <Homeadmin /> },
        // Add other admin routes here (DataFirst, DataSecond, etc.)
      ]
    },
  ]);

  return routes;
};

export default App;
