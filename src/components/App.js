import React from 'react';

import Whether from './Whether';
import '../styles/App.scss';

const App = () => (
  <div styleName='app'>
    <h1>whether</h1>
    <Whether />
    <h2 styleName='umbrella'>&#9730;</h2>
  </div>
);

export default App;
