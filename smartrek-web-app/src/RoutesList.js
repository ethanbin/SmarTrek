import React from 'react';

import './RoutesList.css';

export default class RoutesList extends React.Component {

  state = {
    routes: [
    {rating: 9, mode: 'car'},
    {rating: 3, mode: 'transit'},
    {rating: 1, mode: 'walk'},
    {rating: 2, mode: 'bike'},
    ],
  };

  renderRoutes = () => {
    return (
        this.state.routes.map((item, index) =>
          <li key={index + 1}>Route #{index + 1}: {item.name} - {item.rating}/10</li>
        )
    )
  }

  render() {
    return (
      <div className="routesListContainer">
        <h4>Routes</h4>
        <ul>{this.renderRoutes()}</ul>
      </div>
    );
  }
}