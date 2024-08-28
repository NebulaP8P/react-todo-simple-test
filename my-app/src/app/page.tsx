"use client";
import React, { useRef, useState } from 'react';
import styles from './page.module.css'
export default function Home() {
  const [todo, settodo] = useState(0);
  const [unch, setunch] = useState(0);
  const todosRef = useRef<HTMLDivElement | null>(null)
  const increase = () => {
  let div = document.createElement("div")
  div.className= styles.todo
  div.textContent = `Todo ${todo + 1}`
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  div.appendChild(checkbox)
  if (todosRef.current){
    todosRef.current.appendChild(div);
  }
  settodo(todo + 1);
  setunch(unch + 1);
  checkbox.onchange = function () {
    setunch(prevunch => checkbox.checked ? prevunch - 1 : prevunch + 1);
  };
  };
  return (
    <body className={styles.body}>
      <div className={styles.content}>
        <h1>TODO APP</h1>
        <div className={styles.display}>
          <h2>TODOS: {todo}</h2>
          <input className={styles.button} type="button" value="New Todo" onClick={increase}/>
          <h2>Unchecked TODOS: {unch}</h2>
        </div>
        <div className={styles.todos} ref={todosRef}></div>
      </div>
    </body>
  );
}