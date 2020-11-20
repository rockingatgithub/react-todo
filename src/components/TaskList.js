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

  closeForm = () => {
    this.setState({
      showForm: false,
    });
  };
    render() {
      const { tasks } = this.props;
      const { list } = tasks;
        return (
           <Row>
             <Col>
             {!this.state.showForm ? <Button onClick={this.openForm} variant="light">
          ADD TASK
        </Button> : <Button onClick={this.closeForm} variant="light">
          CLOSE FORM
        </Button> }
        {this.state.showForm && (
          <AddTask tasks={tasks} dispatch={this.props.dispatch} isUpdate={false} taskId={-1} />
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
