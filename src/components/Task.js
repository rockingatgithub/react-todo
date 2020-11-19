import React, { Component } from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import {deleteTask} from '../actions'

class Task extends Component {
    
      handleTask = () => {
        const { task } = this.props;
        this.props.dispatch(deleteTask(task));
      };
    render() {
        const { task } = this.props;
        return (
            <ListGroupItem>
                <div>
        <span>{task.id}</span>
        <span>{task.title}</span>
        <span>{task.completed ? "True"  : "False"}</span>
                </div>
                <Button onClick={this.handleTask}>
                    x
                </Button>
            </ListGroupItem>
        );
    }
}

export default Task;