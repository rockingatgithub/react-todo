import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Button, ListGroupItem } from 'react-bootstrap';
import {deleteTask} from '../actions'
import AddTask from './AddTask'

class Task extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showForm: false,
            }
        }
        
      handleTask = () => {
        const { task } = this.props;
        this.props.dispatch(deleteTask(task));
      };

    updateTask = () => {
        this.setState({
            showForm: true,
        })
    }

    render() {
        const { task } = this.props;
        const { tasks } = this.props;
        return (
            <ListGroupItem>
                <div>
        <span>{task.id}</span>
        <span>{task.title}</span>
        <span>{task.completed ? "True"  : "False"}</span>
                </div>
                <Button onClick={this.updateTask} variant="secondary">U</Button>
                {this.state.showForm && (
          <AddTask tasks={tasks} dispatch={this.props.dispatch} isUpdate={true} taskId={task.id} />
        )}
                <Button onClick={this.handleTask} variant="secondary">
                    x
                </Button>
            </ListGroupItem>
        );
    }
}

function mapStateToProps({ tasks }) {
    return {
      tasks,
    };
  }
  
  export default connect(mapStateToProps)(Task);