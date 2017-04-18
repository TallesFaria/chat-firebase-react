import { createStore } from 'redux'
import rootReducer from './reducers'

export default(iniitalState) => {
  return createStore(rootReducer, initialState)
}
