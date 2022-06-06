// import React, { useState } from 'react';
// import {nanoid} from 'nanoid';
// import ReactDOM from 'react-dom';
// import './index.css';

// // For inccreament counter
// function IncreaseCount() {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div className="app">
//       <button onClick={incrementCount}>click</button>
//       {count}
//     </div>
//   );
// }
// // for todo
// function App()
// {
//   const [text, setText]=useState("initial text");
//   const [tasks,setTasks]=useState([]);
//   const taskValueChange = (val) => {
//     setText(val);

//     // console.log('text')
//    };
//    const addTask = () => {
//     setTasks([...tasks,{id:nanoid(), name:text,status:0}]);
//     setText("");
//    }
//    const deleteTask = (id) =>{
//      const task_array=tasks.filter(task=>task.id!==id);
//      setTasks(task_array);
//    }
//    const handleChecked = (check,index) => {
//       let arr = tasks;
//       console.log("tasks", tasks);
//       console.log(check);
//       if (check) arr[index].status = 1;
//       else arr[index].status = 0;
//       setTasks(tasks)
//       console.log(arr);
//    }
//   return(
//    <>
//      <IncDecCounter />
//     <br/>
//     <h1 className='title'>Todo-List</h1>
//     <div className='todo-form'>
//     <input type="text" value={text} onChange={(e)=>taskValueChange(e.target.value)}/>
//       <button onClick={()=> addTask()}> Add</button>
//         {/* <button> Add</button> */}
//         <br/>
//         <br/>
//     </div>
//     <br/ >
//     <div className='todo-list'>
//       {tasks.map((task,index) => {
//         return <div key = {task.id}> 
//         <input type="checkbox" onChange={e=>handleChecked(e.target.checked,index)}/>
//         <div className={(task.status == 1 ? 'check' : 'uncheck')}>
//         {task.name}
//         {task.status}
//         </div>
//         <a href ="#" onClick={()=> deleteTask(task.id)}> Delete </a></div>;
//       })}
      
//       {/* List of todos */}
//     </div>
//     </>
//   )
// }

// function IncDecCounter(){
//   let [num, setNum]= useState(0);
//   let incNum =()=>{
//     if(num<10)
//     {
//     setNum(Number(num)+1);
//     }
//   };
//   let decNum = () => {
//      if(num>0)
//      {
//       setNum(num - 1);
//      }
//   }
//  let handleChange = (e)=>{
//    setNum(e.target.value);
//   }

//    return(
//     <>
//         <div>
            
//           <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
//           <input type="text" class="form-control" value={num} onChange={handleChange}/>
//           <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
          
//         </div>
//     </>
//   );
// }

// ReactDOM.render(<App/>,document.getElementById("root"));

import React, { useState } from "react";
import { useEffect } from "react";

