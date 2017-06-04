import React from 'react';
import './App.css';
// import {Ajax} from 'react-superagent';
var request = require('superagent-bluebird-promise');

const initialState = {
  apiStatus: 0,
  colour: "",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

  checkStatus = () => {
    request.get(this.props.urlProps)
    .then((result) => {
      this.setState({
        apiStatus: result.status,
        colour: "success"
      })
    }).catch((error) => {
      this.setState({
        apiStatus: error.status,
        colour: "failure"
      });
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.checkStatus(),
      10000
    );
  }

  render() {
    return (
      <div className="dashboard">
        {this.props.serviceProps}: <span className={this.state.colour}>{this.state.apiStatus}</span>
      </div>
    );
  };
}

export default App;