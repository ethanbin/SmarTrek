import React from 'react';

import LocationInput from './LocationInput';
import RoutesList from './RoutesList';
import RouteMap from './RouteMap';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>SmarTrek</h1>
        <LocationInput />
        <RoutesList />
        <RouteMap />
      </div>
    );
  }
}