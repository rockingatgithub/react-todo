import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import Task from './Task'

class TaskList extends Component {
    render() {
      const { tasks } = this.props;
      const { list } = tasks;
        return (
           <Row>
             <Col>
             {list.map((task) => (
            <Task key={task.id} task={task} dispatch={this.props.dispatch} />
          ))}
             </Col>
           </Row>
        );
    }
}

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(TaskList);
