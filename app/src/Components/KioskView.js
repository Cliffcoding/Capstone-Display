import React, { Component } from 'react';
import Weather from './Weather';
import DailyView from './DailyView';
import Time from './Time';


class KioskView extends Component {

  render() {
    return (
      <div className="KioskView">
        <Time />
        <Weather />
        <DailyView />
      </div>
    );
  }
}

export default KioskView;
