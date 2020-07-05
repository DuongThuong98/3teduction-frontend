import { call, all, takeLatest, put } from 'redux-saga/effects'
import { message } from 'antd'
import TagType from '../constant/curriculum.types'
import {
  getAllSuccess,
  getAllFailure,
  createTagFailure,
  createTagSuccess,
  editTagSuccess,
  editTagFailure,
  deleteTagSuccess,
  deleteTagFailure,
} from '../actions/curriculum.action'
import ResponseService from '../../services/curriculum.service '

// Get all
function* getAll(action) {
  try {
    console.log('Saga get all: ' + action.type)
    const data = yield ResponseService.getAll(action.payload.data)
    console.log('saga data: '+ data)
    yield put(getAllSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllSaga() {
  yield takeLatest(TagType.GET_ALL_RESPONSE, getAll)
}

// Create tag
function* createTag(action) {
  try {
    const data = yield ResponseService.createTag(action.payload.data)
    message.success(data.message)
    yield put(createTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(createTagFailure(err.message))
  }
}

function* createTagSaga() {
  yield takeLatest(TagType.CREATE_RESPONSE, createTag)
}

// edit tag
function* editTag(action) {
  try {
    const data = yield ResponseService.editTag(action.payload.data)
    message.success(data.message)
    yield put(editTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(editTagFailure(err.message))
  }
}

function* editTagSaga() {
  yield takeLatest(TagType.EDIT_RESPONSE, editTag)
}

// delete tag
function* deleteTag(action) {
  try {
    const data = yield ResponseService.deleteTag(action.payload.data)
    message.success(data.message)
    yield put(deleteTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(deleteTagFailure(err.message))
  }
}

function* deleteTagSaga() {
  yield takeLatest(TagType.DELETE_RESPONSE, deleteTag)
}

export default function* tagSaga() {
  yield all([call(getAllSaga), call(createTagSaga), call(editTagSaga), call(deleteTagSaga)])
}
