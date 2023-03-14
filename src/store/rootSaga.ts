import { all, fork } from 'redux-saga/effects'

import translationSagas from './sagas/translationSagas'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(translationSagas)])
}
