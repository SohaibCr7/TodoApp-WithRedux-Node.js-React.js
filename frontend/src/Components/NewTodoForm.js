import React, { useState } from "react";
import {connect} from "react-redux";
import {createTodo} from "../Store/actions";

import "./NewTodoForm.css";

const NewTodoForm = ({todos , onCreatePressed}) => {

    const [input,setInput] = useState('');

  return (
    <div className="new-todo-form">
      <input className="new-todo-input" type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button className="new-todo-button" onClick={() => {
        const isDuplicateText = todos.some(todo => todo.text === input)
        if(!isDuplicateText)
        {
          onCreatePressed(input);
          setInput("");
        }
       
      }}>Create Todo</button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
});

export default connect( mapStateToProps , mapDispatchToProps ) ( NewTodoForm );
