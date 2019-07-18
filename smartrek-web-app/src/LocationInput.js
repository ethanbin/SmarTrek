import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import EndpointCaller;
import './LocationInput.css';
import {talk} from './APIInterface.js'

import temp1 from './temp1.json';
import temp2 from './temp2.json';

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
      routes: {},
    };
  }

  handleStartChange(e) {
    this.setState({startLocation: e.target.value});
  }

  handleEndChange(e) {
    this.setState({endLocation: e.target.value});
  }

  // async componentDidMount(){
  // 	const url = 'http://localhost:5000/test';
  // 	const response = await fetch(url);
  // 	const data = await response.json();
  // 	console.log(data.msg);
  // }

  // async componentDidMount(){
  //   let test = await talk('test');
  // 	console.log(test);
  // }

  sendData = async e => {
    console.log('locations sent');
    if (this.state.startLocation.toLowerCase() === '17 amsterdam place staten island' && this.state.endLocation.toLowerCase() === 'college of staten island') {
      e.preventDefault();
      // this.props.loadRoutes(temp1);
      this.setState({routes: temp1});
      this.props.loadRoutes(this.state.routes);
    } else if (this.state.startLocation.toLowerCase() === 'rockefeller center' && this.state.endLocation.toLowerCase() === 'central park zoo') {
      e.preventDefault();
      // this.props.loadRoutes(temp2);
      this.setState({routes: temp2});
      this.props.loadRoutes(this.state.routes);
    } else {
      let obj = {
          startLocation: this.state.startLocation,
          endLocation: this.state.endLocation,
        };
      e.preventDefault();
      let locations = await talk('sendLocations', obj);
      // console.log(locations);
      this.setState({routes: locations});
      this.props.loadRoutes(this.state.routes);
    }
  };

  render() {
    return (
      <div className="formContainer">
        <h3>Where do you want to go?</h3>
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
            disabled={this.state.startLocation === '' || this.state.endLocation === ''}
          >
            Let's go!
          </Button>
        </Form>
      </div>
    );
  }
}
