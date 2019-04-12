import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { createBrowserHistory } from 'history'
import { logger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [routerMiddleware(history), logger, ...getDefaultMiddleware()],
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(createRootReducer(history)))
}

export default store
