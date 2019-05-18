/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Wrapper, ListContainer, ActionsContainer,
} from './styles';

import List from '../../components/List';
import Todo from '../../components/Todo';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    todos: [
      {
        title: 'bibi',
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

  render() {
    const { todos } = this.state;

    return (
      <Container>
        <Wrapper>
          <img src={logo} alt="todo list" />

          <Form onSubmit={this.handleSubmit}>
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
                  <FontAwesomeIcon icon={faPen} size="sm" />
                  <FontAwesomeIcon icon={faTimes} />
                </ActionsContainer>
              </label>
            ))}
          </ListContainer>

          {/* <List todos={todos} checked={checked} onChange={this.isChecked} /
           */}
        </Wrapper>
      </Container>
    );
  }
}
