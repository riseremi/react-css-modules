import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button/Button';

const App = () => <main><Button text="Start" /></main>;

ReactDOM.render(<App />, document.querySelector('#app-mount'));
