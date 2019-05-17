import styled from 'styled-components';

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#b2bec3' : '#dfe6e9')}
  border-radius: 3px;
  transition: all 150ms;

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px black;
  } */

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
  color: #2d3436;
  font-size: 20px;
  margin: 2px 8px;

  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;
