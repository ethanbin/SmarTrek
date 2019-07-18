import React from 'react';

import LocationInput from './LocationInput';
import RoutesList from './RoutesList';
import RouteMap from './RouteMap';
import RouteDirections from './RouteDirections';

import './App.css';

export default class App extends React.Component {

  state = {
    selectedTab: 'car',
    selectedRoute: {},
  };

  pageChange = (value) => {
    if (!(value === this.state.selectedTab)) {
      this.setState({selectedTab: value});
    }
  };

  routeChange = (route) => {
    if (!(route === this.state.selectRoute)) {
      this.setState({selectedRoute: route});
    }
  };

  render() {
    return (
      <div className="appContainer">
        <div className="leftContainer">
          <h1>SmarTrek</h1>
          <LocationInput />
          <RoutesList
            selectRoute={this.routeChange}
            selectTab={this.pageChange}
            selectedTab={this.state.selectedTab}
          />
        </div>
        <div className="rightContainer">
          <RouteMap />
          <RouteDirections selectedRoute={this.state.selectedRoute} />
        </div>
      </div>
    );
  }
}