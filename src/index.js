import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import VolumeProvider from "./utils/volumeProvider";

ReactDOM.render(<VolumeProvider><App/></VolumeProvider>, document.getElementById('root'));
serviceWorker.unregister();
