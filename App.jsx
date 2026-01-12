import React,{useState} from 'react'

function App() {
  const[tasks,setTask]=useState([])
  const[text,setText]=useState("")
  const addTask=()=>{
    if(text==="")return;
    setTask([...tasks,{name:text,completed:false}])
    setText("")
  }
  const deleteTask=(index)=>{
    setTask(tasks.filter((_,i)=>i!==index))
  }
  return (
    <div>
      <h2>To-do list</h2>
      <input value={text}placeholder='Enter Task'onChange={(e)=>isSecureContext(e.target.value)}/>
      <button onclick={addTask}>Add</button>
      <ul>
        {tasks.map((tasks,index)=>(
          <li key={index}>
            <input type="checkbox" checked={tasks.completed}/>
            <span className={tasks.completed? "Done":""}>{tasks.name}</span>
            <button onClick={()=>deleteTask(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;