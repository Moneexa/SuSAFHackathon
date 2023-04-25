import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from 'react-router-dom'
import { Form, Row, Container, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

import "./Form.css";

function FeatureForm() {
  const impactArray = useStoreState((state) => state.impactArray);
  const pentagonObject = useStoreState((state) => state.pentagonObject);
  const impactArrayPop = useStoreActions((actions) => actions.impactArrayPop);
  const maintainPentagon = useStoreActions((actions) => actions.maintainPentagon)
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    product_name: "",
    feature: "",
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });

  useEffect(() => {
    console.log(impactArray);
  }, []);

  const handleInputRadio = (e) => {
    const { name, value } = e.target;
    let answerImpact = answers;
    answerImpact["impact"] = { name, value }
    setAnswers({ ...answers, answerImpact })

  }
  const handleInputRadio2 = (e) => {
    const { name, value } = e.target;

    setAnswers({ ...answers, [name]: value })

  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setAnswers({ ...answers, [name]: value });
  };

  const pentagon = (answers) => {
    const category = answers.classification
    const text = answers.explanation
    maintainPentagon({ pentagonObject, answers: { effect: answers.feature, impact: "technology", category: "enabling" } })

    if (answers?.impact?.name === "env_p" || answers?.impact?.name === "env_n") {
      maintainPentagon({ pentagonObject, answers: { effect: text, impact: "environmental", category: category } })

    }
    else if (answers?.impact?.name === "social_p" || answers.impact.name === "social_n") {
      maintainPentagon({ pentagonObject, answers: { effect: text, impact: "social", category: category } })

    }
    else if (answers.impact.name === "ind_p" || answers.impact.name === "ind_n") {
      maintainPentagon({ pentagonObject, answers: { effect: text, impact: "individual", category: category } })
    }
    else if (answers.impact.name === "economic_p" || answers.impact.name === "economic_n") {
      maintainPentagon({ pentagonObject, answers: { effect: text, impact: "economic", category: category } })
    }
    console.log(pentagonObject)
  }
  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("Submitting form with answers:", answers);
    const answerObj = answers.impact
    impactArrayPop({ impactArray, answerObj });
    pentagon(answers)
    navigate('/impact-form')
    // Here you can add code to submit the form to a backend API or do other processing
  };

  return (
    <Container className="m-3">
      <Form className="d-flex flex-wrap align-items-center" style={{ textAlign: "left" }} onSubmit={handleSubmit}>
        <Form.Group controlId="productName" className="col-md-6 col-sm-12 m-1">
          <Form.Label htmlFor="product_name">Name of the Product:</Form.Label>
          <Form.Control
            type="text"
            id="product_name"
            name="product_name"
            value={answers.product_name}
            onChange={handleInputChange}
            placeholder="type the name of product"
          />
        </Form.Group>
        <Form.Group controlId="featureName" className="col-md-6 col-sm-12 m-1">

          <Form.Label htmlFor="feature">The Feature you are assesing:</Form.Label>
          <Form.Control
            type="text"
            id="feature"
            name="feature"
            value={answers.feature}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="featureName" className="col-md-7 col-sm-12 m-2">

          <Form.Label htmlFor="impact">Identifying the impact of your features</Form.Label>
          {impactArray?.map((value, index) => {
            return (
              <div key={index}>
                <Form.Check
                  type="radio"
                  id={`radio${index}`}
                  name={Object.keys(value)[0]}
                  value={Object.values(value)[0]}
                  onChange={handleInputRadio}
                  label={Object.values(value)[0]}
                />
              </div>
            );
          })}
        </Form.Group>
        <Form.Group className="col-md-5 col-sm-12 m-2">
          <Form.Label htmlFor="explanation">
            Explain the Impact of this feature in a short sentence:
          </Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            rows={3}
            id="explanation"
            name="explanation"
            value={answers.explanation}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="col-md-3 col-sm-12 m-2">
          <Form.Label htmlFor="likelihood">
            What is the likelihood of the occurance of the impact:
          </Form.Label>
          <Form.Control
            type="text"
            id="likelihood"
            name="likelihood"
            value={answers.likelihood}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="col-md-3 col-sm-12 m-2">
          <Form.Label htmlFor="intensity">
            What is the intensity of the occurance of the impact:
          </Form.Label>
          <Form.Control
            type="number"
            id="intensity"
            name="intensity"
            value={answers.number}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="col-md-6 col-sm-12 m-2">
          <Form.Label>How can you classify the impact occured:</Form.Label>

          <Form.Check
            type="radio"
            id="radio-1"
            name="classification"
            value="immediate"
            onChange={handleInputRadio2}
            label="The impact is intentional since the feature primarily aims to
                achieve this goal."
          />

          <Form.Check
            type="radio"
            id="radio-2"
            name="classification"
            value="immediate"
            onChange={handleInputRadio2}
            label="The impact is one of the major criticism this project can get."
          />
          <Form.Check
            type="radio"
            id="radio-3"
            name="classification"
            value="enabling"
            onChange={handleInputRadio2}
            label="It is an indirect impact that we can foresee happening as a result
                of our main goal."
          />

          <Form.Check
            type="radio"
            id="radio-4"
            name="classification"
            value="structural"
            onChange={handleInputRadio2}
            label="It is occured due to systematic and design changes."
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>

  );
}

export default FeatureForm;
