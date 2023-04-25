import FeatureForm from './components/FeatureForm';
import ImpactForm from './components/ImpactForm1'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import ImpactForm2 from './components/ImpactForm2';
import ImpactForm3 from './components/ImpactForm3';
import Pentagon from './components/Pentagon';
import Header from './components/shared/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/feature-form" element={<FeatureForm />} />
          <Route path="/impact-form" element={<ImpactForm />} />
          <Route path="/impact-form2" element={< ImpactForm2 />} />
          <Route path="/impact-form3" element={<ImpactForm3 />} />
          <Route path="/pentagon" element={<Pentagon />} />

        </Routes>
      </Router>
      <footer className="border py-3">
        <p id="footer" className="m-0">
          <span>© Copyright 2019 - MoboGamez.com - All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
