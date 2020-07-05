/* eslint-disable no-underscore-dangle */
import TagType from '../constant/curriculum.types'

const INITIAL_STATE = {
  data: [],
  loading: false,
  err: null,
  length: 1,
}

const TagReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TagType.GET_ALL_RESPONSE:
    case TagType.CREATE_RESPONSE:
    case TagType.EDIT_RESPONSE:
    case TagType.DELETE_RESPONSE: {
      return {
        ...state,
        loading: true,
      }
    }
    case TagType.GET_ALL_SUCCESS_RESPONSE: {
      console.log('reducer: ' + action.payload.data[0])
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        length: action.payload.length,
      }
    }
    case TagType.CREATE_SUCCESS_RESPONSE: {
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload.data),
      }
    }
    case TagType.EDIT_SUCCESS_RESPONSE: {
      return {
        ...state,
        loading: false,
        data: state.data.map(item =>
          item._id.toString() === action.payload.data._id.toString() ? action.payload.data : item
        ),
      }
    }
    case TagType.DELETE_SUCCESS_RESPONSE: {
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item._id.toString() !== action.payload.data._id.toString()),
      }
    }
    case TagType.GET_ALL_FAILURE_RESPONSE:
    case TagType.CREATE_FAILURE_RESPONSE:
    case TagType.EDIT_FAILURE_RESPONSE:
    case TagType.DELETE_FAILURE_RESPONSE: {
      return {
        ...state,
        loading: false,
        err: action.payload.message,
      }
    }
    default:
      return state
  }
}
export default TagReducers
