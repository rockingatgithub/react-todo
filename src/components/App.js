import React, { Component } from 'react';
import { connect } from "react-redux";
import {Container, Navbar, Row, Col} from 'react-bootstrap'
import Tasklist from './TaskList'
class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ToDo </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
  </Navbar.Collapse>
</Navbar>
        
        
        </Col>
        </Row>
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