/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { Container, Wrapper } from './styles';

import List from '../../components/List';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    todos: [
      {
        key: 'Cagar',
        title: 'Cagar',
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

  render() {
    const { todos } = this.state;

    return (
      <Container>
        <Wrapper>
          <img src={logo} alt="todo list" />

          <Form onSubmit={this.handleSubmit}>
            <Input name="title" placeholder="Add a todo" />

            <button type="submit">+</button>
          </Form>

          <List todos={todos} />
        </Wrapper>
      </Container>
    );
  }
}
