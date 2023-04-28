import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HowToUseSusAF() {
  return (
    <Container className="mt-7" style={{ fontFamily: 'Open Sans', backgroundColor: '#ffd9e3', padding: '30px', margin: '20px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)' }}>
      <Row>
        <Col>
          <h2 style={{ color: '#d24d6d', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>How to Use SusAF Tool</h2>
          <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            In SusAF analysis, you are supposed to identify your functional requirements of features as you say it. You will be assessing the impact of those features on social, economical, individual, technological and environmental dimension.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            Each feature is going to have a corresponding chain of impact (one or more than one). The chain of impact comprises of impact1, 2, 3, 4, 5 connected to one another. So if impact 1 is causing impact 2, they need to be connected.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            You will be asked a few questions. All you have to do is answer them! Just know that in first form you tell us about your feature and the direct impact it has. in the second form you tell us about the "impact of impact" and so on until the last form.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            This is where we do our work. Since you have already answered our questions, we decide what impacts your selected feature is having and then your chain of impacts is formed. We will be sorting your impacts to dimensions (social, economical, environmental, technological, individual) without you even knowing it ;)
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>For example:</p>
          <ul style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px', listStyle: 'none', paddingLeft: '20px' }}>
            <li style={{ color: '#d24d6d', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>Product name: LinkedIn</li>
            <li style={{ color: '#d24d6d', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>Feature 1: Connecting employees with companies</li>
            <li style={{ color: '#d24d6d', fontSize: '16px',  lineHeight: '1.6', marginBottom: '15px' }}>Feature 2: Filtering employees</li>
            <li style={{ color: '#d24d6d', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>Feature 2: Personal branding</li>
            <ul />
            <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>Among the functional requirements identified above, you then have to decide which feature to assess. So lets say you begin with Feature 2: Filtering employees.The first impact of the feature is efficiency, which saves up recruiters a lot of time. Therefore you have an impact in individual dimension. Impact 2 can then be "less office resources used" which is an impact in environmental dimension. So that is a consequent of your first impact. You are basically supposed to develop a "chains of impact" for each feature.</p>
            </ul>
        </Col>
      </Row>
      <Link to="/functionalrequirements" className="button" style={{ backgroundColor: '#d24d6d', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', textDecoration: 'none', marginTop: '30px', display: 'inline-block' }}>Start Telling us about a project</Link>
    </Container>
  );
}

export default HowToUseSusAF;