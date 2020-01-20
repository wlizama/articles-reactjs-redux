import { createStore } from 'redux'
import rootReducer from '../reducers/index'

// toma como primer parametro el reducer
// También puede pasar un estado inicial a createStore,
// útil para la representación del lado del servidor y la precarga de estado
const store = createStore(rootReducer)

export default store