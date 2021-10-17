import React, { useState } from "react";

export default ({ todos, addTodo, removeTodo }) => {
  const [text, changeText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="To do ..."
        onChange={(e) => changeText(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            if (text !== "") addTodo(text);
            changeText("");
          }
        }}
        style={styles.input}
      />
      <button
        onClick={() => {
          if (text !== "") addTodo(text);
          changeText("");
        }}
        style={styles.addBtn}
      >
        add
      </button>
      <ul style={styles.listTodo}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todo}>
            <p style={styles.todoText}>{todo.content}</p>
            <button
              onClick={() => {
                removeTodo(todo.id);
                changeText("");
              }}
              style={styles.removeBtn}
            >
              done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  input: {
    fontSize: 16,
    border: 0,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    paddingLeft: 20,
    marginTop: 30,
    marginRight: 10
  },
  addBtn: {
    height: 30,
    width: 100,
    backgroundColor: "#fff",
    borderColor: "#000",
    fontSize: 14,
    color: "#000",
    fontWeight: "bold"
  },
  listTodo: {
    listStyle: "none",
    marginRight: "10%",
    marginLeft: "10%"
  },
  todo: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  todoText: {
    margin: 0,
    padding: 0,
    overflow: "hidden"
  },
  removeBtn: {
    height: 25,
    width: 50,
    backgroundColor: "#000",
    borderColor: "#fff",
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  }
};
