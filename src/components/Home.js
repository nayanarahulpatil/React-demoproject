import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Todomodal from "./Todomodal";
export default function HomePage() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [todomodal, setTodomodal] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=15")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleSelection = (id) => {
    setSelected((prevSelected) => {
      const newSelection = new Set(prevSelected);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };
  const toggleSelectAll = () => {
    console.log(selected);
    if (selected.size == data.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(data.map((ele) => ele.id)));
    }
  };

  const openToDoModal = () => {
    setTodomodal(true);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}>
               Sign Up
               </NavLink>
          </li>
          <li>
            <a onClick={openToDoModal}>To Do List</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="wrapper_title">
          <h1 className="title">Photos</h1>
          <label>
            Select All{" "}
            <input
              type="checkbox"
              className="selectall"
              onChange={toggleSelectAll}
              checked={selected.size == data.length}
            />
          </label>
        </div>
        {/* Image Grid */}
        <div className="grid">
          {data.map((user) => (
            <div
              key={user.id}
              className={`card ${selected.has(user.id) ? "selected" : ""}`}
              onClick={() => toggleSelection(user.id)}
            >
              <input
                type="checkbox"
                className="checkbox"
                checked={selected.has(user.id)}
                readOnly
              />
              <img
                src={`https://picsum.photos/200/300?random=${user.id}`}
                alt={user.title}
              />
              <p>{user.title}</p>
            </div>
          ))}
        </div>
      </div>
      {todomodal && (
        <Todomodal closeModal={()=>setTodomodal(false)}></Todomodal>
      )}
    </>
  );
}
