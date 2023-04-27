import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <header className="home-page">
     
      <h1 className="main-heading">SusAF Analysis Tool</h1>
      
      <h2 className="subheading">Welcome to SusAF analysis tool. View your product through a sustainability lens and form better decisions!</h2>
      <div className='d-flex justify-content-between'>
      <Link to="/learn" className="button">I want to learn about Susaf First!</Link>
      <Link to="/howto" className="button">How To use SusAF tool (RECOMMENDED)</Link>
      <Link to="/functionalrequirements" className="button">Start telling us about your product</Link>
      
      </div>
      
    </header>
  );
}

export default Home; 
