import styled from "styled-components";

export const StldProductCart = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 300px;
  width: 330px;
  figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      margin-left: 10px ;
      border-radius: 5px;
      background-color: rgba(224, 224, 224, 1);
  }
  figure img {
      width: 70px;
      height: auto;
  }
  div {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }
  div p {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 10px;
  }
  div span {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: rgba(130, 130, 130, 1);
  }
  button {
      margin-right: 5px;
      margin-left: auto;
      cursor: pointer;
      display: flex;
      align-items: flex-start;
      margin-top: 5px;
      background: none;
      border: none;
      color: rgba(189, 189, 189, 1);
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 12px;
  }
`;
