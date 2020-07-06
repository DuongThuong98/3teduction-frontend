import { call, all, takeLatest, put } from 'redux-saga/effects'
import { message } from 'antd'
import TagType from '../constant/video.types'
import {
  getAllSuccess,
  getAllFailure,
  getAllVideoDropdownSuccess,
  createTagFailure,
  createTagSuccess,
  editTagSuccess,
  editTagFailure,
  deleteTagSuccess,
  deleteTagFailure,
} from '../actions/video.action'
import ResponseService from '../../services/video.service'

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
  yield takeLatest(TagType.GET_ALL_VIDEO, getAll)
}

// Get all for dropdown
function* getAllDropdown(action) {
  try {
    console.log('Saga get all: ' + action.type)
    const data = yield ResponseService.getAllDropdown()
    console.log('saga data: '+ data)
    yield put(getAllVideoDropdownSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllDropdownSaga() {
  yield takeLatest(TagType.GET_ALL_VIDEO_DROPDOWN, getAllDropdown)
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
  yield takeLatest(TagType.CREATE_VIDEO, createTag)
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
  yield takeLatest(TagType.EDIT_VIDEO, editTag)
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
  yield takeLatest(TagType.DELETE_VIDEO, deleteTag)
}

export default function* tagSaga() {
  yield all([call(getAllSaga), call(getAllDropdownSaga), call(createTagSaga), call(editTagSaga), call(deleteTagSaga)])
}
