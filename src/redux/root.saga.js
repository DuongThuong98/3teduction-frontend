import { call, all } from 'redux-saga/effects'
import tagSaga from './tag/tag.sagas'
import majorSaga from './major/major.sagas'
import assignmentSaga from './saga/assignment.sagas'
import major from './saga/major.sagas'

export default function* rootSagas() {
  yield all([
    call(tagSaga),
    call(majorSaga),
    call(assignmentSaga),
    call(major),
  ])
}
