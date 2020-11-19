import React, { Component } from 'react';
import { connect } from "react-redux";
import {Container} from 'react-bootstrap'
import Tasklist from './TaskList'
class App extends Component {
  render() {
    return (
      <Container>
        <Tasklist dispatch={this.props.dispatch} />
      </Container>
    );
  }
}

function callback(state) {
  return {
    tasks: state.tasks,
  };
}

const connectedComponent = connect(callback)(App);

export default connectedComponent;