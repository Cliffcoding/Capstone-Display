import React, { Component } from 'react';

import moment from 'moment';
import momentTimezone from 'moment-timezone';


class Time extends Component {
  render() {
    return (
      <div className= "time">
        <h2>{moment().tz("America/Denver").format('a') === "AM" ? "GOOD MORNING!" : "GOOD EVENING"}</h2>
        <h2>{moment().tz("America/Denver").format('MMMM Do YYYY')}</h2>
        <h2>{moment().tz("America/Denver").format('h:mm:ss a')}</h2>
      </div>
    );
  }
}

export default Time;
