import { React } from "react";
import "./TodoList.css";
import { connect } from "react-redux";
import NewTodoForm from "../Components/NewTodoForm";
import TodoListItem from "../Components/TodoListItem";
import { removeTodo } from "../Store/actions";
import { useEffect } from "react";

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
  temp:state.todos.isUserLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
