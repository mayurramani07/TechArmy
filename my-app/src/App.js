import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Project from "./components/project";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/SignUpForm";
import PropertyListing from "./components/PropertyListing";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./App.css";
import "./styles/global.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const renderContent = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage onNavigateToSignUp={() => setCurrentPage("signup")} />;
      case "signup":
        return <SignUpForm onNavigateToLogin={() => setCurrentPage("login")} />;
      case "projects":
        return <Project />;
      case "contact":
        return <ContactUs />;
      case "about":
        return <AboutUs />;
      case "PropertyListing": 
        return <PropertyListing />;
      default:
        return (
          <>
            <HeroSection />
            <Project />
            <ContactUs />
            <AboutUs />
          </>
        );
    }
  };

  return (
    <div>
      <NavBar setCurrentForm={setCurrentPage} />
      {renderContent()}
      {currentPage === "main" && <Footer />}
    </div>
  );
};

export default App;

