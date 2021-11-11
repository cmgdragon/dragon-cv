import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.hydrate(<App />, document.getElementById("root"));