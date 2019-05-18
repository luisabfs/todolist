/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Wrapper, ListContainer, ActionsContainer,
} from './styles';

import Todo from '../../components/Todo';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('Please enter a title')
    .max(20),
});

export default class Main extends Component {
  state = {
    todos: [
      {
        title: 'Módulo 3 - React',
        checked: false,
      },
    ],
  };

  handleSubmit = (data, { resetForm }) => {
    const { todos } = this.state;

    this.setState({
      todos: [data, ...todos],
    });

    resetForm();
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
    // const { todos } = this.state;
    // const updateTodos = todos.map((state) => {
    //   if (state.title === todo.title) {
    //     todo.checked = !todo.checked;
    //     return todo;
    //   }
    //   return state;
    // });
    // this.setState({
    //   updateTodos,
    // });
  };

  onDelete = (e, todo) => {
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
    const { todos } = this.state;

    return (
      <Container>
        <Wrapper>
          <img src={logo} alt="todo list" />

          <Form schema={schema} onSubmit={this.handleSubmit}>
            <Input name="title" placeholder="Add a todo" />
            <Input type="hidden" name="checked" defaultChecked={false} />
            <button type="submit">+</button>
          </Form>

          <ListContainer>
            {todos.map((todo, index) => (
              <label key={index}>
                <Todo
                  title={todo.title}
                  checked={todo.checked}
                  onChange={() => this.onChecked(todo)}
                />
                <ActionsContainer>
                  <FontAwesomeIcon onClick={this.onUpdate(todo)} icon={faPen} size="sm" />
                  <FontAwesomeIcon onClick={this.onDelete(todo)} icon={faTimes} />
                </ActionsContainer>
              </label>
            ))}
          </ListContainer>
        </Wrapper>
      </Container>
    );
  }
}
