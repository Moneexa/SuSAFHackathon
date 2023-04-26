import { React, useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Form } from "react-bootstrap";
import { useStore, useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const steps = ["Features", "Impact Form1", "Impact Form2", "Impact Form3"];

export default function StepForm() {
  const impactArray = useStoreState((state) => state.impactArray);
  const pentagonObject = useStoreState((state) => state.pentagonObject);
  const impactArrayPop = useStoreActions((actions) => actions.impactArrayPop);
  const graphValues = useStoreState((state) => state.graphValues);
  const changeGraphValues = useStoreActions((actions) => actions.changeGraphValues);

  const navigate = useNavigate();
  const maintainPentagon = useStoreActions(
    (actions) => actions.maintainPentagon
  );
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 3;
  };
  const [featureAnswers, setFeatureAnswers] = useState({
    product_name: "",
    feature: "",
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });
  const [impact1Answers, setImpact1Answers] = useState({
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });
  const [impact2Answers, setImpact2Answers] = useState({
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });
  const [impact3Answers, setImpact3Answers] = useState({
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });

  const pentagon = (answers) => {
    const category = answers.classification;
    const text = answers.explanation;
    if (answers.impact === 'technology') {
      maintainPentagon({
        pentagonObject,
        answers
      });

    }
    const obj = Object.keys(answers?.impact)[0]
    if (
      obj === "env_p" || obj === "env_n"
    ) {
      maintainPentagon({
        pentagonObject,
        answers: { effect: text, impact: "environmental", category: category },
      });
    } else if (obj === "social_p" || obj === "social_n"
    ) {
      maintainPentagon({
        pentagonObject,
        answers: { effect: text, impact: "social", category: category },
      });
    } else if (obj === "ind_p" || obj === "ind_n"
    ) {
      maintainPentagon({
        pentagonObject,
        answers: { effect: text, impact: "individual", category: category },
      });
    } else if (obj === "economic_p" ||
      obj === "economic_n"
    ) {
      maintainPentagon({
        pentagonObject,
        answers: { effect: text, impact: "economic", category: category },
      });
    }
    console.log(pentagonObject);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext1 = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log(featureAnswers);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    const ans = {}
    ans["impact"] = "technology"
    ans["effect"] = featureAnswers.feature
    ans["category"] = "enabling"
    pentagon(ans)
    localStorage.setItem("featureForm", JSON.stringify(featureAnswers))
    const answerObj = featureAnswers.impact
    console.log(answerObj)
    impactArrayPop({ impactArray, answerObj });
    const x = featureAnswers["intensity"]
    const y = featureAnswers["likelihood"]
    const text = featureAnswers["explanation"]
    changeGraphValues({ graphValues, value: { x, y, text } })
    pentagon(featureAnswers)


  };

  const handleNext2 = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    localStorage.setItem("impact1Form", JSON.stringify(impact1Answers))
    const answerObj = impact1Answers.impact
    impactArrayPop({ impactArray, answerObj });
    pentagon(impact1Answers)
    const x = impact1Answers["intensity"]
    const y = impact1Answers["likelihood"]
    const text = impact1Answers["explanation"]
    changeGraphValues({ graphValues, value: { x, y, text } })

  };
  const handleNext3 = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    localStorage.setItem("impact2Form", JSON.stringify(impact2Answers))
    const answerObj = impact2Answers.impact
    impactArrayPop({ impactArray, answerObj });
    pentagon(impact2Answers)
    const x = impact2Answers["intensity"]
    const y = impact2Answers["likelihood"]
    const text = impact2Answers["explanation"]
    changeGraphValues({ graphValues, value: { x, y, text } })

  };
  const handleNext4 = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    localStorage.setItem("impact3Form", JSON.stringify(impact3Answers))
    const answerObj = impact3Answers.impact
    impactArrayPop({ impactArray, answerObj });
    pentagon(impact3Answers)
    const x = impact3Answers["intensity"]
    const y = impact3Answers["likelihood"]
    const text = impact3Answers["explanation"]
    changeGraphValues({ graphValues, value: { x, y, text } })

    navigate('/pentagon')


  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleInputChangeFeature = (event) => {
    const { name, value } = event.target;
    setFeatureAnswers({ ...featureAnswers, [name]: value });
  };
  const handleInputRadioFeature = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    const impactArr = impactArray;
    let val = "";
    impactArr.map((elem) => {
      if (Object.keys(elem)[0] === value) {
        val = elem[value]
      }
    })
    setFeatureAnswers({ ...featureAnswers, [name]: { [value]: val } });
  };
  const handleInputRadio2Feature = (e) => {
    const { name, value } = e.target;

    setFeatureAnswers({ ...featureAnswers, [name]: value });
  };
  const handleInputChangeImpact1 = (event) => {
    const { name, value } = event.target;
    setImpact1Answers({ ...impact1Answers, [name]: value });
  };
  const handleInputRadioImpact1 = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    const impactArr = impactArray;
    let val = "";
    impactArr.map((elem) => {
      if (Object.keys(elem)[0] === value) {
        val = elem[value]
      }
    })
    setImpact1Answers({ ...impact1Answers, [name]: { [value]: val } });
  };
  const handleInputRadio2Impact1 = (e) => {
    const { name, value } = e.target;

    setImpact1Answers({ ...impact1Answers, [name]: value });
  };
  const handleInputChangeImpact2 = (event) => {
    const { name, value } = event.target;
    setImpact2Answers({ ...impact2Answers, [name]: value });
  };
  const handleInputRadioImpact2 = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    const impactArr = impactArray;
    let val = "";
    impactArr.map((elem) => {
      if (Object.keys(elem)[0] === value) {
        val = elem[value]
      }
    })
    setImpact2Answers({ ...impact2Answers, [name]: { [value]: val } });
  };
  const handleInputRadio2Impact2 = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    const impactArr = impactArray;
    let val = "";
    impactArr.map((elem) => {
      if (Object.keys(elem)[0] === value) {
        val = elem[value]
      }
    })

    setImpact2Answers({ ...impact2Answers, [name]: { [value]: val } });
  };
  const handleInputChangeImpact3 = (event) => {
    const { name, value } = event.target;
    setImpact3Answers({ ...impact3Answers, [name]: value });
  };
  const handleInputRadioImpact3 = (e) => {
    const { name, value } = e.target;
    console.log({ name, value })
    const impactArr = impactArray;
    let val = "";
    impactArr.map((elem) => {
      if (Object.keys(elem)[0] === value) {
        val = elem[value]
      }
    })
    setImpact3Answers({ ...impact3Answers, [name]: { [value]: val } });
  };
  const handleInputRadio2Impact3 = (e) => {
    const { name, value } = e.target;

    setImpact3Answers({ ...impact3Answers, [name]: value });
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <Fragment>
            <Form
              className="d-flex flex-wrap align-items-center"
              style={{ textAlign: "left" }}
              onSubmit={handleNext1}
            >
              <Form.Group
                controlId="productName"
                className="col-md-6 col-sm-12 m-1"
              >
                <Form.Label>
                  Name of the Product:
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  id="product_name"
                  name="product_name"
                  value={featureAnswers.product_name}
                  onChange={handleInputChangeFeature}
                  placeholder="type the name of product"
                />
              </Form.Group>
              <Form.Group
                className="col-md-6 col-sm-12 m-1"
              >
                <Form.Label>
                  The Feature you are assesing:
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  id="feature"
                  name="feature"
                  value={featureAnswers.feature}
                  onChange={handleInputChangeFeature}
                />
              </Form.Group>
              <Form.Group
                className="col-md-7 col-sm-12 m-2"
              >
                <Form.Label >
                  Identifying the impact of your features
                </Form.Label>
                {impactArray?.map((value, index) => {
                  return (
                    <div key={index}>
                      <Form.Check
                        type="radio"
                        required
                        id={`radio${index}`}
                        name="impact"
                        value={Object.keys(value)[0]}
                        onChange={handleInputRadioFeature}
                        label={Object.values(value)[0]}
                      />
                    </div>
                  );
                })}
              </Form.Group>
              <Form.Group className="col-md-5 col-sm-12 m-2">
                <Form.Label>
                  Explain the Impact of this feature in a short sentence:
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  type="text"
                  rows={3}
                  id="explanation"
                  name="explanation"
                  value={featureAnswers.explanation}
                  onChange={handleInputChangeFeature}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the likelihood of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={0}
                  max={100}
                  id="likelihood"
                  name="likelihood"
                  value={featureAnswers.likelihood}
                  onChange={handleInputChangeFeature}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the intensity of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={0}
                  max={0}
                  id="intensity"
                  name="intensity"
                  value={featureAnswers.number}
                  onChange={handleInputChangeFeature}
                />
              </Form.Group>
              <Form.Group className="col-md-6 col-sm-12 m-2">
                <Form.Label>
                  How can you classify the impact occured:
                </Form.Label>

                <Form.Check
                  required
                  type="radio"
                  id="radio-1"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Feature}
                  label="The impact is intentional since the feature primarily aims to
                achieve this goal."
                />

                <Form.Check
                  type="radio"
                  id="radio-2"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Feature}
                  label="The impact is one of the major criticism this project can get."
                />
                <Form.Check
                  type="radio"
                  id="radio-3"
                  name="classification"
                  value="enabling"
                  onChange={handleInputRadio2Feature}
                  label="It is an indirect impact that we can foresee happening as a result
                of our main goal."
                />

                <Form.Check
                  type="radio"
                  id="radio-4"
                  name="classification"
                  value="structural"
                  onChange={handleInputRadio2Feature}
                  label="It is occured due to systematic and design changes."
                />
              </Form.Group>
            </Form>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext1}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Fragment>
        ) : activeStep === 1 ? (
          <Fragment>
            <Form
              className="d-flex flex-wrap align-items-center"
              style={{ textAlign: "left" }}
              onSubmit={handleNext2}
            >
              <Form.Group
                className="col-md-7 col-sm-12 m-2"
              >
                <Form.Label>
                  Identifying the impact of your features
                </Form.Label>
                {impactArray?.map((value, index) => {
                  return (
                    <div key={index}>
                      <Form.Check
                        required
                        type="radio"
                        id={`radio${index}`}
                        name="impact"
                        value={Object.keys(value)[0]}
                        onChange={handleInputRadioImpact1}
                        label={Object.values(value)[0]}
                      />
                    </div>
                  );
                })}
              </Form.Group>

              <Form.Group className="col-md-5 col-sm-12 m-2">
                <Form.Label >
                  Explain this Impact in a short sentence:
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  type="text"
                  rows={3}
                  id="explanation"
                  name="explanation"
                  value={impact1Answers.explanation}
                  onChange={handleInputChangeImpact1}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the likelihood of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={0}
                  max={100}
                  id="likelihood"
                  name="likelihood"
                  value={impact1Answers.likelihood}
                  onChange={handleInputChangeImpact1}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the intensity of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={0}
                  max={100}
                  id="intensity"
                  name="intensity"
                  value={impact1Answers.number}
                  onChange={handleInputChangeImpact1}
                />
              </Form.Group>
              <Form.Group className="col-md-6 col-sm-12 m-2">
                <Form.Label>
                  How can you classify the impact occured:
                </Form.Label>

                <Form.Check
                  type="radio"
                  required
                  id="radio-5"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact1}
                  label="The impact is intentional since the feature primarily aims to
                achieve this goal."
                />

                <Form.Check
                  type="radio"
                  required
                  id="radio-6"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact1}
                  label="The impact is one of the major criticism this project can get."
                />
                <Form.Check
                  type="radio"
                  id="radio-7"
                  name="classification"
                  value="enabling"
                  onChange={handleInputRadio2Impact1}
                  label="It is an indirect impact that we can foresee happening as a result
                of our main goal."
                />

                <Form.Check
                  type="radio"
                  id="radio-8"
                  name="classification"
                  value="structural"
                  onChange={handleInputRadio2Impact1}
                  label="It is occured due to systematic and design changes."
                />
              </Form.Group>
            </Form>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext2}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Fragment>
        ) : activeStep === 2 ? (
          <Fragment>
            <Form
              className="d-flex flex-wrap align-items-center"
              style={{ textAlign: "left" }}
              onSubmit={handleNext3}
            >
              <Form.Group
                className="col-md-7 col-sm-12 m-2"
              >
                <Form.Label>
                  Identifying the impact of your features
                </Form.Label>
                {impactArray?.map((value, index) => {
                  return (
                    <div key={index}>
                      <Form.Check
                        required
                        type="radio"
                        id={`radio${index}`}
                        name="impact"
                        value={Object.keys(value)[0]}
                        onChange={handleInputRadioImpact2}
                        label={Object.values(value)[0]}
                      />
                    </div>
                  );
                })}
              </Form.Group>

              <Form.Group className="col-md-5 col-sm-12 m-2">
                <Form.Label>
                  Explain the Impact of this feature in a short sentence:
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  type="text"
                  rows={3}
                  id="explanation"
                  name="explanation"
                  value={impact2Answers.explanation}
                  onChange={handleInputChangeImpact2}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the likelihood of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="likelihood"
                  name="likelihood"
                  value={impact2Answers.likelihood}
                  onChange={handleInputChangeImpact2}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the intensity of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  type="number"
                  id="intensity"
                  name="intensity"
                  value={impact2Answers.number}
                  onChange={handleInputChangeImpact2}
                />
              </Form.Group>
              <Form.Group className="col-md-6 col-sm-12 m-2">
                <Form.Label>
                  How can you classify the impact occured:
                </Form.Label>

                <Form.Check
                  required
                  type="radio"
                  id="radio-9"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact2}
                  label="The impact is intentional since the feature primarily aims to
                achieve this goal."
                />

                <Form.Check
                  required
                  type="radio"
                  id="radio-10"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact2}
                  label="The impact is one of the major criticism this project can get."
                />
                <Form.Check
                  required
                  type="radio"
                  id="radio-11"
                  name="classification"
                  value="enabling"
                  onChange={handleInputRadio2Impact2}
                  label="It is an indirect impact that we can foresee happening as a result
                of our main goal."
                />

                <Form.Check
                  required
                  type="radio"
                  id="radio-12"
                  name="classification"
                  value="structural"
                  onChange={handleInputRadio2Impact2}
                  label="It is occured due to systematic and design changes."
                />
              </Form.Group>
            </Form>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext3}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Fragment>
        ) : activeStep === 3 ? (
          <Fragment>
            <Form
              className="d-flex flex-wrap align-items-center"
              style={{ textAlign: "left" }}
              onSubmit={handleNext4}
            >
              <Form.Group
                className="col-md-7 col-sm-12 m-2"
              >
                <Form.Label>
                  Identifying the impact of your features
                </Form.Label>
                {impactArray?.map((value, index) => {
                  return (
                    <div key={index}>
                      <Form.Check
                        required
                        type="radio"
                        id={`radio${index}`}
                        name="impact"
                        value={Object.keys(value)[0]}
                        onChange={handleInputRadioImpact3}
                        label={Object.values(value)[0]}
                      />
                    </div>
                  );
                })}
              </Form.Group>

              <Form.Group className="col-md-5 col-sm-12 m-2">
                <Form.Label>
                  Explain the Impact of this feature in a short sentence:
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  type="text"
                  rows={3}
                  id="explanation"
                  name="explanation"
                  value={impact3Answers.explanation}
                  onChange={handleInputChangeImpact3}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the likelihood of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  type="number"
                  required
                  min={0}
                  max={100}
                  id="likelihood"
                  name="likelihood"
                  value={impact3Answers.likelihood}
                  onChange={handleInputChangeImpact3}
                />
              </Form.Group>
              <Form.Group className="col-md-3 col-sm-12 m-2">
                <Form.Label>
                  What is the intensity of the occurance of the impact:
                </Form.Label>
                <Form.Control
                  type="number"
                  required
                  min={0}
                  max={100}
                  id="intensity"
                  name="intensity"
                  value={impact3Answers.number}
                  onChange={handleInputChangeImpact3}
                />
              </Form.Group>
              <Form.Group className="col-md-6 col-sm-12 m-2">
                <Form.Label>
                  How can you classify the impact occured:
                </Form.Label>

                <Form.Check
                  type="radio"
                  id="radio-13"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact3}
                  label="The impact is intentional since the feature primarily aims to
                achieve this goal."
                />

                <Form.Check
                  type="radio"
                  id="radio-14"
                  name="classification"
                  value="immediate"
                  onChange={handleInputRadio2Impact3}
                  label="The impact is one of the major criticism this project can get."
                />
                <Form.Check
                  type="radio"
                  id="radio-15"
                  name="classification"
                  value="enabling"
                  onChange={handleInputRadio2Impact3}
                  label="It is an indirect impact that we can foresee happening as a result
                of our main goal."
                />

                <Form.Check
                  type="radio"
                  id="radio-16"
                  name="classification"
                  value="structural"
                  onChange={handleInputRadio2Impact3}
                  label="It is occured due to systematic and design changes."
                />
              </Form.Group>
            </Form>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext4}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Fragment>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
}
