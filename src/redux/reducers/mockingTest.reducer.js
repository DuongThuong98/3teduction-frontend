/* eslint-disable no-underscore-dangle */
import TagType from '../constant/mockingTest.types'

const INITIAL_STATE = {
  data: [],
  loading: false,
  err: null,
  length: 1,
  dropdown: []
}

const TagReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TagType.GET_ALL_MOCKINGTEST:
    case TagType.CREATE_MOCKINGTEST:
    case TagType.EDIT_MOCKINGTEST:
    case TagType.DELETE_MOCKINGTEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case TagType.GET_ALL_SUCCESS_MOCKINGTEST: {
      console.log('reducer: ' + action.payload.data[0])
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        length: action.payload.length,
      }
    }
    case TagType.GET_ALL_SUCCESS_MOCKINGTEST_DROPDOWN: {
      console.log('reducer: ' + action.payload.data[0])
      return {
        ...state,
        dropdown: action.payload.data,
      }
    }
    case TagType.CREATE_SUCCESS_MOCKINGTEST: {
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload.data),
      }
    }
    case TagType.EDIT_SUCCESS_MOCKINGTEST: {
      return {
        ...state,
        loading: false,
        data: state.data.map(item =>
          item._id.toString() === action.payload.data._id.toString() ? action.payload.data : item
        ),
      }
    }
    case TagType.DELETE_SUCCESS_MOCKINGTEST: {
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item._id.toString() !== action.payload.data._id.toString()),
      }
    }
    case TagType.GET_ALL_FAILURE_MOCKINGTEST:
    case TagType.CREATE_FAILURE_MOCKINGTEST:
    case TagType.EDIT_FAILURE_MOCKINGTEST:
    case TagType.DELETE_FAILURE_MOCKINGTEST: {
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
