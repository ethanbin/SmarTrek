import React from 'react';

import DirectionsList from './DirectionsList';

export default class RouteDirections extends React.Component {
  render() {
    return (
      <div className="routeDirectionsContainer">
        <h2>Directions</h2>
        <DirectionsList />
      </div>
    );
  }
}