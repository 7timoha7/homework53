import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {

  const [task, setTask] = useState([
    {inputUser: 'Wake up, wash, do exercises.', id: 'd1', style: 'none'},
    {inputUser: 'Cook breakfast.', id: 'd2', style: 'none'},
    {inputUser: 'Clean up the house.', id: 'd3', style: 'none'}
  ]);

  const [currentTask, setCurrentTask] = useState([
      {inputUser: 'Add new task',  style: 'none'}
    ]
  )

  const onChangeCheckbox = (index:string) => {
    const tasksCopy = [...task];
    tasksCopy.map(task => {
      if (task.id === index) {
        if (task.style === 'none'){
          task.style = 'block';
        } else {
          task.style = 'none';
        }
      }
      return tasksCopy;
    })
    setTask(tasksCopy);
  }

  const firstThreeTask = task.map((task) => {
    return (
      <Task inputUser={task.inputUser}
            key={task.id}
            onClickDelete={() => deleteTask(task.id)}
            onChangeCheckbox={() => onChangeCheckbox(task.id)}
            style={task.style}
      />
    )
  });

  const deleteTask = (id: string) => {
    const newTasks = [...task];
    for (let i = 0; i < newTasks.length; i++) {
      if (id === newTasks[i].id) {
        newTasks.splice(i, 1);
      }
    }
    setTask(newTasks);
  }

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTaskCopy = [...currentTask];
    currentTaskCopy[0].inputUser = event.target.value;
    setCurrentTask(currentTaskCopy);
  };

  const newTask = () => {
    if (currentTask[0].inputUser !== 'Add new task') {
      const newTask = {
        inputUser: currentTask[0].inputUser,
        id: String(Math.floor(Math.random() * (10000 - 5 + 1)) + 5),
        style: 'none'
      }
      const tasksCopy = [...task, newTask];
      setTask(tasksCopy);
    }
  }

  return (
    <div className="App">
      <AddTaskForm onClick={newTask} currentTask={currentTask[0].inputUser}
                   onTaskChange={event => changeTask(event)}/>
      {firstThreeTask}
    </div>
  );
}

export default App;
