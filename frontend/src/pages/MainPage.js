import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../component/Title";

const MainPage = () => {
  let todoList = async () => {
    let response = await fetch("/api/source/");
    let data = await response.json();
    setTodo(data);
  };

  let [Todos, setTodo] = useState([""]);
  useEffect(() => {
    todoList();
  }, []);

  return (
    <div>
      <h3>Main Pages show</h3>
      <div>
        {Todos.map((todo, index) => (
          <div key={index}>
            <Title todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
