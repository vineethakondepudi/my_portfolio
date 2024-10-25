import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create a Home.css if you want to style this component separately

function Home() {
  return (
    <div>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home;
