import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Курс
import codingCourse from './courses/coding-course/coding-course';

// Курс менять здесь
// @ts-ignore
ReactDOM.render(<App selectedCourse={codingCourse} />, document.getElementById('root'));