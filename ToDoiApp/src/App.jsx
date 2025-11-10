import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import './style.css';

const App =()=>{
  return (
    <div className="todoContainer">
      <Header title="ToDoi App" />
      <TodoItem completed={true} text="Eat" />
      <TodoItem text="Sleep" />
      <TodoItem text="Code" />
      <TodoItem text="Deploy" />
      <TodoItem text="Repeat" />
      <Button />
    </div>
  );
}

export default App;
