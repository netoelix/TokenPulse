import styled from 'styled-components';

export const FavoriteContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(290deg, rgba(252,163,17,1) 20%, transparent 10%,
    transparent 100%);
    height: 100vh;
    h2 {
        margin: 50px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
    }
    table {
        border-spacing: 0;
        background-color: #14213D;
        padding: 20px;
        border-radius: 30px;
        border: 1px solid #FCA311;
    }
    .hoverElement:hover {
        background-color: grey;
    }
    th:hover{
        cursor: pointer;
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
