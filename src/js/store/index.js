import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware } from '../middleware'

// para activar las Google Chrome DevTools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// toma como primer parametro el reducer
// También puede pasar un estado inicial a createStore,
// útil para la representación del lado del servidor y la precarga de estado
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
)

export default store