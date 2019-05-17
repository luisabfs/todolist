/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Container } from './styles';

import Todo from '../Todo';

// const List = ({ todos }) => (
//   <Container>Todo
//     {todos.map(todo => (
//       <Todo key={todo.title}>
//         <input type="checkbox" name="Complete To-Do" onChange={e => e.target.checked} />
//         <h3>{todo.title}</h3>
//       </Todo>
//     ))}
//   </Container>
// );

// export default List;

export default class List extends Component {
  state = { checked: false };

  render() {
    const { checked } = this.state;
    const { todos } = this.props;
    return (
      <Container>
        {todos.map(todo => (
          <label key={todo.title}>
            <Todo
              title={todo.title}
              checked={checked}
              onChange={e => this.setState({ checked: e.target.checked })}
            />
          </label>
        ))}
      </Container>
    );
  }
}
