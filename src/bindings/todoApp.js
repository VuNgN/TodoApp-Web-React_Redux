import { connect } from "react-redux";
import TodoApp from "../components/todoApp";
import { addTodo, removeTodo } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.items
  };
};

const mapActionToProps = {
  addTodo,
  removeTodo
};

export default connect(mapStateToProps, mapActionToProps)(TodoApp);
