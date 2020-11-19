import {combineReducers} from 'redux'
import{ALL_TASK, ADD_TASK, DELETE_TASK} from '../actions'

const initialTaskState = {
    list: [],
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
        return {
          ...state,
          list: [action.task, ...state.list],
        };
      }
      default:
        return state;
    }
  }

  export default combineReducers({
    tasks,
  });
  