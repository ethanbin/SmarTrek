import React from 'react';

import './RoutesList.css';

export default class RoutesList extends React.Component {

  state = {
    routes: [
    {name: 'test1', rating: 9},
    {name: 'test2', rating: 3}
    ],
  };

  renderRoutes = () => {
    return (
        this.state.routes.map((item, index) =>
          <li key={index}>Route #{index + 1}: {item.name} - {item.rating}/10</li>
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