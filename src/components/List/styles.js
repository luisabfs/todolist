import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justifiy-content: center;

  background: #fff;

  label {
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
`;
