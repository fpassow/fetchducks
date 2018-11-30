import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import Duckbutton from './duckbutton'

const state0 = {
	ducks: [{name:'noducks'}],
  status: 'brave new pageload'
}

function rootReducer(state = state0, action) {
  switch (action.type) {
    case 'FETCHING_DUCKS':
      return Object.assign({}, state, {status:'fetching ducks'})
    case 'DUCKS_RECEIVED':
      return Object.assign({}, state, {status:'done fetching', ducks:state.ducks.concat(action.ducks)});
    default:
      return state;
  }
}

const store = createStore(rootReducer, state0, applyMiddleware(thunkMiddleware))

const App = ()=>(
  <div>
    <Duckbutton />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

