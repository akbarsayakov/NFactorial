import React from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 500px;
  margin-top: 50px;
  text-align: center;
`;

const InputRow = styled.div`
  margin-top: 50px;
  flex-direction: row;
`;

const TextInput = styled.input``

const AddButton = styled.button`
  margin-left: 50px;
`;


function App() {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  console.log("tasks are", tasks)

  const addTask = () => {
    if (taskTitle.length) {
      setTasks(tasks.concat(taskTitle));
      setTaskTitle("");
    }
  };

  const onTextChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const onDelete = (index) => {
    const tasksArray = [...tasks];
    tasksArray.splice(index, 1);
    setTasks(tasksArray);
  };

  const editTask = (updatedTitle, index) => {
    const tasksArray = [...tasks]
    tasksArray[index] = updatedTitle
    setTasks(tasksArray)
  }

  

  return (
    <MainContainer>
      <Header>Todo List</Header>
      <InputRow>
        <TextInput value={taskTitle} onChange={onTextChange} />
        <AddButton onClick={addTask}>Add new task</AddButton>
      </InputRow>
      {tasks.map((task, index) => (
        <TodoItem title={task} index={index} onDelete={onDelete} editTask={editTask}  key={index}/>
      ))}
    </MainContainer>
  );
}

export default App;