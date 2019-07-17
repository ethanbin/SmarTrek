import React from 'react';

import LocationInput from './LocationInput';
import RoutesList from './RoutesList';
import RouteMap from './RouteMap';

export default class App extends React.Component {
  render() {
    return (
      <div styleName="container">
        <h1>SmarTrek</h1>
        <LocationInput />
        <RoutesList />
        <RouteMap />
      </div>
    );
  }
}