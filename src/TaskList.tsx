import React from "react";

export type TaskListProps = {
  tasks: string[];
};


const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return <div>{task}</div>;
      })}
    </div>
  );
};

export default TaskList;
