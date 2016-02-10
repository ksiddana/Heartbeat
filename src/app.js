import 'babel-core/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
// import { createStore } from 'redux'
// import countryList from './redux/reducers'
import d3Globe from './components/d3.js'
import d3 from 'd3'

// let store = createStore(countryList)
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { requestCountries } from './redux/actions'
import rootReducer from './redux/reducers'
import promiseMiddleware from 'redux-promise'
import CountryList from './containers/countryList'
//
const loggerMiddleware = createLogger()
//
const store = applyMiddleware(
    promiseMiddleware,
    loggerMiddleware
  )(createStore)

// store.dispatch({type: 'REQUEST_COUNTRIES'})
// store.dispatch(requestCountries()).then(() =>
//   console.log(store.getState());
// )
// )
//


var Globe = React.createClass({
  componentDidMount: function() {
    d3Globe.go();
  },
  render: function () {
    return <h1></h1>;
  }
})

ReactDOM.render(
  <Provider store={store(rootReducer)}>
  <CountryList />
  </Provider>
    , document.body )
// React.render(<Globe />, document.body);
