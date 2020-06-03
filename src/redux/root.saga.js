import { call, all } from 'redux-saga/effects'
import tagSaga from './tag/tag.sagas'
import majorSaga from './major/major.sagas'


export default function* rootSagas() {
  yield all([
    call(tagSaga),
    call(majorSaga),
  ])
}
