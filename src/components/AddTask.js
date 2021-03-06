import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import {addTask, updateTask} from '../actions'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// ========================addtask component for adding a task==========================================


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          completed: false,
        };
      }
    
      titleHandler = (e) => {
        this.setState({
          title: e.target.value,
        });
      };
    
      taskCompleted = () => {
        this.setState({
          completed: true,
        });
      };
    
      taskNotCompleted = () => {
        this.setState({
          completed: false,
        });
      };
    
      handleAddTask = () => {
        const { title, completed } = this.state;
        if(title===""){
          toast("Please enter a title for task.", {
            position: "top-right",
            type: "info",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        const task = {
          userId: 1,
          title: title,
          completed: completed,
        };
        this.props.dispatch(addTask(task));
      };

      handleUpdateTask = () => {
        const { title, completed } = this.state;
        if(title===""){
          toast("Please enter a title for task.", {
            position: "top-right",
            type: "info",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        const task = {
          userId: 1,
          title: title,
          completed: completed,
        };
        this.props.dispatch(updateTask(task, this.props.taskId));
      };

    render() {
        return (
            <Form>
  <Form.Group controlId="formBasicTitle">
    <Form.Label>Task Title</Form.Label>
    <Form.Control type="text" placeholder="Enter task" onChange={this.titleHandler} />
  </Form.Group>

  <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Status
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="completed"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange={this.taskCompleted}
        />
        <Form.Check
          type="radio"
          label="Not Completed"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange={this.taskNotCompleted}
        />
      </Col>
    </Form.Group>
  
  {!this.props.isUpdate ? <Button variant="outline-secondary" onClick={this.handleAddTask} size="sm" >
          Add to List
        </Button> : <Button variant="outline-secondary" onClick={this.handleUpdateTask} size="sm">
          Update
        </Button>}
</Form>
        );
    }
}

export default AddTask;