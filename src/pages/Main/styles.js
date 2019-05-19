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
      width: 242px;
      border: solid 2px #333;
      border-radius: 3px;
      margin-right: 10px;
      padding: 5px;
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
      transition: ease-in-out 0.2s;

      &:hover {
        background: #828b8e;
      }
    }
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 290px;
  height: 40px;
  margin: 5px 0;

  form {
    display: flex;
    margin: 0;

    input {
      flex: 1;
      width: 242px;
      height: 30px;
      border: 0;
      border: solid 1px #333;
    }

    button {
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 270px;
    height: 30px;
    border-bottom: 2px solid #ededed;
    margin: 5px 5px 5px 0;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  button {
    border: none;
    background: #fff;
    margin-right: 2px;
  }
`;
