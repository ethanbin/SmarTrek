import React from 'react';
import Button from 'react-bootstrap/Button';

import ModeRoutesList from './ModeRoutesList';

import './RoutesList.css';

export default class RoutesList extends React.Component {

  state = {
    routes: [
      {name: 'route 1', rating: 9, mode: 'car'},
      {name: 'route 2', rating: 3, mode: 'transit'},
      {name: 'route 3', rating: 1, mode: 'walk'},
      {name: 'route 4', rating: 2, mode: 'bike'},
    ],
    tabs: [
      {value: 'car', label: 'Car'},
      {value: 'transit', label: 'Transit'},
      {value: 'walk', label: 'Walk'},
      {value: 'bike', label: 'Bike'},
    ],
  };

  onSelectTab = (value) => {
    console.log(value);
    this.props.selectTab(value);
  }

  render() {
    let buttons = this.state.tabs.map((item, index) => {
      return (
        <Button
          key={index}
          onClick={() => this.onSelectTab(item.value)}
          variant={item.value === this.props.selected ? "primary" : "secondary"}
        >
          {item.label}
        </Button>
      );
    });

    return (
      <div className="routesListContainer">
        <h2>Routes</h2>
        {buttons}
        <ModeRoutesList selected={this.props.selected} routes={this.state.routes} />
      </div>
    );
  }
}