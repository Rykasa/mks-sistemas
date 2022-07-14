import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, Store, AnyAction } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        sagaMiddleware,
      )
      .concat()
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export * from './actions'
export * from './types'