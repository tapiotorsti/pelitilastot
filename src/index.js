import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyCfoIjlpiHqfFCxEgBucam7lzvNaCFeORU",
  authDomain: "gamescore-tt.firebaseapp.com",
  projectId: "gamescore-tt",
  storageBucket: "gamescore-tt.appspot.com",
  messagingSenderId: "71300117459",
  appId: "1:71300117459:web:edd8b277b0beacd39d3526",
  measurementId: "G-KTJ0YC5H8K"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthCheck fallback={<Startup/>}>
        <App />
      </AuthCheck>  
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
