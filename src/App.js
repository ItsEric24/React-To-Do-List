import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './components/Tasks';

function App() {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e){
    setInputValue(e.target.value);
  }
   
  function handleSubmit(e){
    e.preventDefault();

    if(inputValue !== ''){
      setToDo((prev)=>{
        return [...prev, inputValue];
      })
      setInputValue('');
    }else{
      alert("Provide a value please");
    }
   
  }

  function handleDelete(index){
    setToDo(toDo.filter((listItem, i)=>{
      return i !== index;
    }))
  }

  return (
    <div className='container'>
      <h1>Tasks</h1>
      <TaskInput
      submit={handleSubmit}
      change={handleChange}
      value={inputValue}
      />
      <Tasks
      list={toDo}
      deleteItem={handleDelete}
       />
    </div>
  )
}

export default App;