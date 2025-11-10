import React from 'react';

const TodoItem = (props)=>{
    return (
      <li className="todo-item">
        <span>
          {props.completed ? <></> : <input type="checkbox" name="" id="" />}
          <span className='todoItem-text'>{props.text}</span>
        </span>
        <p>...</p>
      </li>
    );
}

export default TodoItem;