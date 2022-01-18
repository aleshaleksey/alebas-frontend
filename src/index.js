import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//=================WEBSOCKET STUFF
//create a var that requires a module
  const WebSocket = require("ws");

//create a var that has an instance of a web server
  const wss = new WebSocket.Server({port: 8092});
  
//When connected, fire a message
  wss.on("connection", ws => {
  
  console.log("New client connected!");
})

//=================RENDER STUFF
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
