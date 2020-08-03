import React, { Fragment } from 'react';
import './App.css';

//components
import InpuTodo from './components/InputTodo';
import LisTodo from './components/ListTodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InpuTodo />
        <LisTodo />
      </div>
    </Fragment>
  );
}

export default App;
