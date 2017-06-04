import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import PayrunTable from './Table';
// import EndPoints from "./EndPoints";
import './App.css';
import '@myob/myob-styles/dist/styles/myob.css';

ReactDOM.render(
  <div className="App-header margin-bottom-60">
    <h1 className="padding-left-10">Manage pay runs</h1>
    <PayrunTable />
  </div>,
  document.getElementById('root')
);