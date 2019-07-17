import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './LocationInput.css';

export default class LocationInput extends React.Component {

  state = {
    startLocation: '',
    endLocation: '',
  };

  sendData = (e) => {
    e.preventDefault();
    const axios = require('axios');
    axios.post(`http://localhost:5000/dataplace/hey`, {
      params: {
        startLocation: this.state.startLocation,
        endLocation: this.state.endLocation,
      }
    }).then((res) => console.log(res))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="formContainer">
        <Form onSubmit={this.sendData}>
          <Form.Group controlId="formStartInput">
            <Form.Label>Enter your starting location</Form.Label>
            <Form.Control
              type="text"
              placeholder="20 West 34th Street, New York, NY 10001, USA"
            />
          </Form.Group>
          <Form.Group controlId="formEndInput">
            <Form.Label>Enter your destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="West 44th Street & 45th Street, New York, NY 10036, USA"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onSubmit={this.sendData}
          >
            Let's go!
          </Button>
        </Form>
      </div>
    );
  }
}