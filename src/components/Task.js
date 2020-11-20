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

    updateTaskClose = () => {
        this.setState({
            showForm: false,
        })
    }

    render() {
        const { task } = this.props;
        const { tasks } = this.props;
        return (
            <ListGroupItem>
                <div className="listitem">
        <div>{task.id}</div>
        <div className="taskTitle">{task.title}</div>
        <div>{task.completed ? <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828640.svg" style={{height: "20px", width:"20px"}} alt="checkmark" />  : <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828843.svg" style={{height:"20px", width:"20px"}} alt="crossmark" />}</div>
                </div>
                <div className="taskbuttons">
                {!this.state.showForm ? <Button onClick={this.updateTask} variant="outline-secondary" size="sm">Update</Button>: <Button onClick={this.updateTaskClose} variant="outline-secondary" size="sm" >Close Form</Button>}
                {this.state.showForm && (
          <AddTask tasks={tasks} dispatch={this.props.dispatch} isUpdate={true} taskId={task.id} />
        )}
                <Button onClick={this.handleTask} variant="outline-secondary" size="sm" className="binIcon">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/833/833262.svg" style={{height: "20px", width:"20px"}} alt="deleteicon" />
                </Button>
                </div>
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