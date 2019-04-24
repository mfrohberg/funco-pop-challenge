import { combineReducers } from 'redux'
import { auctionsReducer } from './auctionsReducer'
import { connectRouter } from 'connected-react-router'

export default (history: any) => combineReducers({
  router: connectRouter(history),
  auctionsReducer
})

export * from './auctionsReducer'