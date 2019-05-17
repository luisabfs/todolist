import React from 'react';
import { Container, Todo } from './styles';

const List = ({ todos }) => (
  <Container>
    {todos.map(todo => (
      <Todo key={todo.title}>
        <input type="checkbox" name="Complete To-Do" onChange={e => e.target.checked} />
        <h3>{todo.title}</h3>
      </Todo>
    ))}
  </Container>
);

export default List;
