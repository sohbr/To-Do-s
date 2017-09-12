import { connect } from 'react-redux';
import {receiveTodos, receiveTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list'; // presentational component to connect

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
