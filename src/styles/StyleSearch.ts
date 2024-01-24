import styled from 'styled-components';

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(290deg, rgba(252,163,17,1) 20%, transparent 10%,
    transparent 100%);
    padding-top: 180px;

    h2 {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
    }
    .inputSearch {
        width: 300px;
        font-size: 35px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #FCA311;
        margin: 20px;
        background-color: #14213D;
        font-weight: bold;
    }

    button {
        width: 300px;
        font-size: 35px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #FCA311;
        margin: 20px;
        background-color: #14213D;
        font-weight: bold;
        cursor: pointer;
    }

    table {
        border-spacing: 0;
        border: 1px solid #FCA311;
        border-radius: 10px;
        margin: 20px;
        background-color: #14213D;
        padding: 20px;
        box-shadow: rgba(14, 30, 37, 0.12) 
        0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }

    tr {
    }

    .hoverElement:hover {
        background-color: grey;
    }

    th {
        padding: 10px;
        font-size: 20px;
    }

    td {
        border-top: 1px solid #FCA311;
        padding: 10px;
        font-size: 20px;
    }
    .negative {
        color: red;
    }
    .positive {
        color: #80ed99;
    }
`;
