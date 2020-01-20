import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './js/store'
import App from './App';
import * as serviceWorker from './serviceWorker';

//El componente <Provider /> hace que el store de Redux esté disponible para 
// cualquier componente anidado que se haya incluido en la función connect().
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//# pruebas en consola de navedador ###

//import index from './js/index'

/* pruebas en consola de navedador

store.getState() // > { articles: [] }

// subscribirse para escuchar cada cambio en el state
store.subscribe(() => console.log('This is fucking Redux!'))

*/