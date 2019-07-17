import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './LocationInput.css';

export default class LocationInput extends React.Component {

  state = {
    destination: '',
  };

  render() {
    return (
      <div className="formContainer">
        <Form>
          <Form.Group controlId="formDestinationInput">
            <Form.Label>Enter your destination</Form.Label>
            <Form.Control type="text" placeholder="Shoken Street 18, Tel Aviv-Yafo" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Let's go!
          </Button>
        </Form>
      </div>
    );
  }
}