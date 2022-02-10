import styled from "styled-components"

export const StldContainer = styled.div`
    margin-left: 10px;
    margin-top: 15px;
    width: 300px;
    height: 346px;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(224, 224, 224, 1);
    border-radius: 5px;
        figure {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 150px;
            background-color: rgba(245, 245, 245, 1);
        }
        figure img {
            width: 150px;
            height: 150px;
        }
        div {
            display: flex;
            flex-direction: column;
            padding: 26px 21px;
        }
        div h3 {
            font-size: 18px;
            font-weight: 700;
            font-family: 'Inter', sans-serif;
            margin-bottom: 14px;
        }
        div span {
            font-size: 12px;
            font-family: 'Inter', sans-serif;
            color: rgba(130, 130, 130, 1);
            margin-bottom: 14px;
        }
        div .price {
            font-size: 14px;
            font-weight: 600;
            color: rgba(39, 174, 96, 1);
            margin-bottom: 18px;
        }
        div button {
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 600;
            width: 106px;
            height: 40px;
            border-radius: 8px;
            padding: 0px 20px;
            border: none;
            color: white;
            background-color: rgba(39, 174, 96, 1);
        }
        div button:hover {
        background-color: white;
        color: rgba(39, 174, 96, 1);
        border: 2px solid rgba(39, 174, 96, 1);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.52);
        }
`