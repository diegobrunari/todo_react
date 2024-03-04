import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  let UUID = Math.random().toFixed(4) * 100;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    setTodos([...todos, { 
      id: UUID, 
      title: value, 
      checked: false 
      },
    ]);

    erase();
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => 
      obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
    )); 
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  }

  const onKeyDown = (ev) => {
    if(ev.which === ENTER_KEY) {
      submit()
    } else if (ev.which === ESCAPE_KEY) {
      erase()
    }
  };
  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo List</h1>
      </header>

      <section className='main'>
        <input className='new-todo' 
        placeholder='O que você precisa fazer?' 
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown}/>
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id.toString()} >
              <span className={['todo', todo.checked ? 'checked' : ''].join(' ')} onClick={() => onToggle(todo)} tabIndex={0} role='button'>
                {todo.title}
              </span>
            <button className='remove' type='button' onClick={() => onRemove(todo)}>
              <MdDelete size={28} />
            </button>
            </li>
          ))
          }
        </ul>
      </section>

    </section>
  );
};



export default App;
