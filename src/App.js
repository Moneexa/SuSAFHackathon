import { React, useState } from "react";
import { PDFViewer } from '@react-pdf/renderer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Pentagon from './components/Pentagon';
import Header from './components/shared/Header';
import ImpactAssessment from "./ImpactAssessment";
import StepForm from "./StepForm";
import DocumentTemplate from "./components/DocumentTemplate";
import FunctionalRequirementsForm from "./components/FunctionalRequirements";
import './App.css';
import Learn from "./components/Learn";
function App() {

  const [featureslist, setFeatureslist] = useState([]);


  const handleFunctionalRequirementsSubmit = (newFeatures) => {
    setFeatureslist([...featureslist, ...newFeatures]);
    console.log(featureslist)
  };


  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="functionalrequirements" element={<FunctionalRequirementsForm onSubmit={handleFunctionalRequirementsSubmit} featureslist={featureslist} />} />
          <Route path="/stepper" element={<StepForm options={featureslist} />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/impact-assessment" element={<ImpactAssessment />} />
          <Route path="/pentagon" element={<Pentagon />} />
          <Route path="/impact-assessment" element={<ImpactAssessment />} />
          <Route path="/doc" element={<DocumentTemplate />} />
        </Routes>
      </Router>
      <footer className="border py-3">
        <p id="footer" className="m-0">
          <span>© Copyright 2019 - Moneeza.com - All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
