import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Todo from "../pages/Todo";
import TitleBody from "./TitleBody";

const Title = ({ todo }) => {
  let taskList = async () => {
    let taskResponse = await fetch("/api/task/");
    let data = await taskResponse.json();
    setTask(data);
  };

  let [Tasks, setTask] = useState([""]);
  useEffect(() => {
    taskList();
  }, []);

  return (
    <div>
      <Link to={"/" + todo.title}>
        <Todo todo={todo} />
        {todo.title}
      </Link>
      <div>
        {Tasks.map((task, index) => (
          <div key={index}>
            {todo.id === task.todo ? <TitleBody task={task} /> : <span />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
