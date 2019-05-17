import React from 'react';

import {
  CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, Title,
} from './styles';

const Todo = ({ title, checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <Title checked={checked}>{title}</Title>
  </CheckboxContainer>
);

export default Todo;
