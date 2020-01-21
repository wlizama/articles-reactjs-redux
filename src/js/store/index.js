import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware } from '../middleware'

// toma como primer parametro el reducer
// También puede pasar un estado inicial a createStore,
// útil para la representación del lado del servidor y la precarga de estado
const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
)

export default store