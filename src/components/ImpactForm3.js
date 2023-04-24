import React, { useState, useEffect } from "react";
import "./ImpactForm.css";
import { useStoreState, useStoreActions } from "easy-peasy";
import {useNavigate} from 'react-router-dom'

function ImpactForm3() {
  const impactArray = useStoreState((state) => state.impactArray);
  const pentagonObject = useStoreState((state) => state.pentagonObject);
  const navigate = useNavigate();

  const impactArrayPop = useStoreActions((action) => action.impactArrayPop);
  const maintainPentagon = useStoreActions(
    (actions) => actions.maintainPentagon
  );

  const [answers, setAnswers] = useState({
    likelihood: "",
    intensity: "",
    impact: {},
    explanation: "",
    classification: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };
  const handleInputRadio = (e) => {
    const { name, value } = e.target;
    let answerImpact = answers;
    answerImpact["impact"] = { name, value };
    setAnswers({ ...answers, answerImpact });
  };
  const handleInputRadio2 = (e) => {
    const { name, value } = e.target;

    setAnswers({ ...answers, [name]: value });
  };
  const pentagon = (answers) => {
    const category = answers.classification;
    const text = answers.explanation;
    const arr = pentagonObject;
    if (answers.impact.name === "env_p" || answers.impact.name === "env_n") {
      arr.push({ effect: text, impact: "environment", category: category });
    } else if (
      answers.impact.name === "social_p" ||
      answers.impact.name === "social_n"
    ) {
      arr.push({ effect: text, impact: "social", category: category });
    } else if (
      answers.impact.name === "ind_p" ||
      answers.impact.name === "ind_n"
    ) {
      arr.push({ effect: text, impact: "individual", category: category });
    } else if (
      answers.impact.name === "economic_p" ||
      answers.impact.name === "economic_n"
    ) {
      arr.push({ effect: text, impact: "economic", category: category });
    }

    maintainPentagon(pentagonObject, arr);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form with answers:", answers);
    impactArrayPop(impactArray, answers.impact);
    pentagon(answers);
    navigate('/pentagon')

    // Here you can add code to submit the form to a backend API or do other processing
  };

  useEffect(() => {
    console.log(impactArray);
  }, []);
  return (
    <form className="feature-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="impact">Identifying the impact of your Impact</label>
        {impactArray?.map((value, index) => {
          return (
            <div key={index}>
              <label htmlFor={`radio${index}`}>
                <input
                  type="radio"
                  id={`radio${index}`}
                  name={Object.keys(value)[0]}
                  value={Object.values(value)[0]}
                  onChange={handleInputRadio}
                />
                {Object.values(value)[0]}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <label htmlFor="explanation">
          Explain the Impact of this feature in a short sentence:
        </label>
        <input
          type="text"
          id="explanation"
          name="explanation"
          value={answers.explanation}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="likelihood">
          What is the likelihood of the occurance of the impact:
        </label>
        <input
          type="text"
          id="likelihood"
          name="likelihood"
          value={answers.likelihood}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="intensity">
          What is the intensity of the occurance of the impact:
        </label>
        <input
          type="number"
          id="intensity"
          name="intensity"
          value={answers.number}
          onChange={handleInputChange}
        />
      </div>
      <div className="Classification">
        <label>How can you classify the impact occured:</label>
        <div>
          <label htmlFor="radio-1">
            <input
              type="radio"
              id="radio-1"
              name="classification"
              value="immediate"
              onChange={handleInputRadio2}
            />
            The impact is intentional since the feature primarily aims to
            achieve this goal.
          </label>
        </div>
        <div>
          <label htmlFor="radio-2">
            <input
              type="radio"
              id="radio-2"
              name="classification"
              value="immediate"
              onChange={handleInputRadio2}
            />
            The impact is one of the major criticism this project can get.
          </label>
        </div>
        <div>
          <label htmlFor="radio-3">
            <input
              type="radio"
              id="radio-3"
              name="classification"
              value="enabling"
              onChange={handleInputRadio2}
            />
            It is an indirect impact that we can foresee happening as a result
            of our main goal.
          </label>
        </div>
        <div>
          <label htmlFor="radio-4">
            <input
              type="radio"
              id="radio-4"
              name="classification"
              value="structural"
              onChange={handleInputRadio2}
            />
            It is occured due to systematic and design changes.
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ImpactForm3;
