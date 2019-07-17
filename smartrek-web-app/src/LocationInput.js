import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './LocationInput.css';

/**
 * TODO
 * - get rid of the copy/pasted handleChange code
 */

export default class LocationInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.state = {
      startLocation: '',
      endLocation: '',
    };
  }

  handleStartChange(e) {
    this.setState({startLocation: e.target.value});
  }

  handleEndChange(e) {
    this.setState({endLocation: e.target.value});
  }

  async componentDidMount(){
  	const url = 'http://localhost:5000/test';
  	const response = await fetch(url);
  	const data = await response.json();
  	console.log(data.msg);
  }

  sendData = (e) => {
    e.preventDefault();
    const axios = require('axios');
    axios.post(`http://localhost:5000/sendLocations/hey`, {
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
              onChange={this.handleStartChange}
            />
          </Form.Group>
          <Form.Group controlId="formEndInput">
            <Form.Label>Enter your destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="West 44th Street & 45th Street, New York, NY 10036, USA"
              onChange={this.handleEndChange}
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
