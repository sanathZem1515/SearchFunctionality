import React, { useEffect, useRef, useState } from "react";
import TaskList from "./TaskList";
import { getTasks } from "./TaskService";

const App = () => {

  const initialTasks = useRef<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [viewHistory, setViewHistory] = useState<boolean>(false);

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
    search(initialTasks.current, event.target.value);
  };

  useEffect(()=>{
    getTasks().then((res)=>{
      initialTasks.current = res;
    })
  },[])

  useEffect(() => {}, [initialTasks]);

  const handleButtonClick = () => {
    setViewHistory(!viewHistory);
  };

  const onAddHistory = () => {
    setHistory([...tasks,...history]);
  }

  const search = (tasksArr: string[], value: string) => {
    const filteredTasks = [];

    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].includes(value) || value === "") {
        filteredTasks.push(tasksArr[i]);
      }
    }

    setTasks([...filteredTasks]);
  };
  return (
    <div>
      <TaskList tasks={initialTasks.current}/>
      <hr />
      <input
        value={input}
        onChange={handleInputChange}
      ></input>
      <button onClick={onAddHistory}>Search</button>
      <TaskList tasks={tasks} />
      <button onClick={handleButtonClick}>View History</button>
      {viewHistory && <TaskList tasks={history} />}
    </div>
  );
};

export default App;
