import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <header className="home-page">
      <h1 className="main-heading">SuSAF Analysis Tool</h1>
      <h2 className="subheading">Welcome to SuSAF analysis tool. View your product through a sustainability lens and form better decisions!</h2>
      <Link to="/feature-form" className="button">Start telling us about your product</Link>
    </header>
  );
}

export default Home; 
