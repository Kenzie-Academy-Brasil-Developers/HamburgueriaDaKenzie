import styled from "styled-components";

export const StldCartWithProducts = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  max-height: 660px;
  height: 660px;
  margin-top: -33px;
  .cartHeader {
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    width: 330px;
    height: 65px;
    background-color: rgba(39, 174, 96, 1);
  }
  .cartHeader p {
    margin-left: 21.04px;
    color: white;
    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }

`;

export const StldCartEmpty = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  .cartHeader {
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    width: 330px;
    height: 65px;
    background-color: rgba(39, 174, 96, 1);
  }
  .cartHeader p {
    margin-left: 21.04px;
    color: white;
    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }
  .cartBody {
      width: 330px;
      background-color: rgba(245, 245, 245, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 360px;
  }
  .cartBody p {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;
  }
  .cartBody span {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: rgba(130, 130, 130, 1);
  }
`;

export const StldCartProductsContainer = styled.div`
    height: 360px;
    overflow-x: scroll;
    max-height: 330px;
    background-color: rgba(245, 245, 245, 1);
    ::-webkit-scrollbar {
        display: none;
    }
`

export const StldContainerTotal = styled.div`
    width: 330px;
    height: 150px;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 20px;
    button {
      cursor: pointer;
      margin-top: 30px;
      width: 265px;
      height: 50px;
      background-color: rgba(224, 224, 224, 1);
      border: none;
      border-radius: 8px;
      color: rgba(130, 130, 130, 1);
      font-size: 16px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }
`

