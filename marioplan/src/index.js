import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, firestoreReducer, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from './config/fbConfig'

const rrfConfig = { userProfile: 'users' }

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App/>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
