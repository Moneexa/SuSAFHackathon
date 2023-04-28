import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { useStoreActions } from 'easy-peasy';
import './FunctionalRequirements.css';
import { Link } from 'react-router-dom'

function FunctionalRequirementsForm({ onSubmit }) {
  const [featureslist, setFeatureslist] = useState(['']);
  const [product_name, setProductName] = useState("");
  const changeProduct = useStoreActions((actions) => actions.changeProduct);

  const handleChange = (index, value) => {
    const newFeatureslist = [...featureslist];
    newFeatureslist[index] = value;
    setFeatureslist(newFeatureslist);
  };

  const handleAddFeature = () => {
    setFeatureslist([...featureslist, '']);
  };

  const handleProductChange = (e) => {
    const val = e.target.value;
    changeProduct(val)
    setProductName(val)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(featureslist);

  };

  return (


    <form onSubmit={handleSubmit}>

      <Form.Group
        controlId="productName"
        className="m-3 mt-5"
      >
        <Form.Label>
          Name of the Product:
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="product_name"
          name="product_name"
          value={product_name}
          onChange={handleProductChange}
          placeholder="type the name of product"
        />
      </Form.Group>
      <h2>Functional Requirements</h2>
      {featureslist.map((feature, index) => (
        <div key={index}>
          <label>
            Feature #{index + 1}:
            <input
              type="text"
              value={feature}
              onChange={(event) => handleChange(index, event.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddFeature}>
        Add Feature <span role="img" aria-label="plus">➕</span>
      </button>
      <button type="submit">Submit</button>
      <Link to="/stepper" className="button">start assessing features</Link>
    </form>
  );
}

export default FunctionalRequirementsForm;