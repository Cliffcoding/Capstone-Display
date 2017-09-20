import React, { Component } from 'react';

import moment from 'moment';
import momentTimezone from 'moment-timezone';


class Time extends Component {
  constructor(props) {
    super(props)
    this.state={
      hour: moment().tz("America/Denver").format('h:mm:ss a')

    }
  }

  tick() {
    this.setState({
      hour: moment().tz("America/Denver").format('h:mm:ss a')
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnMount(){
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className= "time">
        {console.log(moment().tz("America/Denver").format('a'))}
        <h2>{moment().tz("America/Denver").format('a') === "am" ? "GOOD MORNING!" : "GOOD EVENING"}</h2>
        <h2>{moment().tz("America/Denver").format('MMMM Do YYYY')}</h2>
        <h2>{this.state.hour}</h2>
      </div>
    );
  }
}

export default Time;
