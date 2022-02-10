import styled from "styled-components";

export const StldHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 139px;
  background-color: rgba(245, 245, 245, 1);

  @media screen and (min-width: 720px) {
      flex-direction: row;
      justify-content: space-around;
  }
    figure img {
        width: 158.94px;
        height: 36.83px;
    }
    input {
        border: none;
        border-radius: 8px;
        width: 300px;
        height: 50px;
        padding: 0px 10px 0px 15px;
        color: black;
    }
    form {
        display: flex;
        align-items: center;
    }
    button {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        width: 87px;
        height: 35px;
        border: none;
        border-radius: 8px;
        background-color: rgba(39, 174, 96, 1);
        color: white;
        margin-left: -100px;
    }
    button:hover {
        background-color: white;
        color: rgba(39, 174, 96, 1);
        border: 2px solid rgba(39, 174, 96, 1);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.52);
    }
`;
