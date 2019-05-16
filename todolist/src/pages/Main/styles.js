import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 350px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12px);

  button {
    width: 180px;
    height: 40px;
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 3px;
    background-color: #636e72;
  }
`;
