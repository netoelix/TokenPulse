import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, transparent 50%,
    rgba(252,163,17,1) 20%);

    table {
        border-spacing: 0;
        background-color: #14213D;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #FCA311;
        box-shadow: rgba(14, 30, 37, 0.12) 
        0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
    .hoverElement:hover {
        background-color: grey;
    }
    th:hover{
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }
    th {
        border-top: 1px solid #FCA311;
        padding: 10px;
        font-size: 20px;
    }
    td {
        border-top: 1px solid #FCA311;
        padding: 10px;
        font-size: 20px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }
    button {
        background-color: transparent;
        border: none;
        margin: 0px 10px;
        img {
            width: 20px;
            height: 20px;
        }
    }
    .negative {
        color: red;
    }
    .positive {
        color: #80ed99;
    }
`;
