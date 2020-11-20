import {combineReducers} from 'redux'
import{ALL_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK} from '../actions'

const initialTaskState = {
    list: [],
    nextId: 12,
  };

  export function tasks(state = initialTaskState, action) {
    switch (action.type) {
      case ALL_TASK:
        return {
          ...state,
          list: action.tasks,
        };
  
      case DELETE_TASK:
        const filteredArray = state.list.filter(
          (task) => task.id !== action.task.id
        );
        return {
          ...state,
          list: filteredArray,
        };
      case ADD_TASK: {
        let newObj = Object.assign({}, action.task)
        newObj.id=state.nextId
        state.nextId++;
        console.log(state.nextId)
        return {
          ...state,
          list: [newObj, ...state.list],
        };
      }
      case UPDATE_TASK: {
        const filteredArray = state.list.filter(
          (task) => task.id !== action.id
        );
        let newObj = Object.assign({}, action.task)
        newObj.id=action.id
        return {
          ...state,
          list: [newObj, ...filteredArray],
        };
      }
      default:
        return state;
    }
  }

  export default combineReducers({
    tasks,
  });
  