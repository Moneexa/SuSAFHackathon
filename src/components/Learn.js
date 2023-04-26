import React from 'react'
import {Link} from 'react-router-dom'
import './Learn.css'

function Learn() {
  return (
    <div class="sustainability-dimensions">
  <div class="box big">
    <h2>Sustainability Dimension</h2>
    <p>Covers all aspects of sustainability that are important to achieve the overall goal.</p>
  </div>
  <div class="box social">
    <h3>Social</h3>
    <p>Covers the connections and interactions among people, including their sense of community, trust, inclusiveness, diversity, equality, participation, and communication.</p>
  </div>
  <div class="box individual">
    <h3>Individual</h3>
    <p>Covers the ability of individuals to prosper, enjoy their rights, and grow autonomously in terms of health, continuous learning, privacy, safety, and agency.</p>
  </div>
  <div class="box environmental">
    <h3>Environmental</h3>
    <p>Covers the responsible management and preservation of natural resources, including biodiversity and land use, logistics and transportation, soil health, and prevention of atmospheric and water pollution.</p>
  </div>
  <div class="box economic">
    <h3>Economic</h3>
    <p>Covers the financial aspects and business value of sustainable practices, including customer relationship management, governance and processes, innovation and research and development, and supply chain management.</p>
  </div>
  <div class="box technical">
    <h3>Technical</h3>
    <p>Covers the capability of systems to adapt to changes, including their maintainability, usability, extensibility and adaptability, security, and scalability.</p>
  </div>
  <Link to="/stepper" className="button">I am READY!!! Take me to the Tool.</Link>
</div>

  )
}

export default Learn