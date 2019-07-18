import React from 'react';

import DirectionsList from './DirectionsList';

import './RouteDirections.css';

export default class RouteDirections extends React.Component {
  render() {
    return (
      <div className="routeDirectionsContainer">
        <h3>Directions</h3>
        <DirectionsList directions={this.props.selectedRoute.instructions} />
      </div>
    );
  }
}