import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import {TodoForm} from './TodoForm';
import TodoList from './TodoList'; 
import './index.css';
// let text = "initisl text";
function App() {

// let text = "initial text"

const [text, setText] = useState("initial text");

const [tasks, setTasks] = useState([]);

const [filter, setFilter] = useState('All');

const taskValueChange = (val) => {



setText(val);

};

useEffect(()=>{
    let tempTasks=localStorage.getItem('Tasks');

    console.log(tempTasks);
    if(!tempTasks){
      setTasks([]);
    }
    else{
    setTasks(JSON.parse(tempTasks));

    }
}, []);

// useEffect(()=>{
//     let tempTasks=localStorage.getItem('tasks');
//     console.log(tempTasks);
//     setTasks(JSON.parse(tempTasks));
// });

// useEffect(()=>{
//     let tempTasks=localStorage.getItem('tasks');
//     console.log(tempTasks);
//     setTasks(JSON.parse(tempTasks));
// }, tasks);
// text = "Changed text";



// setText("changed text")



// console.log(text);



const addTask = () => {
  let tempArray= [...tasks, { id: nanoid(), name: text, status: 0}]
setTasks(tempArray); //add all the tasks and gives a id and name to every task
setText("");
localStorage.setItem('Tasks',JSON.stringify(tempArray))
}



const [num, setNum] = useState(0);

const [limit, setLimit] = useState(100);

const addNum = () => {
if (limit !== 0) {
setNum(num + 1);
setLimit(limit - (10));

}

}
const subNum = () => {
if (num > 0) {

setNum(num - 1);

setLimit(limit + (10));

}
}



// Deleting a task by id

const deleteTask = (id) => {
// const deleteTask = (id) => {

// const tasks_array = tasks.filter(function(task)){

// if(task.id !== id){

// return true;

// }



// return false;




// }

// }




const tasks_array = tasks.filter(task => task.id !== id);



setTasks(tasks_array);

}



// const [state, setState] = useState(false)

// const completedTask = () => {

// setState({tasks: [...state.tasks.filter(task => {

// return task.completed===true;

// })]})

// }




// const completedTask = (id) => {

// const setTasks = [...tasks];

// tasks[id].isCompleted = true;

// setTasks[tasks];

// }





// const [status, setStatus] = useState([]);



// const completeTask = (id) => {

// const tasks_array = tasks.filter(task => task.id !== id);

// setStatus(tasks_array)

// console.log(status)

// } 



// const[status, setStatus] = useState(0)



// const [status, setStatus] = useState(0)

const onChecked = (id) => {

// setTasks(task => tasks.status != status);

// if (status == 0) {

// // status = 1;

// setStatus(1);

// }



// if (status == 1) {

// setStatus(0);

// }




setTasks(tasks.map(task => {

if(task.id === id){

if(task.status === 0){

task.status = 1;

}else {

task.status = 0

}

}

return task;

}))





// setTimeout(function(){

// console.log(tasks);

// }, 2000);

}



const showAll = () => {

setFilter('All')

}



const showPending = () => {

setFilter('Pending');

}



const showDone = () => {

setFilter("Done")

}





return (

<>
<div className="style">
  <h1 className="title"> Todo List</h1>
 <div className="todo-form">

  <input type="text" value={text} onChange={(e) => taskValueChange(e.target.value)} />

  <button onClick={() => addTask()}>Add</button>

 </div>






<br />


<div className="operation">
  <button> 
  <a onClick={showAll}>Show All</a>
  </button>
  <button> 
  <a onClick={showPending}>Show Pending</a>
  </button>
  <button>
   <a onClick={showDone}>Show Done</a>
  </button>
</div>
<br/>

<div className="operation"> 



</div>

<br/>

<div className="operation">
  

</div>

<br />

<div className="todo-list">



{/* List of todos */}



{tasks.map((task, id) => {

if(filter === 'All') {

return (

<div key = {task.id}>

<li key={task.id}> <input type="checkbox" checked = {(task.status === 1 ? 'checked' : '' )} onChange={() => onChecked(task.id)} />

{task.name} - {task.status} -

<a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

</li>

</div>

);

}else if(filter === 'Pending') {

if(task.status === 0) {

return (

<div key = {task.id}>

<li key={task.id}> <input type="checkbox" onChange={() => onChecked(task.id)} />

{task.name} - {task.status} -

<a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

</li>

</div>

);

}

}else if(filter === "Done") {

if(task.status === 1){

return (

<div key = {task.id}>

<li key={task.id}> <input type="checkbox" checked onChange={() => onChecked(task.id)} />

{task.name} - {task.status} -

<a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

</li>

</div>

);

}

}



})}



<br />




</div>





{/* Code for Increament and decreament */}

<div>

<button onClick={() => subNum()}>-</button>

<input type="text" value={num} />

<button onClick={() => addNum()}>+</button>

<p>Rs 10 per item</p>

<br />

<input type="text" value={limit}></input>

</div>
</div>
</>

);

}



ReactDOM.render(<App />, document.getElementById('root'));

