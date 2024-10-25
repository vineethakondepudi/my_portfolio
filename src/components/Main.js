import React from 'react';
import Footer from './Footer';
import AppHeader from './Header';
import './Main.css';

function Main({ children }) {
  return (
    <div>
      {/* Render the header at the top */}
      <AppHeader />

      {/* The main content section, which will vary depending on the route */}
      <div className="main-content">
      <div className="home-content">
      <h1>VINEETHA KONDEPUDI Software Developer</h1>
      <imgage src="/assets/vineetha.jpg" alt="Description of Image" className="main-image" />
    </div>
        {children}
      </div>

      {/* Render the footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Main;
