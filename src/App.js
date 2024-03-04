import React, { useState } from 'react';
import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    console.log('submit', value)
    erase()
  }

  const onKeyDown = (ev) => {
    if(ev.which === ENTER_KEY) {
      submit()
    } else if (ev.which === ESCAPE_KEY) {
      erase()
    }
  }
  const onChange = (ev) => {
    setValue(ev.target.value);
  }

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
      </section>

    </section>
  );
};



export default App;
