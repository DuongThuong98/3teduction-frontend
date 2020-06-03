import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import rootSagas from './root.saga'
import thunk from "redux-thunk";

const sagaMiddleWare = createSagaMiddleware()
const middlewares = [sagaMiddleWare,thunk]

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  middlewares.push(logger)
}

console.log('in store.js, process env: ', process.env.NODE_ENV)

// @ts-ignore
export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
sagaMiddleWare.run(rootSagas)
export const persistor = persistStore(store)

export default { store, persistStore }
