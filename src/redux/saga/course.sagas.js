import { call, all, takeLatest, put } from 'redux-saga/effects'
import MajorType from '../constant/course.types'
import { getAllSuccess, getAllFailure } from '../actions/course.action'
import MajorService from '../../services/course.service'

// Get all
function* getAll() {
  try {
    const data = yield MajorService.getAll()
    yield put(getAllSuccess(data))
  } catch (err) {
    yield put(getAllFailure(err.message))
  }
}

function* getAllSaga() {
  yield takeLatest(MajorType.GET_ALL_MAJOR, getAll)
}

export default function* majorSaga() {
  yield all([call(getAllSaga)])
}
