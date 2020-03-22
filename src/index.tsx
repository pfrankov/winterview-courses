import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const course = require(`./courses/${process.env.REACT_APP_COURSE}/${process.env.REACT_APP_COURSE}`).default;

// @ts-ignore
ReactDOM.render(<App selectedCourse={course} />, document.getElementById('root'));