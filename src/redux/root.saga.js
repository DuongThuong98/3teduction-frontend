import { call, all } from 'redux-saga/effects'
import tagSaga from './tag/tag.sagas'
import majorSaga from './major/major.sagas'
import assignmentSaga from './saga/assignment.sagas'
import major from './saga/course.sagas'
import mockingTest from './saga/mockingTest.sagas'
import response from './saga/curriculum.sagas'
import video from './saga/video.sagas'

export default function* rootSagas() {
  yield all([
    call(tagSaga),
    call(majorSaga),
    call(assignmentSaga),
    call(mockingTest),
    call(response),
    call(video),
    call(major),
  ])
}
