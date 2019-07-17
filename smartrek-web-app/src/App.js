import React from 'react';

import LocationInput from './LocationInput';
import RoutesList from './RoutesList';
import RouteMap from './RouteMap';
import RouteDirections from './RouteDirections';

import './App.css';

export default class App extends React.Component {

  state = {
    selectedTab: 'car',
  };

  pageChange = (value) => {
    if (!(value === this.state.selectedTab)) {
      this.setState({selectedTab: value});
    }
  };

  render() {
    return (
      <div className="appContainer">
        <div className="leftContainer">
          <h1>SmarTrek</h1>
          <LocationInput />
          <RoutesList selectTab={this.pageChange} selected={this.state.selectedTab} />
        </div>
        <div className="rightContainer">
          <RouteMap />
          <RouteDirections />
        </div>
      </div>
    );
  }
}