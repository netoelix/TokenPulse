import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    table {
        border-spacing: 0;
    }
    tr {
    }
    .hoverElement:hover {
        background-color: grey;
    }
    th:hover{
        cursor: pointer;
    }
    th {
        border-top: 1px solid black;
        padding: 10px;
        font-size: 20px;
    }
    td {
        border-top: 1px solid black;
        padding: 10px;
        font-size: 20px;
    }
`;
