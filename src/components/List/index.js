/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container, ActionsContainer } from './styles';

import Todo from '../Todo';

export default class List extends Component {
  // state = { checked: false };

  render() {
    const { todos, checked } = this.props;
    return (
      <Container>
        {todos.map(todo => (
          <label key={todo.title}>
            <Todo title={todo.title} checked={todo.checked} onChange={todo.isChecked} />
            <ActionsContainer>
              <FontAwesomeIcon icon={faPen} size="sm" />
              <FontAwesomeIcon icon={faTimes} />
            </ActionsContainer>
          </label>
        ))}
      </Container>
    );
  }
}
