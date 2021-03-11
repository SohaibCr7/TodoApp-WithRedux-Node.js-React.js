import React from "react";
import {connect} from "react-redux";
function Example({todos = []}){
    console.log(todos)
    return(
        <div>
            <h3>Hello {todos.map((todo) => todo.text)}  </h3>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
  });

export default connect(mapStateToProps)(Example);
