import React from 'react'

function TaskInput(props) {
  return (
    <div>
       <form onSubmit={props.submit}>
         <input
          type='text' 
          value={props.value}
          onChange={props.change}
          placeholder='Enter a task'  
         />
         <button type='submit'>Add</button>
       </form> 
    </div>
  )
}

export default TaskInput