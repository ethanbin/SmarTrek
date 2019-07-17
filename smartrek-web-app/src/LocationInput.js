import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class LocationInput extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formDestinationInput">
          <Form.Label>Enter your destination</Form.Label>
          <Form.Control type="text" placeholder="Shoken Street 18, Tel Aviv-Yafo" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Let's go!
        </Button>
      </Form>
    );
  }
}