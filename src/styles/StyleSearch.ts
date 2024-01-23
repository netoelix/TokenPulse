import styled from 'styled-components';

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    input {
        width: 300px;
        font-size: 35px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        margin: 20px;
    }

    table {
        border-spacing: 0;
        border: 1px solid black;
        border-radius: 10px;
        margin: 20px;
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
        border-top: 1px solid black;
        padding: 10px;
        font-size: 20px;
    }
`;
