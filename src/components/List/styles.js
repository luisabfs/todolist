import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justifiy-content: center;

  background: #fff;
`;

export const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 270px;
  border-bottom: 2px solid #ededed;
  margin: 5px;

  input {
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }

  h3 {
    color: #2d3436;
    font-size: 20px;
    margin: 2px 8px;

    text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')};
  }
`;
