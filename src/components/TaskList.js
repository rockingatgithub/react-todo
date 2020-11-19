import React, { Component } from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import { connect } from "react-redux";
import Task from './Task'
import AddTask from './AddTask'
import {allTaskList} from '../actions'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(allTaskList());
  }

  openForm = () => {
    this.setState({
      showForm: true,
    });
  };
    render() {
      const { tasks } = this.props;
      const { list } = tasks;
        return (
           <Row>
             <Col>
             <Button onClick={this.openForm} variant="secondary">
          {" "}
          ADD TASK{" "}
        </Button>
        {this.state.showForm && (
          <AddTask tasks={tasks} dispatch={this.props.dispatch} />
        )}
             </Col>
             <Col>
             <ListGroup>
             {list.map((task) => (
            <Task key={task.id} task={task} dispatch={this.props.dispatch} />
          ))}
          </ListGroup>
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
