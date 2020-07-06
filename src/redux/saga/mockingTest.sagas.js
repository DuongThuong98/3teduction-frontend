import { call, all, takeLatest, put } from 'redux-saga/effects'
import { message } from 'antd'
import TagType from '../constant/mockingTest.types'
import {
  getAllSuccess,
  getAllFailure,
  getAllTestDropdownSuccess,
  createTagFailure,
  createTagSuccess,
  editTagSuccess,
  editTagFailure,
  deleteTagSuccess,
  deleteTagFailure,
} from '../actions/mockingTest.action'
import MockingTestService from '../../services/mockingTest.service'

// Get all
function* getAll(action) {
  try {
    console.log('Saga get all: ' + action.type)
    const data = yield MockingTestService.getAll(action.payload.data)
    console.log('saga data: '+ data)
    yield put(getAllSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllSaga() {
  yield takeLatest(TagType.GET_ALL_MOCKINGTEST, getAll)
}
// Get all
function* getAllDropdown(action) {
  try {
    console.log('Saga get all: ' + action.type)
    const data = yield MockingTestService.getAllDropdown()
    console.log('saga data: '+ data)
    yield put(getAllTestDropdownSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllDropdownSaga() {
  yield takeLatest(TagType.GET_ALL_MOCKINGTEST_DROPDOWN, getAllDropdown)
}

// Create tag
function* createTag(action) {
  try {
    const data = yield MockingTestService.createTag(action.payload.data)
    message.success(data.message)
    yield put(createTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(createTagFailure(err.message))
  }
}

function* createTagSaga() {
  yield takeLatest(TagType.CREATE_MOCKINGTEST, createTag)
}

// edit tag
function* editTag(action) {
  try {
    const data = yield MockingTestService.editTag(action.payload.data)
    message.success(data.message)
    yield put(editTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(editTagFailure(err.message))
  }
}

function* editTagSaga() {
  yield takeLatest(TagType.EDIT_MOCKINGTEST, editTag)
}

// delete tag
function* deleteTag(action) {
  try {
    const data = yield MockingTestService.deleteTag(action.payload.data)
    message.success(data.message)
    yield put(deleteTagSuccess(data))
  } catch (err) {
    message.error(err.message)
    yield put(deleteTagFailure(err.message))
  }
}

function* deleteTagSaga() {
  yield takeLatest(TagType.DELETE_MOCKINGTEST, deleteTag)
}

export default function* tagSaga() {
  yield all([call(getAllSaga),call(getAllDropdownSaga), call(createTagSaga), call(editTagSaga), call(deleteTagSaga)])
}
