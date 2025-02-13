import React, { useState } from "react";

function Todomodal({ closeModal }) {
  const [todotext, setTodatext] = useState("");
  const [tododata, setTododdata] = useState([]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e)=>{
    if(e.key == "Enter"){
        addToList()
    }
  }
  const addToList = () => {
    if (todotext.trim() === "") return;
    setTododdata((pre) => [...pre, todotext.trim()]);
    setTodatext("");
  };
  const deleteTask = (index) =>{
    setTododdata((pre)=>{
        return pre.filter((ele,i)=>i !==index)
    })
  }
  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>
        <h2>To-Do List</h2>
        <input
          type="text"
          placeholder="Add your tasks here..."
          value={todotext}
          onChange={(e) => setTodatext(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="addbutton" onClick={addToList}>Add To List</button>
        <ul>
          {tododata?.map((item, index) => (
            <li key={index}>{item} <a onClick={()=>deleteTask(index)}>✖</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todomodal;
