import React, { Component } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Wrapper, TodoContainer, ListContainer, ActionsContainer, ErrorContainer,
} from './styles';

import Todo from '../../components/Todo';

import logo from '../../assets/logo.png';


export default class Main extends Component {
  state = {
    todos: [],
    error: '⠀',
  };

  handleSubmit = async (data, { resetForm }) => {
    const { todos } = this.state;

    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .required('Please enter a title')
          .max(25),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      this.setState({
        todos: [data, ...todos],
        error: '⠀',
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        this.setState({
          error: error.message,
        });
      }
    }

    resetForm();
  };

  handleUpdate = (data, todo) => {
    const { todos } = this.state;

    const updateTodos = todos.map((state) => {
      if (state.title === todo.title) {
        todo.title = data.title;
        todo.updated = !todo.updated;
        return todo;
      }
      return state;
    });
    this.setState({
      updateTodos,
    });
  };

  onChecked = (todo) => {
    const { todos } = this.state;
    const updateTodos = todos.map((state) => {
      if (state.title === todo.title) {
        todo.checked = !todo.checked;
        return todo;
      }
      return state;
    });
    this.setState({
      updateTodos,
    });
  };

  onUpdate = (todo) => {
    const { todos } = this.state;

    const updateTodos = todos.map((state) => {
      if (state.title === todo.title) {
        todo.updated = !todo.updated;
        return todo;
      }
      return state;
    });
    this.setState({
      updateTodos,
    });
  };

  onDelete = (todo) => {
    const { todos } = this.state;

    const index = todos.indexOf(todo);

    if (index !== -1) {
      todos.splice(index, 1);
      this.setState({
        ...todos,
      });
    }
  };

  render() {
    const { todos, error } = this.state;

    return (
      <Container>
        <Wrapper>
          <img src={logo} alt="todo list" />

          <Form onSubmit={this.handleSubmit}>
            <Input error={error} name="title" placeholder="Add a todo" />
            <Input name="checked" type="hidden" defaultChecked={false} />
            <Input name="updated" type="hidden" defaultChecked={false} />
            <button type="submit">+</button>
          </Form>

          <ErrorContainer>
            <label>{error}</label>
          </ErrorContainer>

          <ListContainer>
            {todos.map(todo => (
              <TodoContainer key={Math.random()}>
                {!todo.updated ? (
                  <label>
                    <Todo
                      title={todo.title}
                      checked={todo.checked}
                      onChange={() => this.onChecked(todo)}
                    />
                  </label>
                ) : (
                  <Form
                    initialData={{ title: todo.title }}
                    onSubmit={e => this.handleUpdate(e, todo)}
                  >
                    <Input name="title" />
                  </Form>
                )}

                <ActionsContainer>
                  <button type="button">
                    <FontAwesomeIcon onClick={() => this.onUpdate(todo)} icon={faPen} size="sm" />
                  </button>
                  <button type="button">
                    <FontAwesomeIcon onClick={() => this.onDelete(todo)} icon={faTimes} size="lg" />
                  </button>
                </ActionsContainer>
              </TodoContainer>
            ))}
          </ListContainer>
        </Wrapper>
      </Container>
    );
  }
}
