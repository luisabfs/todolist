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

  form {
    display: flex;
    margin: 30px;

    input {
      flex: 1;
      width: 220px
      height: 40px;
      border: solid 2px #333;
      border-radius: 3px;
      margin-right: 10px;
      padding: 7px;
      color: #2d3436;
      font-size: 15px;
    }

    button {
      width: 40px;
      height: 40px;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 3px;
      background-color: #636e72;
      font-size: 20px;
      transition: ease-in-out .2s;

      &:hover {
        background: #828b8e;
      }
    }
  }
`;
