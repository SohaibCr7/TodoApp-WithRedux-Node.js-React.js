import React from "react";
import "./TodoList.css";
import { connect } from "react-redux";
import NewTodoForm from "../Components/NewTodoForm";
import TodoListItem from "../Components/TodoListItem";
import { removeTodo } from "../Store/actions";
const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
