/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Container, Wrapper } from './styles';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <img src={logo} alt="todo list" />
          <button type="submit">Iniciar sessão</button>
        </Wrapper>
      </Container>
    );
  }
}
