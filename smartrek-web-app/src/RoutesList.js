import React from 'react';

import './RoutesList.css';

export default class RoutesList extends React.Component {

  state = {
    routes: [
      {name: 'route 1', rating: 9, mode: 'car'},
      {name: 'route 2', rating: 3, mode: 'transit'},
      {name: 'route 3', rating: 1, mode: 'walk'},
      {name: 'route 4', rating: 2, mode: 'bike'},
    ],
  };

  renderRoutes = () => {
    const car = [];
    const transit = [];
    const walk = [];
    const bike = [];
    this.state.routes.forEach(function(item, index) {
      switch (item.mode) {
        case 'car':
          car.push(item);
          break;
        case 'transit':
          transit.push(item);
          break;
        case 'walk':
          walk.push(item);
          break;
        case 'bike':
          bike.push(item);
          break;
        default:
          break;
      }
    });
    debugger;
    return (
      <div>
        <h2>Car</h2>
        <ul>{this.renderArray(car)}</ul>
        <h2>Transit</h2>
        <ul>{this.renderArray(transit)}</ul>
        <h2>Walk</h2>
        <ul>{this.renderArray(walk)}</ul>
        <h2>Bike</h2>
        <ul>{this.renderArray(bike)}</ul>
      </div>
    )
  }

  renderArray = (array) => {
    return (
      array.map((item, index) =>
        <li key={index + 1}>Route #{index + 1}: {item.name} - {item.rating}</li>
      )
    )
  }

  render() {
    return (
      <div className="routesListContainer">
        <h4>Routes</h4>
        {this.renderRoutes()}
      </div>
    );
  }
}