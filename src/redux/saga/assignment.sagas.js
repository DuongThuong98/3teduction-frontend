import { call, all, takeLatest, put } from 'redux-saga/effects'
import { message } from 'antd'
import TagType from '../constant/assignment.types'
import {
  getAllSuccess,
  getAllFailure,
  createTagFailure,
  createTagSuccess,
  editTagSuccess,
  editTagFailure,
  deleteTagSuccess,
  deleteTagFailure,
} from '../actions/assignment.action'
import AssignmentService from '../../services/assignment.service'

// Get all
function* getAll(action) {
  try {
    const data = yield AssignmentService.getAll(action.payload.data)
    yield put(getAllSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllSaga() {
  yield takeLatest(TagType.GET_ALL_TAG, getAll)
}

// Create tag
function* createTag(action) {
  try {
    const data = yield AssignmentService.createTag(action.payload.data)
    message.success(data.message)
    yield put(createTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(createTagFailure(err.message))
  }
}

function* createTagSaga() {
  yield takeLatest(TagType.CREATE_TAG, createTag)
}

// edit tag
function* editTag(action) {
  try {
    const data = yield AssignmentService.editTag(action.payload.data)
    message.success(data.message)
    yield put(editTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(editTagFailure(err.message))
  }
}

function* editTagSaga() {
  yield takeLatest(TagType.EDIT_TAG, editTag)
}

// delete tag
function* deleteTag(action) {
  try {
    const data = yield AssignmentService.deleteTag(action.payload.data)
    message.success(data.message)
    yield put(deleteTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(deleteTagFailure(err.message))
  }
}

function* deleteTagSaga() {
  yield takeLatest(TagType.DELETE_TAG, deleteTag)
}

export default function* tagSaga() {
  yield all([call(getAllSaga), call(createTagSaga), call(editTagSaga), call(deleteTagSaga)])
}
