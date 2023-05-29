import React from 'react'

function Tasks(props) {
  const listItems = props.list;
  return (
    <div className='list-container'>
      {listItems.map((item, index)=>{
          return(
            <>
              <li key={index}>{item} </li>
              <i onClick={()=>{props.deleteItem(index)}}  class="fa-solid icon fa-x"></i>
            </>
          )
      })}
       
    </div>
  )
}

export default Tasks