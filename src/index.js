import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';

class Hello extends React.Component {
    render() {
        return <div>Hello!</div>
    }
}

class Goodbye extends React.Component {
    render() {
        return <div>Goodbye!</div>
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/hello" component={Hello} />
      <Route path="/goodbye" component={Goodbye} />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
